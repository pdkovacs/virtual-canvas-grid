module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"standard-with-typescript",
		"plugin:react/recommended"
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: [
				".eslintrc.{js,cjs}"
			],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser",
		project: "./tsconfig.json"
	},
	plugins: [
		"react"
	],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-tabs": 0,
		indent: ["error", "tab"],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/indent": ["error", "tab"]
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
