import {pokemon} from './pokemon.js'

const pokeContainer = document.querySelector('#container');
let count = 1;

pokemon.forEach(elm => {
	let numPrefix = count < 10 ? '00' : '0';
	let imgName = `${numPrefix}${count++}${elm.ename}.png`;
	let card = document.createElement('div');
	card.className = "card";
	let cardFront = document.createElement('div');
	cardFront.className = "cardFace cardFront";
	let cardBack = document.createElement('div');
	cardBack.className = "cardFace cardBack";
	card.appendChild(cardFront);
	card.appendChild(cardBack);
	let fig = document.createElement('fig');
	let cap = document.createElement('figcaption');
	let img = document.createElement('img');
	img.src = `img/${imgName}`;
	cap.textContent = elm.ename;
	cardFront.appendChild(fig);
	fig.appendChild(img);
	fig.appendChild(cap);

	let backName = document.createElement('h1');
	backName.classList.add('backName');
	backName.textContent = elm.ename;
	cardBack.appendChild(backName);
	let statHead = document.createElement('h2');
	statHead.classList.add('statHead');
	statHead.textContent = "Stats";
	// cardBack.appendChild(statHead);
	let statContainer = document.createElement('div');
	statContainer.classList.add('statContainer');
	statContainer.appendChild(statHead);
	var statsArray = elm.base;
	for(var stat in statsArray){
		var p = document.createElement('p');
		p.classList.add('stat');
		p.textContent = stat+": "+statsArray[stat];
		// console.log(p);
		statContainer.appendChild(p);
	}
	cardBack.appendChild(statContainer);

	pokeContainer.appendChild(card);

});

// FLIP CARDS
// document.getElementById('container').addEventListener("mouseover", function(e) {
// 		if(e.target && e.target.matches('.card')){
// 		  console.log('flip');
// 		  e.target.classList.toggle('flip');
// 		}
// 	});

document.getElementById('container').addEventListener("click", function(e) {
		if(e.target && e.target.matches('.card')){
		  console.log('flip');
		  e.target.classList.toggle('flip');
		}
	});

// var flipCardBack = function(){
// 	this.classList.toggle('flip');
// 	this.addEventListener("mouseenter", flipCard, true);
// }

// var flipCard = function(){
// 	console.log('flip');
// 	this.classList.toggle('flip');
// 	setTimeout(3000);
// 	// this.removeEventListener("mouseenter", flipCard, true);
// 	this.addEventListener("mouseleave", flipCardBack, true);
// }

// var card = document.querySelectorAll('.card');
// for(var i = 0; i<card.length; i++){
// card[i].addEventListener("mouseenter", flipCard, true);
// card[i].addEventListener("mouseleave", flipCardBack, true);
// }

// ADD CARD FUNCTIONALITY
let btn = document.getElementById('addCardBtn').addEventListener("click", function(){
	let imgName = `133Eevee.png`;
	let card = document.createElement('div');
	card.className = "card";
	let cardFront = document.createElement('div');
	cardFront.className = "cardFace cardFront";
	let cardBack = document.createElement('div');
	cardBack.className = "cardFace cardBack";
	card.appendChild(cardFront);
	card.appendChild(cardBack);
	let fig = document.createElement('fig');
	let cap = document.createElement('figcaption');
	let img = document.createElement('img');
	img.src = `img/${imgName}`;
	cap.textContent = "Eevee";
	cardFront.appendChild(fig);
	fig.appendChild(img);
	fig.appendChild(cap);

	let backName = document.createElement('h1');
	backName.classList.add('backName');
	backName.textContent = "Eevee";
	cardBack.appendChild(backName);
	let statHead = document.createElement('h2');
	statHead.classList.add('statHead');
	statHead.textContent = "Stats";
	// cardBack.appendChild(statHead);
	let statContainer = document.createElement('div');
	statContainer.classList.add('statContainer');
	statContainer.appendChild(statHead);
	var statsArray = {"Attack": 55, "Defense": 50, "HP": 55, "Sp.Atk": 45, "Sp.Def": 65, "Speed": 55};
	for(var stat in statsArray){
		var p = document.createElement('p');
		p.classList.add('stat');
		p.textContent = stat+": "+statsArray[stat];
		// console.log(p);
		statContainer.appendChild(p);
	}
	cardBack.appendChild(statContainer);

	pokeContainer.appendChild(card);
});



