module.exports = {
	singular: 'post',
	plural: 'posts',
	fields: {

		title: {
			required: true,
			type: 'string'
		},

		body: {
			required: true,
			type: 'string'
		},

		user: {
			required: true,
			type: 'user' // Note singular
		},

		comments: {
			required: true,
			type: 'comments' // Note plural
		}

	}
}
