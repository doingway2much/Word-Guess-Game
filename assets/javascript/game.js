// Song Data for the first 5 songs
var songs = [
    {
        title: "still not a player",
        artist: "Big Punisher ft Joe",
        wikiLink: "https://en.wikipedia.org/wiki/Still_Not_a_Player",
        fact1: "This song was released in 1998 by this Puerto Rican native",
        fact2: "The rapper passed away in 2000",
        fact3: "The rappers was on the Terror Squad label"
    },
    {
        title: "gin and juice",
        artist: "Snoop Dogg",
        wikiLink: "https://en.wikipedia.org/wiki/Gin_and_Juice",
        fact1: "Song was released in 1994 but this Long Beach native",
        fact2: "This song features a sample from George McCrae's I Get Lifted",
        fact3: "The star of this song now has a TV show staring Martha Stuwart"
    },
    {
        title: "it was a good day",
        artist: "Ice Cube",
        wikiLink: "https://en.wikipedia.org/wiki/It_Was_a_Good_Day",
        fact1: "Song was released in 1993 by this Los Angels native",
        fact2: "This song features a gangster rapper turned movie star",
        fact3: "This music video feature a famous model Chevy Impala"
    },
    {
        title: "ill be there for you",
        artist: "Method Man ft. Mary J. Blige",
        wikiLink: "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You/You%27re_All_I_Need_to_Get_By",
        fact1: "Song was release in 1995 by this unique pair from New York",
        fact2: "One of the artists is a member of the Wu-Tang-Clan",
        fact3: "The other R&B artist was divorced her long time manager"
    },
    {
        title: "regulate",
        artist: "Warren G ft Nate Dogg",
        wikiLink: "https://en.wikipedia.org/wiki/Regulate_(song)",
        fact1: "This song was released in 1993 by another not as famous Long Beach native",
        fact2: "This song was featured on the Above the Rim Soundtrack",
        fact3: "This song also features a Compton rapper passed away in 2011"
    }
];

// Game variables
var numberOfWins = 0;
var losses = 0;
var guesses = 0;
var songsList = [];
var userGuessed = [];
var randomSong = "";
var randomSongEmpty = [];
var lettersInSong = [];
var numOfBlanks = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var underScore = [];
var numSpaces = 0;
var progress = [];
var numGuess = 25;
// var getRandomSong = "";

// Gets lists of song titles from the object
var getList = function () {
    for (var i = 0; i < songs.length; i++) {
        songsList.push(songs[i].title + "");
    }
}
getList();

// Sets origonal value to wrong button
var looserButtonStart = document.getElementById("wrong");
        looserButtonStart.textContent = losses;

// Sets origonal value to right button
var winnerButtonStart = document.getElementById("right");
        winnerButtonStart.textContent = numberOfWins;

// Sets origonal value to remaining button
    var remainingButton = document.getElementById("remaining");
    remainingButton.textContent = numGuess;


// Gets random song  from that list
var getSong = function () {
    randomSong = songsList[Math.floor(Math.random() * songsList.length)];
    numOfBlanks = lettersInSong.length;
    lettersInSong = randomSong.split("");
    console.log(randomSong);
    for (var i = 0; i < lettersInSong.length; i++)
    if (lettersInSong[i] === " ") {
        underScore.push("-");
    } else {
        underScore.push("_");

    }
}

getSong();
// Puts all the letters from the song in with a new aray letter by letter and spirts it out as new var with hidden checters

var clearHint2 = function() {
    var clearSelected = document.getElementById("hint2");
        clearSelected.textContent = "";
}

console.log(underScore);
console.log(lettersInSong);
console.log(lettersInSong.join(''));

//  If somg title is a match dispaly data for the random song
var newSong = function () {
if (randomSong === songs[0].title) {
    console.log(songs[0].fact1);
    var song1Selected = document.getElementById("hint1");
    song1Selected.textContent = songs[0].fact1;
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
}
if (randomSong === songs[1].title) {
    console.log(songs[1].fact1);
    var song1Selected = document.getElementById("hint1");
    song1Selected.textContent = songs[1].fact1;
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
}
if (randomSong === songs[2].title) {
    console.log(songs[2].fact1);
    var song1Selected = document.getElementById("hint1");
    song1Selected.textContent = songs[2].fact1;
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
}
if (randomSong === songs[3].title) {
    console.log(songs[3].fact1);
    var song1Selected = document.getElementById("hint1");
    song1Selected.textContent = songs[3].fact1;
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
}
if (randomSong === songs[4].title) {
    console.log(songs[4].fact1);
    var song1Selected = document.getElementById("hint1");
    song1Selected.textContent = songs[4].fact1;
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
}}

newSong();
var newGame = document.getElementById("instructions");
newGame.textContent = "This is a new game";

// Create user variable for user guess on key press
document.onkeyup = function (event) {
    var userGuess = event.key
    userGuessed.push(userGuess);


    // Add guess to history
    var guess = document.getElementById("history");
    guess.textContent = userGuessed;

    var letterInWord = false;
    console.log(letterInWord);

    console.log("The user guessed " + userGuess);

    for (var i = 0; i < lettersInSong.length; i++) {
        if (lettersInSong[i] === userGuess) {
            letterInWord = true;
            console.log(letterInWord);
            underScore[i] = userGuess;
            var song1Title = document.getElementById("selected");
            song1Title.textContent = underScore.join(" ");
        }
        else {
            letterInWord = false;
            console.log(letterInWord);
        }
    }

    if (!letterInWord) {
        numGuess--;
        console.log(numGuess);
        var remaining1 = document.getElementById("remaining");
        remaining1.textContent = numGuess;
    }

    //  Adds hints to the page when they hit 15 and 10 guesses 
    if ((numGuess === 15) && (randomSong === songs[0].title)) {
        var song0Selected10 = document.getElementById("hint2");
        song0Selected10.textContent = songs[0].fact2;
    }
    if ((numGuess === 5) && (randomSong === songs[0].title)) {
        var song0Selected5 = document.getElementById("hint3");
        song0Selected5.textContent = songs[0].fact3;
    }
    if ((numGuess === 15) && (randomSong === songs[1].title)) {
        var song1Selected10 = document.getElementById("hint2");
        song1Selected10.textContent = songs[1].fact2;
    }
    if ((numGuess === 5) && (randomSong === songs[1].title)) {
        var song1Selected5 = document.getElementById("hint3");
        song1Selected5.textContent = songs[1].fact3;
    }
    if ((numGuess === 15) && (randomSong === songs[2].title)) {
        var song2Selected10 = document.getElementById("hint2");
        song2Selected10.textContent = songs[2].fact2;
    }
    if ((numGuess === 5) && (randomSong === songs[2].title)) {
        var song2Selected5 = document.getElementById("hint3");
        song2Selected5.textContent = songs[2].fact3;
    }
    if ((numGuess === 15) && (randomSong === songs[3].title)) {
        var song3Selected10 = document.getElementById("hint2");
        song3Selected10.textContent = songs[3].fact2;
    }
    if ((numGuess === 5) && (randomSong === songs[3].title)) {
        var song3Selected5 = document.getElementById("hint3");
        song3Selected5.textContent = songs[3].fact3;
    }
    if ((numGuess === 15) && (randomSong === songs[4].title)) {
        var song4Selected10 = document.getElementById("hint2");
        song4Selected10.textContent = songs[4].fact2;
    }
    if ((numGuess === 5) && (randomSong === songs[4].title)) {
        var song4Selected5 = document.getElementById("hint3");
        song4Selected5.textContent = songs[4].fact3;
    }
    // If user runs out of gueses 
    if(numGuess < 1) {
        losses++;
        var looserButton = document.getElementById("wrong");
        looserButton.textContent = losses;
        numGuess = 25;
            userGuessed = [];
            underScore = [];
            numGuess = 25;
            var remainingButton = document.getElementById("remaining");
            remainingButton.textContent = numGuess;
            getSong();
            newSong();
            clearHint2();
            var song1Title = document.getElementById("selected");
            song1Title.textContent = underScore.join(" ");
            }   
//  Playes song if the user gussed the right song
 if (lettersInSong.toString() === underScore.toString()) {
    if(randomSong === songs[0].title) {
        var regulate = new Audio("assets/audio/Player.mp3");
        regulate.play();
     }
    if(randomSong === songs[1].title) {
        var regulate = new Audio("assets/audio/Gin.mp3");
        regulate.play();
     }
    if(randomSong === songs[2].title) {
        var regulate = new Audio("assets/audio/GoodDay.mp3");
        regulate.play();
     }
    if(randomSong === songs[3].title) {
        var regulate = new Audio("assets/audio/AllINeed.mp3");
        regulate.play();
     }
     if(randomSong === songs[4].title) {
        var regulate = new Audio("assets/audio/Regulate.mp3");
        regulate.play();
     }
    //  Final win logic and resets
    numberOfWins++;
    var winner = document.getElementById("right");
    winner.textContent = numberOfWins;
    userGuessed = [];
    underScore = [];
    numGuess = 25;
    var remainingButton = document.getElementById("remaining");
    remainingButton.textContent = numGuess;
    getSong();
    newSong();
    clearHint2();
    var song1Title = document.getElementById("selected");
    song1Title.textContent = underScore.join(" ");
    }   

};
