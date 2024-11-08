import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginAstro from 'eslint-plugin-astro'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2020,
				...globals.browser,
			},
		},
	},
	{
		plugins: {
			astro: pluginAstro,
			prettier: pluginPrettier,
		},
	},
	{
		ignores: ['node_modules', 'dist'],
	},
	js.configs.recommended,
	...pluginAstro.configs.recommended,
	{
		rules: {
			...configPrettier.rules,
			'sort-imports': 'off',
			'import/order': 'off',
			'no-var': 'error',
			'prefer-const': 'off',
			'func-names': 'off',
			'no-irregular-whitespace': 'off',
		},
	},
]
