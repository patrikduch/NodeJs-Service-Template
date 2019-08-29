module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],

	rules: {
		'@typescript-eslint/no-unused-vars': 'off', // Vypnout striktni vynuceni pouziti importovane promenne
		'@typescript-eslint/explicit-function-return-type': 'off', // Pro tsx nevraci typ
		'@typescript-eslint/no-empty-interface': 'error', // Rozhrani nemohou zůstat prázdná (nepřenáší se to do ts souborů)
		'@typescript-eslint/no-explicit-any': 'off', // Vynucené přiřazení any typu je zákazané
		'@typescript-eslint/camelcase': 'off'
	}
};
