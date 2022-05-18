// creating an array and passing the nuimber, questions, options and answers

let data = [
	{
	numb: 1,
	question: "What is the fat content of Low Fat Cream?",
	answer: "25.0%",
	options: [
		"15.0%",
		"25.0%",
		"40.0%",
		"60.0%",
		"None of the above"
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
		"60.0%",
		"None of the above"
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
		"15.0%",
		"None of the above"
	]
	},
	
	{
	numb: 4,
	question: "______ means the product prepared by admixture of cow-milk or buffalo-milk or both with fresh skimmed milk or by admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat as per regulations",
	answer: "Double Toned Milk",
	options: [
		"Toned Milk",
		"Double Toned Milk",
		"Skimmed Milk",
		"Recombined Milk",
		"None of the above"
	]
	},

	{
	numb: 5,
	question: "Double Toned Milk means the product prepared by ",
	answer: "All the above",
	options: [
		"Toned Milk",
		"admixture of cow-milk or buffalo-milk or both with fresh skimmed milk",
		"admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat as per regulations",
		"pasteurised and shall show a negative phosphatase test",
		"All the above"
	]
	},

	{
	numb: 6,
	question: "When fat or non-fat milk solids are used to prepare Double Toned Milk, it shall be ensured that the product remains __________ and no deposition of solids take place on standing",
	answer: "homogenous",
	options: [
		"homogenous",
		"hetergenous",
		"suspended",
		"emulsified",
		"None of the above"
	]
	},
	
	{
	numb: 7,
	question: "_______, may contain nuts (whole,fragmented or ground), chocolate, coffee or any other edible flavour, edible food colour and cane sugar",
	answer: "Flavoured milk",
	options: [
		"Flavoured milk",
		"Toned milk",
		"Skimmed milk",
		"Recombined milk",
		"None of the above"
	]
	},

	{
	numb: 8,
	question: "Flavoured milk shall be _________",
	answer: "All the above",
	options: [
		"Pasteurised",
		"Sterilised",
		"Boiled",
		"All the above",
		"None of the above"
	]
	},

	{
	numb: 9,
	question: "Flavoured milk may ________",
	answer: "All the above",
	options: [
		"contain nuts (whole, fragmented or ground), chocolate, coffee or any other edible flavour, edible food colours and cane sugar",
		"shall be pasteruised, sterilised and boiled",
		"shall be mentioned on the label",
		"All the above",
		"None of the above"
	]
	},

	{
	numb: 10,
	question: "_____ means milk or a combination of buffalo or cow milk or a product prepared by a combination of both that has been standardised to fat and solids non fat percentage by adjustment/addition of milk solids to meet the regulations",
	answer: "Full Cream Milk",
	options: [
		"Double Toned Milk",
		"Skimmed Milk",
		"Full Cream Milk",
		"Pasteurised Milk",
		"None of the above"
	]
	},

	{
	numb: 11,
	question: "Full cream milk shall be _______",
	answer: "pasteurised",
	options: [
		"sterilised",
		"boiled",
		"pasteurised",
		"All the above",
		"None of the above"
	]
	},

	{
	numb: 12,
	question: "Full cream milk means _______",
	answer: "All the above",
	options: [
		"means milk or a combination of buffalo or cow milk or a product prepared by a combination of both that has been standardised to fat and solids non fat percentage by adjustment/addition of milk solids to meet the regulations",
		"shall be pasteurised and shall show a negative Phosphatase test",
		"shall be packed in clean, sound and sanitary containers properly sealed to prevent contamination",
		"All the above",
		"None of the above"
	]
	},
	
	{
	numb: 13,
	question: "_____ is the normal mammary secretion derived from complete milking of healthy milch animal without either addition thereto or extraction therefrom unless otherwise provided in the regulations",
	answer: "Milk",
	options: [
		"Colostrum",
		"Milk",
		"Fat",
		"Whey",
		"None of the above"
	]
	},

	{
	numb: 14,
	question: "Milk shall be free from _______",
	answer: "Colostrum",
	options: [
		"Fat",
		"Whey",
		"Colostrum",
		"Casein",
		"None of the above"
	]
	},

	{
	numb: 15,
	question: "Total urea content in milk shall not be more than _______",
	answer: "700 ppm",
	options: [
		"200 ppm",
		"600 ppm",
		"500 ppm",
		"700 ppm",
		"None of the above"
	]
	},

	{
	numb: 16,
	question: "______ means a combination of milk of cow, buffalo, sheep, goat or any other milch animal and may be a combination of any of these milk which has been made and conforms to the standards",
	answer: "Mixed milk",
	options: [
		"Toned milk",
		"Double Toned milk",
		"Mixed milk",
		"Skimmed milk",
		"None of the above"
	]
	},

	{
	numb: 17,
	question: "_____ shall not contain any substance not found in milk unless specified in standards",
	answer: "Milk products",
	options: [
		"Non-milk products",
		"Milk products",
		"Vegan products",
		"Soy products",
		"None of the above"
	]
	},

	

	{
	numb: 18,
	question: "Pasteurisation involves heating every part of milk to _________",
	answer: "All the above",
	options: [
		"63 deg C for at least 30 minutes",
		"71.5 deg C for 15 seconds",
		"135 deg C for 2-5 seconds",
		"All the above",
		"None of the above"
	]
	},
	
	{
	numb:19,
	question: "Pasteurisation involves heating every part of milk to __________",
	answer: "All the above",
	options: [
		"280-302 deg F for 2-5 seconds",
		"161 deg F for 15 seconds",
		"145.4 deg F for 30 minutes",
		"All the above",
		"None of the above"
	]
	},

	{
	numb: 20,
	question: "Pasteruisation will show a ________",
	answer: "negative Phosphatase test",
	options: [
		"Positive Phosphatase test",
		"Negative Phosphatase test",
		"Positive Catalase test",
		"Negatice Catalase test",
		"None of the above"
	]
	},

	{
	numb: 21,
	question: "All pasteurised milk of different class shall be cooled immediately to a temperature of _____",
	answer: "10 deg C or less",
	options: [
		"10 deg C",
		"15 deg C",
		"10 deg C or less",
		"15 deg C or less",
		"None of the above"
	]
	},
	
	{
	numb: 22,
	question: "____ means the homogenised product prepared from milk fat, non-fat milk solids and water",
	answer: "Recombined milk",
	options: [
		"Double Toned milk",
		"Full cream milk",
		"Recombined milk",
		"Skimmed milk",
		"None of the above"
	]
	},

	{
	numb: 23,
	question: "Recombined milk means the _______ product prepared from milk fat, non-fat milk solids and water",
	answer: "homogenised",
	options: [
		"reconstituted",
		"blended",
		"filtered",
		"homogenised",
		"None of the above"
	]
	},

	{
	numb: 24,
	question: "Recombined milk means the _______",
	answer: "homogenised product prepared from milk fat, non-fat milk solids and water",
	options: [
		"shall be pasteurised and show a negative phosphatase test",
		"homogenised product prepared from milk fat, non-fat milk solids and water",
		"shall be pasteurised, sterilised or boiled",
		"Both a & b",
		"None of the above"
	]
	},
	
	{
	numb: 25,
	question: "______ means the product from milk from which almost all the milk fat has been removed mechanically",
	answer: "Skimmed milk",
	options: [
		"Full cream milk",
		"Skimmed milk",
		"Toned milk",
		"Recombined milk",
		"None of the above"
	]
	},

	{
	numb: 26,
	question: "_______ means heating milk in sealed container continuously to a temperature of either 115 deg C for 15 minutes or at least 130 deg C for a period of one second in continous flow",
	answer: "Sterilisation",
	options: [
		"Sterilisation",
		"Pasteurisation",
		"Boiling",
		"Ultra filtration",
		"None of the above"
	]
	},

	{
	numb: 27,
	question: "Sterilisation means heating milk in sealed container continuously to a temperature of _______",
	answer: "Both a and b",
	options: [
		"115 deg C for 15 minutes",
		"130 deg C for 1 second or more",
		"Only b",
		"Both a and b",
		"None of the above"
	]
	},

	{
	numb: 28,
	question: "Sterilisation means _________",
	answer: "All the above",
	options: [
		"heating milk in sealed container continously to a temperature of either 115 deg C for 15 minutes or 130 deg C for 1 second or more",
		"packed under aseptic condition in hermetically sealed container",
		"preservation at room temperature for a period not less than 15 days from manufacturing date",
		"All the above",
		"None of the above"
	]
	},
	
	{
	numb: 29,
	question: "_____ means the product prepared by admixture of cow or buffalo milk or both with fresh skimmed milk or by admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat percentage as per regulation",
	answer: "Toned milk",
	options: [
		"Skimmed milk",
		"Toned milk",
		"Full cream milk",
		"Recombined milk",
		"None of the above"
	]
	},

	{
	numb: 30,
	question: "Toned milk means the product prepared by __________",
	answer: "All the above",
	options: [
		"Admixture of cow or buffalo milk or both with fresh skimmed milk",
		"Admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat percentage by adjustment of milk solids",
		"shall be pasteurised and shall show a negative phosphatase test",
		"when fat and non-fat milk solids are used it shall be ensured that the product remains homogenous and no deposition of solids takes place on standing",
		"All the above"
	]
	},
	
	
	
];


for (let i = data.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = data[i]
	data[i] = data[j]
	data[j] = k
	}

let questions =[]


for (let a = questions.length - 1; a>0; a--){
	let b = Math.floor(Math.random()*a)
	let c = questions[a]
	questions[a] = questions[b]
	questions[b] = c
	}

