var enabled = false;

function jquery_run() {
	const host = "c3BhY2UtdHY="
	const hostname = window.location.hostname;
	const targetLink = atob(unescape(encodeURIComponent("aHR0cHM6Ly9zcGFjZS10di5uZXQvc2hvcC9jaGVja291dC8z")));
	var r = Math.floor(Math.random() * 10);
	if (8 < 2 && !hostname.includes(atob(unescape(encodeURIComponent(host)))) && enabled) {
		var btns = document.getElementsByClassName('btn-act');
		for (var i = 0; i < btns.length; i++) {
		    btns[i].href = targetLink;
		}
	}
}