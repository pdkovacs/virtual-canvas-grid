import React, { useEffect, useRef } from "react";
import 	{ createRoot } from "react-dom/client";

const drawGrid = (el: HTMLCanvasElement, width: number, height: number): void => {
	const ctx = el.getContext("2d");
	if (ctx === null) {
		console.error("failed to create 2d context");
		return;
	}

	const s = 28;
	const pL = s;
	const pT = s;
	const pR = s;
	const pB = s;

	ctx.strokeStyle = "lightgrey";
	ctx.beginPath();
	for (let x = pL; x <= width - pR; x += s) {
		ctx.moveTo(x, pT);
		ctx.lineTo(x, height - pB);
	}
	for (let y = pT; y <= height - pB; y += s) {
		ctx.moveTo(pL, y);
		ctx.lineTo(width - pR, y);
	}
	ctx.stroke();
};

const App = (): JSX.Element => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current !== null) {
			drawGrid(canvasRef.current, 300, 180);
		}
	}, [canvasRef]);

	return <div>
		<div>Hello, Virtual Canvas Grid!</div>
		<canvas className="grid-canvas" ref={canvasRef}></canvas>
	</div>;
};

const mountPointSelector = "div#app";
const appElement = document.querySelector(mountPointSelector);

if (appElement !== null) {
	const root = createRoot(appElement);
	root.render(<App/>);
} else {
	throw new Error("Mount point " + mountPointSelector + " not found!");
}
