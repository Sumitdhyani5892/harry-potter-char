const myForm = document.querySelector("#my-form");
let hpChar = [];
const results = document.querySelector("#results");
const error = document.querySelector("#error");

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const house = e.target[0].value;
	const name = e.target[1].value;
	let output = "";
	const filteredChar = hpChar.filter((char) => {
		if (house == char.house && name == char.name) {
			return (output += `<div class="row box">
			<div class="col-6 font-italic">
			<h5>NAME:   ${char.name}</h5>
			<h5>HOUSE:  ${char.house}</h5>
			<h5>ACTOR:  ${char.actor}</h5>
			</div>
			<div class="col-6">
			<img src="${char.image}" class="image"/>
			</div>
			
			</div>`);
		}
	});
	results.innerHTML = output;
});

const loadChar = async () => {
	const res = await fetch("http://hp-api.herokuapp.com/api/characters");
	hpChar = await res.json();
	console.log(hpChar);
};

loadChar();
