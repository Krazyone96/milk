// creating a database of questions

let data = [
	{
	numb: 1,
	question: "What is the fat content of Low Fat Cream?",
	answer: "25.0%",
	options: [
		"15.0%",
		"25.0%",
		"40.0%",
		"60.0%"
	]
	},
	{
	numb: 2,
	question: "What is the fat content of Medium Fat Cream?",
	answer: "40.0%",
	options: [
		"40.0%",
		"15.0%",
		"25.0%",
		"60.0%"
	]
	},
	{
	numb: 3,
	question: "What is the fat content of High Fat Cream?",
	answer: "60.0%",
	options: [
		"25.0%",
		"60.0%",
		"40.0%",
		"15.0%"
	]
	},
];


for (let i = data.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = data[i]
	data[i] = data[j]
	data[j] = k
	}

// A second array to store the number of questions based on user selection
let questions =[]


for (let a = questions.length - 1; a>0; a--){
	let b = Math.floor(Math.random()*a)
	let c = questions[a]
	questions[a] = questions[b]
	questions[b] = c
	}
];

for (let i = questions.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = questions[i]
	questions[i] = questions[j]
	questions[j] = k
	}
