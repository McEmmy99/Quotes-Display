const quotes = [
	{
		name:'Stephen King',
		quote:'Get busy living or get busy dying.'
	},
	{
		name:'John F. Kennedy',
		quote:'Those who dare to fall miserably can achieve greatly.'
	},
	{
		name: 'Abraham Lincoln',
		quote: 'I\'m a success today because I had a friend who believed in me and I didnt have the heart to let him down.'
	},
	{
		name:'Leonardo Da Vinci',
		quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
	},
	{
		name:'Leo Toltsy',
		quote:'If you want to be happy, be.'
	},
	{
		name:'Anonymous',
		quote:'When the road gets tough, the tough gets going.'
	},
	{
		name:'Wole Soyinka',
		quote:'Weak people revenge, strong people forgive but a wise man ignores.'
	}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('blockquote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', getQuote);

function getQuote () {
	let number = Math.floor(Math.random()*quotes.length);
	quote.innerHTML = quotes[number].quote;
	quoteAuthor.innerHTML = quotes[number].name;
}