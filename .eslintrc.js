module.exports = {
	extends: ["@bd-dm/eslint-config-react", "plugin:cypress/recommended"],
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	rules: {
		"no-unused-expressions": "off",
	},
};
