function myFunction() {
    let fname=document.getElementById("fname").value;
    return fname;
}

function scoreQuiz() {
    let score = 0

    let answer1 = document.getElementById("Q1").value;
        if (answer1.toLowerCase() === "hypertext transfer protocol") {
            score ++;
        }

    let answer2 = document.getElementById("Q2").value;
        if (answer2 == "1991") {
            score ++;
        }

    let answer3 = document.getElementById("Q3").value;
        if (answer3.toLowerCase() === "http 0.9") {
            score ++;
        }    

    let answer4 = document.querySelector('input[name="after_http"]:checked').value;
        if (answer4 === "HTTP 1.0") {
            score ++;
        }

    let answer5 = document.querySelector('input[name="imp_feature"]:checked').value;
        if (answer5 === "Header Compression") {
            score ++;
        }

    let answer6 = document.querySelector('input[name="which_feature"]:checked').value;
        if (answer6 === "QUIC") {
            score ++;
        }

    let answer7 = document.querySelector('input[name="fall_under"]:checked').value;
        if (answer7 === "HTTP 1.0") {
            score ++;
        }
    return score;
}

function submitForm() {
    let result = scoreQuiz;
    return result; 
}