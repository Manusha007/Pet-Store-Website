var quiz = false;
var secs = 1000*60;
var total=0;
var startQuiz = false;
var reset =false;

function check_1() {
    var radio = document.getElementsByClassName("solution");
    for (var i =0,len = radio.length; i<len; i++){
        if (radio[i].checked){
            return true;
        }
    }
    return false;
}
radioButton(true);

function getValue(q_Name) {
    var radioNum = document.getElementsByName(q_Name);
    for (var i=0,length= radioNum.length; i<length; i++){
        if (radioNum[i].checked){
            var answer_Value = Number(radioNum[i].value)
        }
    }
    if (isNaN(answer_Value)){
        answer_Value=0;
    }
    return answer_Value;
}

function submit_quiz() {
    if (startQuiz == false){
        window.alert("Quiz didn't Started")
    }
    else if (check_1() == false){
        window.alert("Please answer all Questions");
    }
    else {
        clearTimeout(timer);
        if (getValue("Q_1") === 1){
            document.getElementById("correct_solution_1").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_1").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_2") === 1){
            document.getElementById("correct_solution_2").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_2").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_3") === 1){
            document.getElementById("correct_solution_3").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_3").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_4") === 1){
            document.getElementById("correct_solution_4").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_4").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_5") === 1){
            document.getElementById("correct_solution_5").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_5").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_6") === 1){
            document.getElementById("correct_solution_6").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_6").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_7") === 1){
            document.getElementById("correct_solution_7").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_7").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_8") === 1){
            document.getElementById("correct_solution_8").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_8").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_9") === 1){
            document.getElementById("correct_solution_9").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_9").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }

        if (getValue("Q_10") === 1){
            document.getElementById("correct_solution_10").style.backgroundColor = "rgba(150,255,25,0.46)";
            total += 2;
        }
        else{
            document.getElementById("correct_solution_10").style.backgroundColor = "rgba(253,91,52,0.44)"
            total -=1;
        }
        reset = true;
        quiz = true;
        startQuiz = false;
        show_Score = total + "&nbsp; <strong>/20 Score!</strong>";
        document.getElementById("result").innerHTML = show_Score;
    }
}

function radioButton(get_Bol) {
    var radio = document.getElementsByClassName("solution");
    for(var i=0; i<radio.length; i++){
        radio[i].disabled = get_Bol;
    }
}

function set_Timer() {
    if (secs == 60000)
        timer = setInterval(set_Timer,1000)
        secs -= 1000;
        document.getElementById("timeCount").innerHTML = ":" + secs/1000 + "s";
    if (secs <= 0){
        clearInterval(timer);
        window.alert("Oops! Time is up");
        radioButton(true);
        startQuiz();
    }
    document.getElementById("timeCount").innerHTML=":"+ secs/1000+"s";
}

function start_Quiz() {
    if (reset == true){
        reset_quiz()
    }
    startQuiz = true;
    radioButton(false);
    set_Timer()
}

function reset_quiz() {
    radioButton();
    var lable = document.getElementsByClassName("answer");
    for (var j = 0; j< lable.length; j++){
        lable[j].style["backgroundColor"] = "rgba(255,49,65,0)";
    }
    var radio = document.getElementsByClassName("solution");
    for (var l=0; l<radio.length; l++){
        radio[l].checked = false;
    }
    clearTimeout(timer);
    document.getElementById("result").innerHTML = "";
    document.getElementById("timeCount").innerHTML = "";
    secs = 1000*60;
    total = 0;
    startQuiz = false;
    quiz = false;
    reset = false;
}
