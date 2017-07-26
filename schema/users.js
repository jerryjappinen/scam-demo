module.exports = {
	cache: 30,
	singular: 'user',
	plural: 'users',
	fields: {

		name: {
			// required: true,
			type: 'string'
		},

		email: {
			// required: true,
			type: 'string'
		},

		accessLevel: {
			// required: false,
			type: 'number',
			default: 0
		},

		phone: {
			// required: false,
			type: 'string',
			default: null
		}

	}
}
