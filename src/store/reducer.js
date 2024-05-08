export const reducer = (state, action) => {

	switch (action.type) {

		case 'CREATE_COMMENT':
			return {
				...state,
				comments: [
					...state.comments,
					{
						id: Date.now(),
						text: action.text,
						votes: 0,
						author: 'John Doe',
						photo: 'https://picsum.photos/id/245/200/300',
						date: new Date(),
						authorized: true,
						reply: '',
					}
				]
			};

		case 'VOTE_COMMENT':
			return state.map((comment) => {
				if (comment.id === action.payload.id) {
					return {...comment, votes: comment.votes + 1};
				}
				return comment;
			});

		case 'DELETE_COMMENT':
			return state.filter((comment) => comment.id !== action.payload.id);

		case 'EDIT_COMMENT':
			return state.map((comment) => {
				if (comment.id === action.payload.id) {
					return {...comment, text: action.payload.text};
				}
				return comment;
			});

		default:
			state;
	}
}