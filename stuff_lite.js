var vue = new Vue({
	el: '#body',
	data: {
		menu_open: false,
		joe_mama: {
			username: "Joe 🎸",
			id: "246107833295175681",
			discriminator: 7070,
			avatar: null
		},
		dutchman: {
			username: "Mark.",
			id: "391743942070370304",
			discriminator: 9999,
			avatar: null
		},
		prefix: ';'
	},
	methods: {
		getAvatar: (userObject, size = 32) => {
			if (userObject.avatar)
				return `https://cdn.discordapp.com/avatars/${userObject.id}/${userObject.avatar}.${userObject.avatar.startsWith('a_') ? 'gif' : 'png'}?size=${size}`;
			return `https://cdn.discordapp.com/embed/avatars/${userObject.discriminator % 5}.png`;
		}
	}
});

fetch('https://api.benderbot.co/devs').then(response => {
	if (response.ok) {
		response.json().then(obj => {
			vue.joe_mama = obj.joe;
			vue.dutchman = obj.mark;
		}).catch(console.error);
	}
}).catch(console.error);
