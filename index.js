chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	let url = encodeURIComponent(tabs[0].url);
	fetch('https://apiserver-p43l.onrender.com/api/' + url)
		.then((data) => data.json())
		.then((data) => {
			let content = document.querySelector('#content');
			let text = data.statistics.co2.grid.grams;
			content.innerHTML = text;
		});
});
