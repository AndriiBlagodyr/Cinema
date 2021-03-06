module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true
	},
	extends: ['react-app', 'prettier'],
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
	globals: {},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src']
			}
		}
	},
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/order': [2, { groups: ['builtin', 'external'], 'newlines-between': 'always' }],
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prefer-stateless-function': [2],
		'react/prop-types': 'off',
		'prettier/prettier': 'error',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'func-names': 'off',
		'max-len': ['warn', 120],
		'no-param-reassign': 'off',
		'no-process-exit': 'off',
		'no-return-await': 'off',
		'no-shadow': ['warn', { builtinGlobals: false, hoist: 'functions', allow: [] }],
		'no-underscore-dangle': 'off',
		'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|val' }],
		'no-console': 'warn',
		'no-debugger': 'error',
		'object-shorthand': 'off',
		'spaced-comment': 'off',
		'space-infix-ops': [2]
	}
};
