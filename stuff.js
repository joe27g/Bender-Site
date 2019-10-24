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