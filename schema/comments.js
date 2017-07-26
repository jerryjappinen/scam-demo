module.exports = {
	singular: 'comment',
	plural: 'comments',
	fields: {

		post: {
			// required: true,
			type: 'post'
		},

		user: {
			// required: false,
			type: 'user'
		},

		body: {
			// required: true,
			type: 'string'
		}

	}
}
