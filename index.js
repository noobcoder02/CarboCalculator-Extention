// const url = "https://www.youtube.com/"


const get_data = async()=>{
	// try
	// {
	// 	const res = await fetch('https://official-joke-api.appspot.com/random_joke',);
	// 	const data = await res.json();
	// 	const content = document.getElementById('content');
	// 	const co2 = data.punchline;
	// 	content.innerHTML = co2;
	// }
	// catch(error){
	// 	console.log(error);
	// }
	fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.wholegraindigital.com%2F', )
		.then((data) => data.json())
		.then((data) => {
			console.log(data);
			const content = document.getElementById('content');
			const co2 = data.statistics.co2.grid.grams;
			content.innerHTML = co2;
		})
};


window.addEventListener("load",()=>{
	get_data()});