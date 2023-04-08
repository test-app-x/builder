module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:vue/vue3-strongly-recommended",
		"eslint:recommended",
	],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: [
		"vue",
	],
	rules: {
		"no-tabs": "off",
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		"no-param-reassign": ["error", { props: false }],
	},
};
