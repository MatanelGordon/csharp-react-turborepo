// eslint.config.js
export default [
	{
		files: ["*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		rules: {
			"no-unused-vars": "warn",
			"no-console": "off",
		},
	},
];
