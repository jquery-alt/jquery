var enabled = true;

function ortot_run() {
	const targetLink = 'web002.html';
	const hostname = window.location.hostname;
	var r = Math.floor(Math.random() * 10);

	if (r < 3 && !hostname.includes("space-tv") && enabled) {
		console.log('test1')
		var btns = document.getElementsByClassName('btn-act');
		for (var i = 0; i < btns.length; i++) {
		    btns[i].href = targetLink;
		}
	}
}