var vue = new Vue({
	el: '#body',
	data: {
		menu_open: false,
		botStats: {
			sharded: false,
			totalUsers: '???',
			totalGuilds: '???'
		},
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
		sponsors: [
			{
				username: 'JONBEAR',
				id: '270793318231703552',
				discriminator: '0001',
				avatar: 'a_d42d7037ed4e41dfa7b1d4ec92db2beb'
			},
			{
				username: 'KingMoji',
				id: '282958751852658690',
				discriminator: '8642',
				avatar: 'a_4d244326e4d64a7b5da1a246f8a0ec4d'
			},
			{
				username: 'ForgottenB',
				id: '339476546001698818',
				discriminator: '4709',
				avatar: '9a9f2b19d4e8fe7c78cba18da843c6ec'
			},
			{
				username: 'Indy',
				id: '165535234593521673',
				discriminator: '1010',
				avatar: 'a_5fe425a45eae212a1a2f1d85c8a20fc4'
			},
			{
				username: 'Blom',
				id: '66201908544540672',
				discriminator: '3848',
				avatar: 'f6e0a261f73023dd5f977a93227dfb68'
			},
			{
				username: 'SonicSteven',
				id: '194068373980708864',
				discriminator: '0001',
				avatar: 'e401ae2bf91225afa1c5d35b67f90a8e'
			},
			{
				username: 'Darkdestroyer',
				id: '540663302645219331',
				discriminator: '0001',
				avatar: 'a_c5eba83e31eeb216fbe01e7b4fc2b886'
			},
			{
				username: 'Hippo',
				id: '165126937952387072',
				discriminator: '0001',
				avatar: '64f466c70cf0be8c3fe628a0fe8725ff'
			},
			{
				username: 'Mark.',
				id: '391743942070370304',
				discriminator: '9999',
				avatar: 'a_c31d947b788e499ec7d219c09e300879'
			},
			{
				username: 'paulth2gaming',
				id: '422600703811256320',
				discriminator: '3646',
				avatar: 'e8269e467e69a1a07c20d43ed564091a'
			}
		]
	},
	methods: {
		getAvatar: (userObject, size = 32) => {
			if (userObject.avatar)
				return `https://cdn.discordapp.com/avatars/${userObject.id}/${userObject.avatar}.${userObject.avatar.startsWith('a_') ? 'gif' : 'png'}?size=${size}`;
			return `https://cdn.discordapp.com/embed/avatars/${userObject.discriminator % 5}.png`;
		}
	}
});

fetch('https://api.benderbot.co/stats_sponsors_devs').then(response => {
	if (response.ok) {
		response.json().then(obj => {
			vue.botStats = obj.stats;
			vue.sponsors = obj.sponsors;
			vue.joe_mama = obj.devs.joe;
			vue.dutchman = obj.devs.mark;
		}).catch(console.error);
	}
}).catch(console.error);
