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
		commands: {},
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
