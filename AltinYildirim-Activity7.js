var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus(); // Move cursor to name field on page load
};

function displayResults() {
    var average = 0;
    var highest = 0;
    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }

    $("results").innerHTML = "<h2>Results</h2><p>Average score is " + average.toFixed(2) + "</p><p>Highest score is " + highest + "</p>";
}

function displayScores() {
    var table = $("scores_table");
    table.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";
    for (var i = 0; i < names.length; i++) {
        table.innerHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
}

function addScore() {
    var nameInput = $("name").value.trim();
    var scoreInput = parseFloat($("score").value.trim());

    if (nameInput === "" || isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
        alert("You must enter a name and a valid score.");
        return;
    }

    names.push(nameInput);
    scores.push(scoreInput);
    displayScores(); // update table
    $("name").value = ""; // clear name field
    $("score").value = ""; // clear score field
    $("name").focus(); // move cursor to name field after adding a score
}


