player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn-"+player1_name
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name
function send(){
    number1=document.getElementById("number1").value
    number2=document.getElementById("number2").value
    actualanswer=parseInt(number1)*parseInt(number2)
    
    questionword="<h4 >Q."+number1+"x"+number2+"</h4>"
    inputbox="<br>answer:<input type='text'id='inputcheckbox'>"
    checkbutton="<br><br><button class='btn btn-info'onclick='check()'>check</button>"
    row=questionword+inputbox+checkbutton
    document.getElementById("output").innerHTML+=row
    document.getElementById("word").value=""
}
questionturn="player1"
answerturn="player2"
function check() {
    getanswer=document.getElementById("inputcheckbox").value
    answer=getanswer.toLowerCase()
    console.log(answer)
    if(answer==actualanswer){
        if(answerturn=="player1"){
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score  
        }
    }
    if(questionturn=="player1"){
        questionturn="player2"
        document.getElementById("player_question").innerHTML="question turn-"+player2_name
    }
    else{
        questionturn="player1"
        document.getElementById("player_question").innerHTML="question turn-"+player1_name
    }
    if(answerturn=="player1"){
        answerturn="player2"
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name
    }
    else{
        answerturn="player1"
        document.getElementById("player_answer").innerHTML="answer turn-"+player1_name
    }
    document.getElementById("output").innerHTML=""
}