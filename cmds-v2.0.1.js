document.addEventListener("DOMContentLoaded", function(event) {
    let tabs = document.querySelectorAll('#tabs .tab');

	tabs.forEach(tabElem => {
		tabElem.addEventListener('click', (e) => {
			tabs.forEach(t => {
				t.className = t.className.replace(' selected', '');
			});
			let elem = e.target.tagName == 'A' ? e.target.parentElement : e.target;
			elem.className += ' selected';
			let ph = document.querySelector('.placeholder');
			if (ph && (!ph.className || !ph.className.endsWith(' hidden'))) {
				ph.className += ' hidden';
			}
			let groups = document.querySelectorAll('.group');
			if (groups) groups.forEach(g => {
				if (!g.className || !g.className.endsWith(' hidden')) {
					g.className += ' hidden';
				}
			});
			let thisGroup = document.getElementById(elem.id.substr(4));
			if (thisGroup)
				thisGroup.className = thisGroup.className.replace(' hidden', '');
		}, true);
	});
	processHash();
});

window.onhashchange = processHash;

function processHash(oldURL, newURL = window.location.href) {
	let hash = newURL.match(/#(.+)?$/) ? newURL.match(/#(.+)?$/)[1] : undefined;
	if (!hash || oldURL == newURL) return;

	let cmd = document.getElementById(hash);
	if (!cmd) return;

	let group = cmd.parentElement.parentElement;
	let tab = document.getElementById('tab-'+group.id);
	if (!tab) return;

	tab.click();
	cmd.scrollIntoView();

	// go 10 px above where the cmd is visible
	group.scrollTop -= 10;

	cmd.className += ' flash';
	setTimeout( function() {
		cmd.className = cmd.className.replace(' flash', '');
	}, 5000);
}