// Practice Javascript for Election Map

var newPolitician = function (name, color) {

    var politician = {};

    politician.name = name;
    politician.color = color;
    politician.electionResults = null;
    politician.totalVotes = 0;
    
    politician.tallyUpVotes = function () {
        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        };
    };

     return politician;

};

var candidate1 = newPolitician("Seth", [132,17,11]);
var candidate2 = newPolitician("Horace", [245, 141, 136]);

// console.log("Seth's party color is " + candidate1.color)
// console.log("Horace's party color is " + candidate2.color)

candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

// console.log(candidate1.electionResults);
// console.log(candidate2.electionResults);

var setStateResults = function (state) {

    theStates[state].winner = null;

    if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
        theStates[state].winner = candidate1;
    }
    else if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
        theStates[state].winner = candidate2;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner != null) {
        theStates[state].rgbColor = stateWinner.color;
    }
    else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    var stateInfoTable = document.getElementById("stateResults");

    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    candidate1Name.innerText = candidate1.name;
    candidate1Results.innerText = candidate1.electionResults[state];

    candidate2Name.innerText = candidate2.name;
    candidate2Results.innerText = candidate2.electionResults[state];

    if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
        winnersName.innerText = candidate1.name;
    } else if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
        winnersName.innerText = candidate2.name;
    } else {
        winnersName.innerText = "Draw";
    }
        
};

candidate1.tallyUpVotes ();
candidate2.tallyUpVotes ();

console.log("Candidate " + candidate1.name + " receives " + candidate1.totalVotes + " total votes!");
console.log("Candidate " + candidate2.name + " receives " + candidate2.totalVotes + " total votes!");

var winner = "";

if (candidate1.totalVotes > candidate2.totalVotes) {
    winner = candidate1.name;
}
else if (candidate1.totalVotes < candidate2.totalVotes) {
    winner = candidate2.name;
}
else {
    winner = "Draw";
}

console.log(winner + " wins the election!");

var table = document.getElementById("countryResults");

table.children[0].children[0].children[0].innerText = candidate1.name;
table.children[0].children[0].children[1].innerText = candidate1.totalVotes;
table.children[0].children[0].children[2].innerText = candidate2.name;
table.children[0].children[0].children[3].innerText = candidate2.totalVotes;

table.children[0].children[0].children[5].innerText = winner;