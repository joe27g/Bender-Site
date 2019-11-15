const button = document.getElementById('nmenu-button');
const menu = document.getElementById('nmenu');

function toggleClass(elem, cName) {
	if (!elem || !elem.className || !cName) return;
	if (elem.className.indexOf(cName) === -1)
		elem.className += ' ' + cName;
	else
		elem.className = elem.className.replace(cName, '').trim();
}
if (button) button.onclick = function() {
	toggleClass(this, 'is-active');
	toggleClass(menu, 'is-active');
}

var vue = new Vue({
	el: '#body',
	data: {
		menu_open: false,
		joe_mama: {
			username: "Joe 🎸",
			id: "246107833295175681",
			discriminator: 7070,
			avatar: "a_9f462d01ef3f66d5f5899dc475fbb08f"
		},
		dutchman: {
			username: "Mark.",
			id: "391743942070370304",
			discriminator: 9999,
			avatar: "a_c31d947b788e499ec7d219c09e300879"
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

fetch('https://api.benderbot.co/devs').then(response => {
	if (response.ok) {
		response.json().then(obj => {
			vue.joe_mama = obj.joe;
			vue.dutchman = obj.mark;
		}).catch(console.error);
	}
}).catch(console.error);
