// creating an array and passing the nuimber, questions, options and answers

let data = [
	{
	numb: 1,
	question: "What is the fat content of Low Fat Cream?",
	answer: "b. 25.0%",
	options: [
		"a. 15.0%",
		"b. 25.0%",
		"c. 40.0%",
		"d. 60.0%",
		"e. None of the above"
	]
	},
	{
	numb: 2,
	question: "What is the fat content of Medium Fat Cream?",
	answer: "a. 40.0%",
	options: [
		"a. 40.0%",
		"b. 15.0%",
		"c. 25.0%",
		"d. 60.0%",
		"e. None of the above"
	]
	},
	{
	numb: 3,
	question: "What is the fat content of High Fat Cream?",
	answer: "b. 60.0%",
	options: [
		"a. 25.0%",
		"b. 60.0%",
		"c. 40.0%",
		"d. 15.0%",
		"e. None of the above"
	]
	},
	
	{
	numb: 4,
	question: "______ means the product prepared by admixture of cow-milk or buffalo-milk or both with fresh skimmed milk or by admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat as per regulations",
	answer: "b. Double Toned Milk",
	options: [
		"a. Flavoured Milk",
		"b. Double Toned Milk",
		"c. Skimmed Milk",
		"d. Recombined Milk",
		"e. None of the above"
	]
	},

	{
	numb: 5,
	question: "Double Toned Milk means the product prepared by ",
	answer: "e. All the above",
	options: [
		"a. Toned Milk",
		"b. admixture of cow-milk or buffalo-milk or both with fresh skimmed milk",
		"c. admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat as per regulations",
		"d. pasteurised and shall show a negative phosphatase test",
		"e. All the above"
	]
	},

	{
	numb: 6,
	question: "When fat or non-fat milk solids are used to prepare Double Toned Milk, it shall be ensured that the product remains __________ and no deposition of solids take place on standing",
	answer: "a. homogenous",
	options: [
		"a. homogenous",
		"b. hetergenous",
		"c. suspended",
		"d. emulsified",
		"e. None of the above"
	]
	},
	
	{
	numb: 7,
	question: "_______, may contain nuts (whole,fragmented or ground), chocolate, coffee or any other edible flavour, edible food colour and cane sugar",
	answer: "a. Flavoured milk",
	options: [
		"a. Flavoured milk",
		"b. Toned milk",
		"c. Skimmed milk",
		"d. Recombined milk",
		"e. None of the above"
	]
	},

	{
	numb: 8,
	question: "Flavoured milk shall be _________",
	answer: "d. All the above",
	options: [
		"a. Pasteurised",
		"b. Sterilised",
		"c. Boiled",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 9,
	question: "Flavoured milk may ________",
	answer: "d. All the above",
	options: [
		"a. contain nuts (whole, fragmented or ground), chocolate, coffee or any other edible flavour, edible food colours and cane sugar",
		"b. shall be pasteruised, sterilised and boiled",
		"c. shall be mentioned on the label",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 10,
	question: "_____ means milk or a combination of buffalo or cow milk or a product prepared by a combination of both that has been standardised to fat and solids non fat percentage by adjustment/addition of milk solids to meet the regulations",
	answer: "c. Full Cream Milk",
	options: [
		"a. Double Toned Milk",
		"b. Skimmed Milk",
		"c. Full Cream Milk",
		"d. Pasteurised Milk",
		"e. None of the above"
	]
	},

	{
	numb: 11,
	question: "Full cream milk shall be _______",
	answer: "c. pasteurised",
	options: [
		"a. sterilised",
		"b. boiled",
		"c. pasteurised",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 12,
	question: "Full cream milk means _______",
	answer: "d. All the above",
	options: [
		"a. means milk or a combination of buffalo or cow milk or a product prepared by a combination of both that has been standardised to fat and solids non fat percentage by adjustment/addition of milk solids to meet the regulations",
		"b. shall be pasteurised and shall show a negative Phosphatase test",
		"c. shall be packed in clean, sound and sanitary containers properly sealed to prevent contamination",
		"d. All the above",
		"e. None of the above"
	]
	},
	
	{
	numb: 13,
	question: "_____ is the normal mammary secretion derived from complete milking of healthy milch animal without either addition thereto or extraction therefrom unless otherwise provided in the regulations",
	answer: "b. Milk",
	options: [
		"a. Colostrum",
		"b. Milk",
		"c. Fat",
		"d. Whey",
		"e. None of the above"
	]
	},

	{
	numb: 14,
	question: "Milk shall be free from _______",
	answer: "c. Colostrum",
	options: [
		"a. Fat",
		"b. Whey",
		"c. Colostrum",
		"d. Casein",
		"e. None of the above"
	]
	},

	{
	numb: 15,
	question: "Total urea content in milk shall not be more than _______",
	answer: "d. 700 ppm",
	options: [
		"a. 200 ppm",
		"b. 600 ppm",
		"c. 500 ppm",
		"d. 700 ppm",
		"e. None of the above"
	]
	},

	{
	numb: 16,
	question: "______ means a combination of milk of cow, buffalo, sheep, goat or any other milch animal and may be a combination of any of these milk which has been made and conforms to the standards",
	answer: "c. Mixed milk",
	options: [
		"a. Toned milk",
		"b. Double Toned milk",
		"c. Mixed milk",
		"d. Skimmed milk",
		"e. None of the above"
	]
	},

	{
	numb: 17,
	question: "_____ shall not contain any substance not found in milk unless specified in standards",
	answer: "b. Milk products",
	options: [
		"a. Non-milk products",
		"b. Milk products",
		"c. Vegan products",
		"d. Soy products",
		"e. None of the above"
	]
	},

	

	{
	numb: 18,
	question: "Pasteurisation involves heating every part of milk to _________",
	answer: "d. All the above",
	options: [
		"a. 63 deg C for at least 30 minutes",
		"b. 71.5 deg C for 15 seconds",
		"c. 135 deg C for 2-5 seconds",
		"d. All the above",
		"e. None of the above"
	]
	},
	
	{
	numb:19,
	question: "Pasteurisation involves heating every part of milk to __________",
	answer: "d. All the above",
	options: [
		"a. 280-302 deg F for 2-5 seconds",
		"b. 161 deg F for 15 seconds",
		"c. 145.4 deg F for 30 minutes",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 20,
	question: "Pasteruisation will show a ________",
	answer: "b. negative Phosphatase test",
	options: [
		"a. positive Phosphatase test",
		"b. negative Phosphatase test",
		"c. positive Catalase test",
		"d. negatice Catalase test",
		"e. None of the above"
	]
	},

	{
	numb: 21,
	question: "All pasteurised milk of different class shall be cooled immediately to a temperature of _____",
	answer: "c. 10 deg C or less",
	options: [
		"a. 10 deg C",
		"b. 15 deg C",
		"c. 10 deg C or less",
		"d. 15 deg C or less",
		"e. None of the above"
	]
	},
	
	{
	numb: 22,
	question: "____ means the homogenised product prepared from milk fat, non-fat milk solids and water",
	answer: "c. Recombined milk",
	options: [
		"a. Double Toned milk",
		"b. Full cream milk",
		"c. Recombined milk",
		"d. Skimmed milk",
		"e. None of the above"
	]
	},

	{
	numb: 23,
	question: "Recombined milk means the _______ product prepared from milk fat, non-fat milk solids and water",
	answer: "d. homogenised",
	options: [
		"a. reconstituted",
		"b. blended",
		"c. filtered",
		"d. homogenised",
		"e. None of the above"
	]
	},

	{
	numb: 24,
	question: "Recombined milk means the _______",
	answer: "b. homogenised product prepared from milk fat, non-fat milk solids and water",
	options: [
		"a. shall be pasteurised and show a negative phosphatase test",
		"b. homogenised product prepared from milk fat, non-fat milk solids and water",
		"c. shall be pasteurised, sterilised or boiled",
		"d. Both a & b",
		"e. None of the above"
	]
	},
	
	{
	numb: 25,
	question: "______ means the product from milk from which almost all the milk fat has been removed mechanically",
	answer: "b. Skimmed milk",
	options: [
		"a. Full cream milk",
		"b. Skimmed milk",
		"c. Toned milk",
		"d. Recombined milk",
		"e. None of the above"
	]
	},

	{
	numb: 26,
	question: "_______ means heating milk in sealed container continuously to a temperature of either 115 deg C for 15 minutes or at least 130 deg C for a period of one second in continous flow",
	answer: "a. Sterilisation",
	options: [
		"a. Sterilisation",
		"b. Pasteurisation",
		"c. Boiling",
		"d. Ultra filtration",
		"e. None of the above"
	]
	},

	{
	numb: 27,
	question: "Sterilisation means heating milk in sealed container continuously to a temperature of _______",
	answer: "d. Both a and b",
	options: [
		"a. 115 deg C for 15 minutes",
		"b. 130 deg C for 1 second or more",
		"c. Only b",
		"d. Both a and b",
		"e. None of the above"
	]
	},

	{
	numb: 28,
	question: "Sterilisation means _________",
	answer: "d. All the above",
	options: [
		"a. heating milk in sealed container continously to a temperature of either 115 deg C for 15 minutes or 130 deg C for 1 second or more",
		"b. packed under aseptic condition in hermetically sealed container",
		"c. preservation at room temperature for a period not less than 15 days from manufacturing date",
		"d. All the above",
		"e. None of the above"
	]
	},
	
	{
	numb: 29,
	question: "_____ means the product prepared by admixture of cow or buffalo milk or both with fresh skimmed milk or by admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat percentage as per regulation",
	answer: "b. Toned milk",
	options: [
		"a. Skimmed milk",
		"b. Toned milk",
		"c. Full cream milk",
		"d. Recombined milk",
		"e. None of the above"
	]
	},

	{
	numb: 30,
	question: "Toned milk means the product prepared by __________",
	answer: "e. All the above",
	options: [
		"a. admixture of cow or buffalo milk or both with fresh skimmed milk",
		"b. admixture of cow or buffalo milk or both that has been standardised to fat and solids non-fat percentage by adjustment of milk solids",
		"c. shall be pasteurised and shall show a negative phosphatase test",
		"d. when fat and non-fat milk solids are used it shall be ensured that the product remains homogenous and no deposition of solids takes place on standing",
		"e. All the above"
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

