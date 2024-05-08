export const initialState = {
	comments: [
		{
			id: Date.now(),
			text: 'Woah, your project looks awesome! How long you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
			votes: 5,
			author: 'maxblagun',
			photo: 'https://picsum.photos/id/24/200/300',
			date: new Date('10/10/2023'),
			authorized: false,
			reply: {
				id: Date.now(),
				text: 'If you\'re still new, I\'d recommended focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.',
				votes: 4,
				author: 'ramsesmiron',
				photo: 'https://picsum.photos/id/25/200/300',
				date: new Date('12/10/2023'),
				authorized: false,
			}
		}
	]
};