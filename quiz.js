let startTime;
document.getElementById("startButton").onclick = function() {
    startTime = Date.now();
    alert("The Quiz Has Begun!")
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
            results += "Correct!";
        } else {
            results += "Wrong. The answer is Hypertext Transfer Protocol";
    }
    let answer2 = document.getElementById("Q2").value;
        if (answer2 == "1991") {
            score ++;
            results += "Correct!";
        } else {
            results += "Wrong.The answer is 1991";
    }
    let answer3 = document.querySelector('input[name="after_http"]:checked');
        if (answer3 && answer3.value === "HTTP 1.0") {
            score ++;
            results += "Correct!";
        } else {
            results += "Incorrect! It's HTTP 1.0";
        }
    let answer4 = document.querySelector('input[name="imp_feature"]:checked');
        if (answer4 && answer4.value === "Header Compression") {
            score ++;
            results += "Correct!";
        } else {
            results += "Incorrect! It's Header Compression";
        }
    let answer5 = document.querySelector('input[name="which_feature"]:checked');
        if (answer5 && answer5.value === "QUIC") {
            score ++;
            results += "Correct!";

        } else {
            results += "Incorrect! It's QUIC";
        }
    let answer6 = document.querySelectorAll('input[name="fall_under"]:checked');
        if (answer6.length == 2 && answer6[0].value === "Multiplexing" && answer6[1].value === "Header Compression") {
            score ++;
            results += "Correct!";
        } else {
            results += "Incorrect! It's Multiplexing and Header Compression";
        }
    return [score, results];
}  

function submitQuiz(event) {
        event.preventDefault();
        let result = scoreQuiz();
        let results = [1];
        let score = [0];
        let time = Math.floor((Date.now() - startTime / 1000));
        let status = "Fail";
        if (score >=4) {
            text = "You Passed!";
        }
        document.getElementById("result").innerHTML = status + "Total Score: " + score + "/6 " + time + results;
    }