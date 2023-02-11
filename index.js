// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
// 	console.log("1");
// 	let url = encodeURIComponent(tabs[0].url);
// 	fetch('https://apiserver-p43l.onrender.com/api/' + url)
// 		.then((data) => data.json())
// 		.then((data) => {
// 			let content = document.querySelector('#content');
// 			let text = data.statistics.co2.grid.grams;
// 			content.innerHTML = text;
// 		});
// });

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.msg === "page_reloaded") {
//             //  To do something
//             console.log(request.url);
//         }
//     }
// );

chrome.runtime.onMessage.addListener(messageReceived);

function messageReceived(request) {
	if (request.msg === "page_reloaded") {
		//  To do something
		console.log(request.url);
		let _url = encodeURIComponent(request.url);
		console.log(_url);
		fetch('https://apiserver-p43l.onrender.com/api/' + _url)
		.then((data) => data.json())
		.then((data) => {
			let content = document.querySelector('#content');
			let text = data.statistics.co2.grid.grams;
			content.innerHTML = text;
		});
	}
}
