var vue = new Vue({
	el: '#body',
	data: {
		menu_open: false,
		commands: {
			'infos': [],
			'mod': [],
			'misc': [],
			'fun': [],
			'text-tools': [],
			'settings': [],
			'util': [],
			'music': [],
			'nsfw': [],
			'image-tools': [],
			'memes': [],
			'game-stats': []
		},
		groupNames: {
			'infos': 'Information',
			'mod': 'Moderation',
			'misc': 'Miscellaneous',
			'fun': 'Fun',
			'text-tools': 'Text Tools',
			'settings': 'Settings',
			'util': 'Utility',
			'music': 'Music',
			'nsfw': 'NSFW',
			'image-tools': 'Image Tools',
			'memes': 'Memes',
			'game-stats': 'Game Stats'
		},
		prefix: ';',
		selected_group: "settings",
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
		}
	},
	methods: {
		getAvatar: (userObject, size = 32) => {
			if (userObject.avatar)
				return `https://cdn.discordapp.com/avatars/${userObject.id}/${userObject.avatar}.${userObject.avatar.startsWith('a_') ? 'gif' : 'png'}?size=${size}`;
			return `https://cdn.discordapp.com/embed/avatars/${userObject.discriminator % 5}.png`;
		}
	}
});

fetch('https://api.benderbot.co/commands_devs').then(response => {
	if (response.ok) {
		response.json().then(obj => {
			vue.commands = obj.commands;
			vue.joe_mama = obj.devs.joe;
			vue.dutchman = obj.devs.mark;
		}).catch(console.error);
	}
}).catch(console.error);
