let timer;
function startTimer() {
  timer = setTimeout(function() {
    document.getElementById("demo").innerHTML = "Finished";
  }, 600);
}
function stopTimer() {
  clearTimeout(timer);
  document.getElementById("demo").innerHTML = "Timer stopped";
}
function myDisplayer(text) {
  let demo = document.getElementById("demo"); 
  demo.innerHTML += text + "<br>";
}

function myFunction() {
    let fname=document.getElementById("fname").value;
    return fname;
}

function scoreQuiz() {
    let score = 0  
    let results = "";

    let answer1 = document.getElementById("Q1").value;
        if (answer1.toLowerCase() == "hypertext transfer protocol") {
            score ++;
            results += "<p class=.correct><br>Q1. Correct!</br></p>";
        } else {
            results += "<br>Q1. Wrong. The answer is Hypertext Transfer Protocol</br>";
    }
    let answer2 = document.getElementById("Q2").value;
        if (answer2 == "1991") {
            score ++;
            results += "<br>Q2. Correct!</br>";
        } else {
            results += "<br>Q2. Wrong! The answer is 1991</br>";
    }
    let answer3 = document.querySelector('input[name="after_http"]:checked');
        if (answer3 && answer3.value === "HTTP 1.0") {
            score ++;
            results += "<br>Q3. Correct!</br>";
        } else {
            results += "<br>Q3. Wrong! It's HTTP 1.0</br>";
        }
    let answer4 = document.querySelector('input[name="imp_feature"]:checked');
        if (answer4 && answer4.value === "Header Compression") {
            score ++;
            results += "<br>Q4. Correct!</br>";
        } else {
            results += "<br>Q4. Wrong! It's Header Compression</br>";
        }
    let answer5 = document.querySelector('input[name="which_feature"]:checked');
        if (answer5 && answer5.value === "QUIC") {
            score ++;
            results += "<br>Q5. Correct!</br>";

        } else {
            results += "<br>Q5. Wrong! It's QUIC</br>";
        }
    let answer6 = document.querySelectorAll('input[name="fall_under"]:checked');
        if (answer6.length == 2 && answer6[0].value === "Header Compression" && answer6[1].value === "Multiplexing") {
            score ++;
            results += "<br>Q6. Correct!</br>";
        } else {
            results += "<br>Q6. Wrong! It's Multiplexing and Header Compression</br>";
        }
    return [score, results];
}  

function submitQuiz(event) {    
        event.preventDefault();
        let result = scoreQuiz();
        let score = result[0];
        let results = result[1];
        let status = "Fail";
        if (score >=4) {
            status = "You Passed!";
        }
        document.getElementById("result").innerHTML = status + "<br>" + "</br>" + " Total Score: " + score + "/6 " +
        "<br>" +  "</br>" + results;
    }