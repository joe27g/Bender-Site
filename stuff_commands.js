const mdParse = window.SimpleMarkdown.defaultBlockParse;
const htmlOutput = window.SimpleMarkdown.reactFor(window.SimpleMarkdown.ruleOutput(window.SimpleMarkdown.defaultRules, 'html'));
const masonries = {};

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
		highlighted_command: null,
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
		},
		parseMD: str => htmlOutput(mdParse(str))[0].replace(/\[p\]/g, vue.prefix).replace(/<a href="/g, '<a target="_blank" href="').replace(/\n/g, '<br>').replace(/^<div class="paragraph">/, '').replace(/<\/div>$/, '')
	},
	watch: {
		selected_group: function(sel_group) {
			if (!masonries[sel_group]) setTimeout(() => {
				masonries[sel_group] = new Masonry('#'+sel_group, {
					itemSelector: '.command.box',
					percentPosition: true
				});
			});
		},
		highlighted_command: function(cmd_name) {
			if (!cmd_name) return;
			const cmdElement = document.getElementById(cmd_name);
			if (!cmdElement) return;
			setTimeout(() => cmdElement.scrollIntoView({ behavior: 'smooth', block: 'center' }));
			setTimeout(() => vue.highlighted_command = null, 5000);
		}
	}
});

window.onhashchange = processHash;

function processHash(oldURL, newURL = window.location.href) {
	let hash = newURL.match(/#(.+)?$/) ? newURL.match(/#(.+)?$/)[1] : undefined;
	if (!hash || oldURL == newURL) return;

	let cmd;
	for (const group in vue.commands) {
		if (!Array.isArray(vue.commands[group])) break;
		cmd = vue.commands[group].find(c => c.name === hash.toLowerCase() || (c.aliases && c.aliases.includes(hash.toLowerCase())));
		if (cmd) break;
	}
	if (cmd) {
		vue.selected_group = cmd.group;
		vue.highlighted_command = cmd.name;
	}
}

fetch('https://api.benderbot.co/commands_devs').then(response => {
	if (response.ok) {
		response.json().then(obj => {
			vue.commands = obj.commands;
			setTimeout(() => {
				masonries[vue.selected_group] = new Masonry('#'+vue.selected_group, {
					itemSelector: '.command.box',
					percentPosition: true
				});
				setTimeout(processHash);
			});
			vue.joe_mama = obj.devs.joe;
			vue.dutchman = obj.devs.mark;
		}).catch(console.error);
	}
}).catch(console.error);
