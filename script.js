//selecting all required elements

const play_btn = document.querySelector(".play_btn button");
const dropdown_box = document.querySelector(".dropdown_box");
const error_btn = document.querySelector(".error_btn")
const q_btn = document.querySelector(".q_btn");
const ready_btn = document.querySelector(".ready_btn");
const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


// if Play Quiz button is clicked
play_btn.onclick = ()=>{
	play_btn.style.display ='none';
	dropdown_box.classList.add("activeInfo");
	q_btn.classList.add("activeInfo");
	}

/* When the user clicks on the button, 
   toggle between hiding and showing the dropdown content */

function myFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
	}

function chooseNoQ(){
		selectElement = document.querySelector('#NoQ');
		q = selectElement.value;
		if (q==0){
			error_btn.classList.add("activeInfo")
			error.textContent = "Error: Select an option and click 'Done'"
			error.style.color = "red"
			}else{
				error_btn.style.display = 'none';
				for(i=0; i<q; i++){questions[i]=data[i];};
		start_btn.classList.add("activeInfo");
		console.log(questions);}
			}

// if startQuiz button is clicked


start_btn.onclick = ()=>{
	start_btn.style.display = 'none';
	dropdown_box.classList.add("activeInfo");
	q_btn.style.display = 'none';
	info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button is clicked 

exit_btn.onclick = ()=>{
	window.location.reload(); //reload the current window
}

// if continueQuiz button clicked

continue_btn.onclick = ()=>{
	info_box.classList.remove("activeInfo"); //hide info box
	quiz_box.classList.add("activeQuiz"); //show quiz box
	showQuestions(0); //calling showQuestions function
	queCounter(1); //passing 1 parameter to queCounter
	startTimer(15); //calling startTimer function
	startTimerLine(0); //calling startTimerLine function
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button is clicked

restart_quiz.onclick = ()=>{
	quiz_box.classList.add("activeQuiz"); //show quiz box
	result_box.classList.remove("activeResult"); //hide result box
	timeValue = 15;
	que_count = 0;
	que_numb = 1;
	userScore = 0;
	widthValue = 0;
	showQuestions(que_count); //calling showQuestions function
	queCounter(que_numb); //passing que_numb value to queCounter
	clearInterval(counter); //clear counter
	clearInterval(counterLine); //clear counterLine
	startTimer(timeValue); //calling startTimer function
	startTimerLine(widthValue); //calling startTimerLine function
	timeText.textContent = "Time Left"; //change the text of timeText tp Time Left
	next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
	window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const finish_btn = document.querySelector("footer .finish_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
	if(que_count < questions.length -1){ //if question count is less than total question length
	que_count++; //increment the que_count value
	que_numb++; //increment the que_numb value
	showQuestions(que_count); //calling showQuestions function
	queCounter(que_numb); //passing que_numb value to queCounter
	clearInterval(counter); //clear counter
	clearInterval(counterLine); //clear counterLine
	startTimer(timeValue); //calling startTimer function
	startTimerLine(widthValue); //calling startTimerLine function
	timeText.textContent = "Time Left"; //change the timeText to Time Left
	next_btn.classList.remove("show"); //hide the next button
	finish_btn.classList.remove("show");
	}else{
		//next_btn.classList.remove("show");
		finish_btn.classList.add("finish_btn");
		clearInterval(counter); //clear counter
		clearInterval(counterLine); //clear counterLine
		showResult(); //calling showResult function
	}
}

finish_btn.onclick = ()=>{
	showResult();
	}

// getting questions and options from array 

function showQuestions(index){
	const que_text = document.querySelector(".que_text");
	
	//creating a new span and div tag for question and option and passing the value using array index
	let que_tag = '<span>'/*+ questions[index].numb + "." */+ questions[index].question +'</span>';
	let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>' + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>' + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>' + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'+ '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
	que_text.innerHTML = que_tag; // adding new span tag inside que_tag
	option_list.innerHTML = option_tag; //adding new div tag inside option_tag

	const option = option_list.querySelectorAll(".option");
	
	// set onclick attribute to all available options
	for(i=0; i<option.length; i++){
		option[i].setAttribute("onclick", "optionSelected(this)");		
	}
}

//creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


// if user clicked on option
function optionSelected(answer){
	clearInterval(counter); //clear counter
	clearInterval(counterLine); //clear counterLine
	let userAns = answer.textContent; //getting user selcted option
	let correcAns = questions[que_count].answer; //getting correct answer from array
	const allOptions = option_list.children.length; //getting all option items

	if(userAns == correcAns){ //if the option selected by the user is the correct answer in the array
		userScore +=1; //upgrading score value with 1
		answer.classList.add("correct"); //adding green color to corrected selected option 
		answer.insertAdjacentHTML("beforeend", tickIconTag); //adding cross icon to correct selected option
		console.log("Correct Answer");
		console.log("Your correct answers = " + userScore);
	}else{
		answer.classList.add("incorrect"); //adding red colour to the selected option which is incorrect
		answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to the selected option which is incorrect
		console.log("Wrong Answer");
		
		for(i=0; i<allOptions; i++){
			if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
				option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
				option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to matched option
				console.log("Auto selected correct answer.");
			}
		}
	}
	
	for(i=0; i<allOptions; i++){
	option_list.children[i].classList.add("disabled"); // all other options are disabled after the user selects an option 
  }
	
	if(que_count < questions.length -1){
	next_btn.classList.add("show"); //show the next button after the user selects an option
	finish_btn.classList.add("show");
	}else{
		next_btn.classList.remove("show");
		finish_btn.classList.add("show"); 
}
}

function showResult(){
	info_box.classList.remove("activeInfo"); //hide info box
	quiz_box.classList.remove("activeQuiz"); //hide quiz box
	result_box.classList.add("activeResult"); //show result box
	const scoreText = result_box.querySelector(".score_text");
	if (userScore > 3){ // if the user scored more than 3
		//creating a new span tag and passing the user score number and total question number 
		let scoreTag = '<span>and Congrats!, You got  ' + userScore +' out of ' + questions.length +'</span>';
		scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
	}
	else if(userScore > 1){ // if the user scored more than 1
		let scoreTag = '<span>and nice, You got   ' + userScore +'  out of ' + questions.length +'</span>';
		scoreText.innerHTML = scoreTag;
	}
	else{ // if the user scored less than 1 
		let scoreTag = '<span>and sorry, You got only  '+ userScore +' out of  '+ questions.length +'</span>';
		scoreText.innerHTML = scoreTag;
	}
}

function startTimer(time){
	counter = setInterval(timer, 1000);
	function timer(){
		timeCount.textContent = time; //changing the value of timeCount with time value
		time--; //decrement the time value
		if(time<9){ // if the times is less than 9
			let addZero = timeCount.textContent;
			timeCount.textContent = "0" + addZero; //add a 0 before time value
		}
		if(time < 0){ // if timer is less than 0
			clearInterval(counter); //clear counter
			timeText.textContent = "Time Off"; //change the time text to time off 
			const allOptions = option_list.children.length; //getting all option items
			let correcAns = questions[que_count].answer; //getting correct answer from array
			for(i=0; i < allOptions; i++){
				if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array option 
					option_list.children[i].setAttribute("class", "option correct"); //adding green colour to matched option
					option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
					console.log("Time Off: Auto selected correct Answer");
				}
			}
			for(i=0; i < allOptions; i++){
				option_list.children[i].classList.add("disabled"); // all options are disabled after user selects an option
			}
			if(que_count < questions.length -1){
	next_btn.classList.add("show"); //show the next button after the user selects an option
	finish_btn.classList.add("show");
	}else{
		next_btn.classList.remove("show");
		finish_btn.classList.add("show"); 
}
		}
	}
}

function startTimerLine(time){
	counterLine = setInterval(timer, 29);
	function timer(){
		time +=1; //upgrading time value with 1
		time_line.style.width = time*0.1833333 + "%"; //increasing width of time_line with px by time value
		if(time > 549){ //if time value is greater than 549
			clearInterval(counterLine); //clear counterLine
		}
	}
}

function queCounter(index){
	//creating a new span tag and passing the question number and total question
	let totalQueCounTag = '<span>' + index +' of ' + questions.length +' Questions</span>';
	bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag in bottom_ques_corner
}
