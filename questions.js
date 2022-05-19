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
	
	{
	numb: 31,
	question: "Buffalo milk has ________ milk fat and _______ minimum percent milk solids non-fat",
	answer: "d. both a & b",
	options: [
		"a. 6.0% and 9.0%",
		"b. 5.0% and 9.0%",
		"c. 6.0% and 9.5%"
		"d. both a & b",
		"e. None of the above"
	]
	},


	{
	numb: 32,
	question: "Cow milk has ______ milk fat and ______ minimum percent milk solids non-fat",
	answer: "d. All the above",
	options: [
		"a. 4.0% and 8.5%",
		"b. 3.5% and 8.5%",
		"c. 3.0% and 8.5%",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 33,
	question: "Goat or sheep milk has ______ milk fat and ______ minimum percent milk solids non-fat",
	answer: "d. Both a and b",
	options: [
		"a. 3.5% and 9.0%",
		"b. 3.0% and 9.0%",
		"c. 5.0% and 9.0%",
		"d. Both a and b",
		"e. None of the above"
	]
	},

	{
	numb: 34,
	question: "Mixed milk has _____ milk fat and ______ minimum percent milk solids non-fat",
	answer: "a. 4.5% and 8.5%",
	options: [
		"a. 4.5% and 8.5%",
		"b. 6.0% and 9.0%",
		"c. 5.0% and 9.0%",
		"d. 3.0% and 8.5%",
		"e. None of the above"
	]
	},	

	{
	numb: 35,
	question: "Standardised milk has _______ milk fat and ______ minimum percent milk solids non-fat",
	answer: "a. 4.5% and 8.5%",
	options: [
		"a. 4.5% and 8.5%",
		"b. 3.0% and 8.5%",
		"c. 5.0% and 8.5%",
		"d. 6.0% and 9.0%",
		"e. None of the above"
	]
	},

	{
	numb: 36,
	question: "Recombined milk has ______ milk fat and _______ minimum percent milk solids non-fat",
	answer: "b. 3.0% and 8.5%",
	options: [
		"a. 4.5% and 8.5%",
		"b. 3.0% and 8.5%",
		"c. 6.0% and 9.0%",
		"d. 5.0% and 9.0%",
		"e. None of the above"
	]
	},

	{
	numb: 37,
	question: "Toned milk has ______ milk fat and _______ minimum percent milk solids non-fat",
	answer: "c. 3.0% and 8.5%",
	options: [
		"a. 1.5% and 8.5%",
		"b. 6.0% and 9.0%",
		"c. 3.0% and 8.5%",
		"d. 5.0% and 9.0%",
		"e. None of the above"
	]
	},

	{
	numb: 38,
	question: "Double toned milk has ______ milk fat and ______ minimum percent milk solids non-fat",
	answer: "a. 1.5% and 9.0%",
	options: [
		"a. 1.5% and 9.0%",
		"b. 3.0% and 9.0%",
		"c. 5.0% and 9.0%",
		"d. 6.0% and 9.0%",
		"e. None of the above"
	]
	},

	{
	numb: 39,
	question: "Skimmed milk has ______ milk fat and _______ minimum percent milk solids non-fat",
	answer: "d. not more than 0.5% and 8.7%",
	options: [
		"a. 3.0% and 8.5%",
		"b. 6.0% and 9.0%",
		"c. 5.0% and 9.0%",
		"d. not more than 0.5% and 8.7%",
		"e. None of the above"
	]
	},

	{
	numb: 40,
	question: "Full cream milk has ______ milk fat and _______ minimum percent milk solids non-fat",
	answer: "b. 6.0% and 9.0%",
	options: [
		"a. 3.0% and 8.5%",
		"b. 6.0% and 9.0%",
		"c. 5.0% and 9.0%",
		"d. 1.5% and 9.0%",
		"e. None of the above"
	]
	},

	{
	numb: 41,
	question: "When milk is offered for sale without indication of the class, the standards prescribed for _______ shall apply",
	answer: "c. Buffalo milk",
	options: [
		"a. Cow milk",
		"b. Mixed milk",
		"c. Buffalo milk",
		"d. Toned milk",
		"e. None of the above"
	]
	},

	{
	numb: 42,
	question: "Cream including _______ means the product of cow or buffalo milk or a combination thereof",
	answer: "a. Sterilised cream",
	options: [
		"a. Sterilised cream",
		"b. Pasteurised cream",
		"c. Boiled cream",
		"d. Fresh cream",
		"e. None of the above"
	]
	},

	{
	numb: 43,
	question: "Cream shall be free from _______",
	answer: "b. starch and other ingredients foreign to milk",
	options: [
		"a. curd",
		"b. starch and other ingredients foreign to milk",
		"c. whey",
		"d. milk",
		"e. None of the above"
	]
	},

	{
	numb: 44,
	question: "Cream sold without any indication about milk fat content shall be treated as _________",
	answer: "d. High fat cream",
	options: [
		"a. medium fat cream",
		"b. low fat cream",
		"c. buffalo milk",
		"d. High fat cream",
		"e. None of the above"
	]
	},

	{
	numb: 45,
	question: "_______ means the product obtained by partial removal of water from cream obtained from milk of cow and/or buffalo",
	answer: "c. Cream powder",
	options: [
		"a. Cream",
		"b. Milk powder",
		"c. Cream powder",
		"d. Fat spread",
		"e. None of the above"
	]
	},

	{
	numb: 46,
	question: "The fat and/or protein content of the cream may be adjusted by addition/withdrawl of milk constituents in such a way as not to alter __________",
	answer: "a. whey protein to caesin ratio of the milk being adjusted",
	options: [
		"a. whey protein to caesin ratio of the milk being adjusted",
		"b. fat content of the milk being adjusted",
		"c. moisture content of the milk being adjusted",
		"d. milk solids non-fat of the milk being adjusted",
		"e. None of the above"
	]
	},

	{
	numb: 47,
	question: "Cream powder means the product obtained by ________",
	answer: "d. All the above",
	options: [
		"a. Partial removal of water from cream obtained from milk of cow and/or buffalo",
		"b. It shall be uniform colour and shall have pleasant taste and flavour free from off flavour and rancidity",
		"c. It shall also be free from vegetable oil/fat, mineral oil, added flavour and any substance foreign to milk",
		"d. All the above",
		"e. None of the above"
	]
	},

	{
	numb: 48,
	question: "The moisture content of cream powder should be _________",
	answer: "a. not more than 5.0%",
	options: [
		"a. not more than 5.0%",
		"b. not less than 5.0%",
		"c. not more than 10.0%",
		"d. not less than 10.0%",
		"e. None of the above"
	]
	},

	{
	numb: 49,
	question: "The milk fat of cream powder should be _________",
	answer: "c. not less than 42.0%",
	options: [
		"a. not more than 42.0%",
		"b. not more than 24.0%",
		"c. not less than 42.0%",
		"d. not less than 24.0%",
		"e. None of the above"
	]
	},

	{
	numb: 50,
	question: "The milk protein in milk solid non-fat should be ______",
	answer: "b. not less than 34.0%",
	options: [
		"a. not more than 34.0%",
		"b. not less than 34.0%",
		"c. not more than 43.0%",
		"d. not less than 43.0%",
		"e. None of the above"
	]
	},

	{
	numb: 51,
	question: "_____ means the product rich in butter fat prepared by boiling and cooling of cow or buffalo milk or a combination thereof",
	answer: "d. Malai",
	options: [
		"a. Dahi",
		"b. Cream powder",
		"c. Cream",
		"d. Malai",
		"e. None of the above"
	]
	},

	{
	numb: 52,
	question: "Malai shall contain _______ ",
	answer: "a. not less than 25% milk fat",
	options: [
		"a. not less than 25% milk fat",
		"b. not more than 25% milk fat",
		"c. not less than 75% milk fat",
		"d. not more than 75% milk fat",
		"e. None of the above"
	]
	},

	{
	numb: 53,
	question: "________ means tghe product obtained from pasteurised or boiled milk by souring, natural or otherwise, by a harmless lactic acid culture or other harmless bacterial culture may also be used in conjunction with lactic acid, bacterial cultures for souring",
	answer: "d. Both a and b",
	options: [
		"a. Dahi ",
		"b. Curd",
		"c. Paneer",
		"d. Both a and b",
		"e. None of the above"
	]
	},
	
	{
	numb: 54,
	question: "Dahi may contain added _________",
	answer: "c. cane sugar",
	options: [
		"a. refined sugar",
		"b. artificial sweetner",
		"c. cane sugar",
		"d. honey",
		"e. None of the above"
	]
	},

	{
	numb: 55,
	question: "Dahi shall have the same minimum percentage of milk fat and milk solids non-fat as _________",
	answer: "b. milk from which it is prepared",
	options: [
		"a. cow milk",
		"b. milk from which it is prepared",
		"c. buffalo milk",
		"d. toned milk",
		"e. None of the above"
	]
	},

	{
	numb: 56,
	question: "Dahi or curd is sold or offered for sale without any indication of class of milk, the standards prescribed for dahi prepared from ________ shall apply",
	answer: "a. buffalo milk",
	options: [
		"a. buffalo milk",
		"b. cow milk",
		"c. skimmed milk",
		"d. toned milk",
		"e. None of the above"
	]
	},

	{
	numb: 57,
	question: "________ may also be used in the preparation of Dahi or Curd",
	answer: "d. Milk solids",
	options: [
		"a. Caesin",
		"b. Whey",
		"c. Milk solids non-fat",
		"d. Milk solids",
		"e. None of the above"
	]
	},

	{
	numb: 58,
	question: "_____ means the product obtained from the cow or buffalo milk or a combination thereof by precipitation with sour  milk, lactic acid or citric acid",
	answer: "c. Chhana or Paneer",
	options: [
		"a. Dahi",
		"b. Cream",
		"c. Chhana or Paneer",
		"d. Butter",
		"e. None of the above"
	]
	},

	{
	numb: 59,
	question: "Chhana or paneer shall not contain ________",
	answer: "b. more than 70% moisture",
	options: [
		"a. less than 70% moisture",
		"b. more than 70% moisture",
		"c. less than 90% moisture",
		"d. more than 90% moisture",
		"e. None of the above"
	]
	},

	{
	numb: 60,
	question: "The fat content of the milk used in the preparation of chhana or paneer ___________",
	answer: "a. shall not be less than 50% of the dry matter",
	options: [
		"a. shall not be less than 50% of the dry matter",
		"b. shall not be less than 30% of the dry matter",
		"c. shall not be more than 30% of the dry matter",
		"d. shall not be more than 60% of the dry matter",
		"e. None of the above"
	]
	},

	{
	numb: 61,
	question: "Milk solids may be used in the preparation of __________",
	answer: "c. Both a and b",
	options: [
		"a. Dahi or Curd",
		"b. Chhana or Paneer",
		"c. Both a and b",
		"d. Only a",
		"e. None of the above"
	]
	},

	{
	numb: 62,
	question: "Paneer or Chhana when sold as low fat paneer or chhana shall have moisture content ________",
	answer: "d. not more than 70.0%",
	options: [
		"a. not more than 80.0%",
		"b. not less than 80.0%",
		"c. not less than 70.0%",
		"d. not more than 70.0%",
		"e. None of the above"
	]
	},

	{
	numb: 63,
	question: "Paneer or Chhana when sold as low fat paneer or chhana shall have milk fat __________",
	answer: "b. not more than 15.0% dry matter",
	options: [
		"a. not less than 15.0% dry matter",
		"b. not more than 15.0% dry matter",
		"c. not less than 50.0% dry matter",
		"d. not more than 50.0% dry matter",
		"e. None of the above"
	]
	},

	{
	numb: 64,
	question: "Low fat panner/chhana shall be sold in _______",
	answer: "a. sealed package",
	options: [
		"a. sealed package",
		"b. loosely",
		"c. without fat",
		"d. with fat",
		"e. None of the above"
	]
	},

	{
	numb: 65,
	question: "Cheese includes _______",
	answer: "e. All the above",
	options: [
		"a. ripened",
		"b. unripened soft",
		"c. semi-hard",
		"d. hard and extra hard product",
		"e. All the above"
	]
	},

	{
	numb: 66,
	question: "Cheeses may be coated with ________",
	answer: "d. Both a and b",
	options: [
		"a. food grade waxes",
		"b. polyfilm",
		"c. non food grade waxes",
		"d. Both a and b",
		"e. None of the above"
	]
	},

	{
	numb: 67,
	question: "Cheese is a product in which the whey protein/casein ratio _______ that of milk",
	answer: "c. does not exceed",
	options: [
		"a. is same as that of",
		"b. is not less than",
		"c. does not exceed",
		"d. is more than",
		"e. None of the above"
	]
	},

	{
	numb: 68,
	question: "cheese may contain ________",
	answer: "e. All the above",
	options: [
		"a. Starter cultures of harmless lactic acid bacteria",
		"b. Flavour producing bacteria and cultures of other harmless microroganism",
		"c. Safe and Suitable enzymes",
		"d. Sodium Chloride",
		"e. All the above"
	]
	},

	{
	numb: 69,
	question: "Cheese may be in the form of ________",
	answer: "e. All the above",
	options: [
		"a. block",
		"b. cuts",
		"c. slices",
		"d. shredded or grated cheese",
		"e. All the above"
	]
	},

	{
	numb: 70,
	question: "________ is not ready for consumption shortly after manufacture but which must be held for some time at such temperature and under such other conditions as will result in necessary biochemical and physical changes characterizing the cheese",
	answer: "b. Ripened cheese",
	options: [
		"a. Unripened cheese",
		"b. Ripened cheese",
		"c. Mould ripened cheese",
		"d. Cottage cheese",
		"e. None of the above"
	]
	},

	{
	numb: 71,
	question: "_____ is a ripened cheese in which the ripening has been accomplished primarily by the development of charecteristic mould growth through the interior and/or surface of the cheese",
	answer: "d. Mould ripened cheese",
	options: [
		"a. Cottage cheese",
		"b. Unripened cheese",
		"c. Ripened cheese",
		"d. Mould ripened cheese",
		"e. None of the above"
	]
	},

	{
	numb: 72,
	question: "______ including fresh cheese is a cheese which is ready for consumption shortly after manufacture",
	answer: "a. Unripened cheese",
	options: [
		"a. Unripened cheese",
		"b. Ripened cheese",
		"c. Mould ripened cheese",
		"d. Both b and c",
		"e. None of the above"
	]
	},

	{
	numb: 73,
	question: "Hard pressed cheese has a moisture _________",
	answer: "c. not more than 39.0%",
	options: [
		"a. not more than 48.0%",
		"b. not less than 48.0%",
		"c. not more than 39.0%",
		"d. not less than 39.0%",
		"e. None of the above"
	]
	},

	{
	numb: 74,
	question: "Hard pressed cheese has a milk fat on dry basis ___________",
	answer: "b. not less than 48.0%",
	options: [
		"a. not more than 48.0%",
		"b. not less than 48.0%",
		"c. not more than 39.0%",
		"d. not less than 39.0%",
		"e. None of the above"
	]
	},

	{
	numb: 75,
	question: "____________ is a cheese that has moisture content not more than 39.0% and milk fat on dry basis not more than 48.0%",
	answer: "d. Hard pressed cheese",
	options: [
		"a. Semi soft cheese",
		"b. Semi hard cheese",
		"c. Soft cheese",
		"d. Hard pressed cheese",
		"e. None of the above"
	]
	},

	{
	numb: 76,
	question: "Semi hard cheese has a moisture of ____________",
	answer: "a. not more than 45.0%",
	options: [
		"a. not more than 45.0%",
		"b. not less than 45.0%",
		"c. not more than 40.0%",
		"d. not less than 40.0%",
		"e. None of the above"
	]
	},

	{
	numb: 77,
	question: "Semi hard cheese has a milk fat on dry basis ________",
	answer: "c. not less than 40.0%",
	options: [
		"a. not more than 45.0%",
		"b. not less than 45.0%",
		"c. not less than 40.0%",
		"d. not more than 40.0%",
		"e. None of the above"
	]
	},

	{
	numb: 78,
	question: "_______ has moisture content not more than 45.0% and milk fat on dry basis not less than 40.0%",
	answer: "b. Semi hard cheese",
	options: [
		"a. Semi soft cheese",
		"b. Semi hard cheese",
		"c. Soft cheese",
		"d. Hard pressed cheese",
		"e. None of the above"
	]
	},

	{
	numb: 79,
	question: "Semi soft cheese has a moisture _________",
	answer: "d. not more than 52.0%",
	options: [
		"a. not less than 45.0%",
		"b. not more than 45.0%",
		"c. not less than 52.0%",
		"d. not more than 52.0%",
		"e. None of the above"
	]
	},

	{
	numb: 80,
	question: "Semi soft cheese has a milk fat on dry basis _________",
	answer: "a. not less than 45.0%",
	options: [
		"a. not less than 45.0%",
		"b. not more than 45.0%",
		"c. not less than 52.0%",
		"d. not more than 52.0%",
		"e. None of the above"
	]
	},

	{
	numb: 81,
	question: "_______ has moisture content not more than 52.0% and milk fat on dry basis not less than 45.0%",
	answer: "c. Semi soft cheese",
	options: [
		"a. Semi hard cheese",
		"b. Soft cheese",
		"c. Semi soft cheese",
		"d. Extra hard cheese",
		"e. None of the above"
	]
	},

	{
	numb: 82,
	question: "Soft cheese has a moisture content ________",
	answer: "b. not more than 80.0%",
	options: [
		"a. not less than 80.0%",
		"b. not more than 80.0%",
		"c. not less than 20.0%",
		"d. not more thab 20.0%",
		"e. None of the above"
	]
	},

	{
	numb: 83,
	question: "Soft cheese has a milk fat on dry basis _________",
	answer: "d. not less than 20.0%",
	options: [
		"a. not less than 80.0%",
		"b. not more than 80.0%",
		"c. not more than 20.%0",
		"d. not less than 20.0%",
		"e. None of the above"
	]
	},

	{
	numb: 84,
	question: "_________ has a moisture content not more than 80.0% and milk fat on dry basis not less than 20.0%",
	answer: "a. Soft cheese",
	options: [
		"a. Soft cheese",
		"b. Semi hard cheese",
		"c. Semi soft cheese",
		"d. Hard cheese",
		"e. None of the above"
	]
	},

	{
	numb: 85,
	question: "Extra hard cheese has a moisture content __________",
	answer: "c. not more than 36.0%",
	options: [
		"a. not more than 32.0%",
		"b. not less than 32.0%",
		"c. not more than 36.0%",
		"d. not less than 36.0%",
		"e. None of the above"
	]
	},

	{
	numb: 86,
	question: "Extra hard cheese has a milk fat on dry basis _______",
	answer: "b. not less than 32.0%",
	options: [
		"a. not more than 32.0%",
		"b. not less than 32.0%",
		"c. not more than 36.0%",
		"d. not less than 36.0%",
		"e. None of the above"
	]
	},

	{
	numb: 87,
	question: "____________ has moisture content not more than 36.0% and milk fat on dry basis not less than 32.0%",
	answer: "d. Extra hard cheese",
	options: [
		"a. Semi soft cheese",
		"b. Soft cheese",
		"c. Hard cheese",
		"d. Extra hard cheese",
		"e. None of the above"
	]
	},

	{
	numb: 88,
	question: "Mozzarella cheese has a moisture content _________",
	answer: "a. not more than 60.0%",
	options: [
		"a. not more than 60.0%",
		"b. not less than 60.0%",
		"c. not more than 35.0%",
		"d. not less than 35.0%",
		"e. None of the above"
	]
	},

	{
	numb: 89,
	question: "Mozzarella cheese has a milk fat on dry basis _________",
	answer: "c. not less than 35.0%",
	options: [
		"a. not less than 60.0%",
		"b. not more than 60.0%",
		"c. not less than 35.0%",
		"d. not more than 35.0%",
		"e. None of the above"
	]
	},


	{
	numb: 90,
	question: "___________ has a moisture content not more than 60.0% and milk fat on dry basis not less than 35.0%",
	answer: "b. Mozzarella cheese",
	options: [
		"a. Semi soft cheese",
		"b. Mozzarella cheese",
		"c. Semi hard cheese",
		"d. Hard cheese",
		"e. None of the above"
	]
	},

	{
	numb: 91,
	question: "Pizza cheese has a moisture content _______",
	answer: "d. not more than 54.0%",
	options: [
		"a. not less than 35.0%",
		"b. not more than 35.0%",
		"c. not less than 54.0%",
		"d. not more than 54.0%",
		"e. None of the above"
	]
	},

	{
	numb: 92,
	question: "Pizza cheese has a milk fat on dry basis __________",
	answer: "a. not less than 35.0%",
	options: [
		"a. not less than 35.0%",
		"b. not more than 35.0%",
		"c. not less than 54.0%",
		"d. not more than 54.0%",
		"e. None of the above"
	]
	},

	{
	numb: 93,
	question: "________ has a moisture content not more than 54.0% and milk fat on dry basis not less than 35.0%",
	answer: "c. Pizza cheese",
	options: [
		"a. Semi hard cheese",
		"b. Mozzarella cheese",
		"c. Pizza cheese",
		"d. Soft cheese",
		"e. None of the above"
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

