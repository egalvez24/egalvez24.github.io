function myTimer() {
    let timer = 600;
    document.geElementById("button").innerHTML = timer;
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
            results += "<p class=correct><br>Q1. Correct! The answer is HyperText Transfer Protocol!</br></p>";
        } else {
            results += "<p class=wrong><br>Q1. Wrong. The answer is Hypertext Transfer Protocol</br></p>";
    }
    let answer2 = document.getElementById("Q2").value;
        if (answer2 == "1991") {
            score ++;
            results += "<p class=correct><br>Q2. Correct! The answer is 1991!</br></p>";
        } else {
            results += "<p class=wrong><br>Q2. Wrong! The answer is 1991</br></p>";
    }
    let answer3 = document.querySelector('input[name="after_http"]:checked');
        if (answer3 && answer3.value === "HTTP 1.0") {
            score ++;
            results += "<p class=correct><br>Q3. Correct! The answer is HTTP 1.0!</br></p>";
        } else {
            results += "<p class=wrong><br>Q3. Wrong! It's HTTP 1.0</br></p>";
        }
    let answer4 = document.querySelector('input[name="imp_feature"]:checked');
        if (answer4 && answer4.value === "Header Compression") {
            score ++;
            results += "<p class=correct><br>Q4. Correct! The answer is Header Compression</br></p>";
        } else {
            results += "<p class=wrong><br>Q4. Wrong! It's Header Compression!</br></p>";
        }
    let answer5 = document.querySelector('input[name="which_feature"]:checked');
        if (answer5 && answer5.value === "QUIC") {
            score ++;
            results += "<p class=correct><br>Q5. Correct! The answer is QUIC!</br></p>";

        } else {
            results += "<p class=wrong><br>Q5. Wrong! It's QUIC</br></p>";
        }
    let answer6 = document.querySelectorAll('input[name="fall_under"]:checked');
        if (answer6.length == 2 && answer6[0].value === "Header Compression" && answer6[1].value === "Multiplexing") {
            score ++;
            results += "<p class=correct><br>Q6. Correct! The answer is Header Compression and Multiplexing!</br></p>";
        } else {
            results += "<p class=wrong><br>Q6. Wrong! It's Header Compression and Multiplexing</br></p>";
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