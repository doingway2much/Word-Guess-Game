

// Song Data for the first 5 songs
var song1 = {
    title: "Still Not A Player",
    artist: "Big Punisher ft Joe",
    wikiLink: "https://en.wikipedia.org/wiki/Still_Not_a_Player",
    fact1: "This song was released in 1998 by this Puerto Rican native",
    fact2: "The rapper passed away in 2000",
    fact3: "The rappers was on the Terror Squad label"
    };
    
    var song2 = {
    title: "Gin & Juice",
    artist: "Snoop Dogg",
    wikiLink: "https://en.wikipedia.org/wiki/Gin_and_Juice",
    fact1: "Song was released in 1994 but this Long Beach native",
    fact2: "This song features a sample from George McCrae's I Get Lifted",
    fact3: "The star of this song now has a TV show staring Martha Stuwart"
    };
    
    var song3 = {
    title: "It Was A Good Day",
    artist: "Ice Cube",
    wikiLink: "https://en.wikipedia.org/wiki/It_Was_a_Good_Day",
    fact1: "Song was released in 1993 by this Los Angels native",
    fact2: "This song features a gangster rapper turned movie star",
    fact3: "This music video feature a famous model Chevy Impala"
    };
    
    var song4 = {
    title: "I'll Be There For You",
    artist: "Method Man ft. Mary J. Blige",
    wikiLink: "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You/You%27re_All_I_Need_to_Get_By",
    fact1: "Song was release in 1995 by this unique pair from New York",
    fact2: "One of the artists is a member of the Wu-Tang-Clan",
    fact3: "The other R&B artist was divorced her long time manager"
    };
    
    var song5 = {
    title: "Regulate",
    artist: "Warren G ft Nate Dogg",
    wikiLink: "https://en.wikipedia.org/wiki/Regulate_(song)",
    fact1: "This song was released in 1993 by another not as famous Long Beach native",
    fact2: "This song was featured on the Above the Rim Soundtrack",
    fact3: "This song also features a Compton rapper passed away in 2011"
    };

    // Game variables
    var numberOfWins = 0;
    var losses = 0;
    var guesses = 0;
    var userGuessed = [];
    var randomSong = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var underScore = [];
    var progress = [];
    var numGuess = "15"
    var songs = ["song1", "song2", "song3", "song4", "song5"];

     // Function that generates random letter for computer guess and looks for a match 
     window.onload = function() {
        var getRandomSong = songs[Math.floor(Math.random() * songs.length)];
        randomSong.push(getRandomSong);
        console.log("The random song is: " + randomSong[0]);
        
        

        //This is the actuins for song1
        if(songs[0] === randomSong[0]) {
            underScore = [];
            var song1Selected = document.getElementById("game");
            song1Selected.textContent = "Here's yoru first hint: " + [song1.fact1];
        } 
        for (var i = 0; i < song1.title.length; i++) {
            underScore.push ("_");
            }
            console.log(song1.title);
            console.log(underScore);
            var song1Title = document.getElementById("selected");
            song1Title.textContent = underScore;


        if(songs[1] === randomSong[0]) {
            underScore = [];
            var song1Selected = document.getElementById("game");
            song1Selected.textContent = "Here's yoru first hint: " + [song2.fact1];
        }
        for (var i = 0; i < song2.title.length; i++) {
            underScore.push ("_");
            }
            console.log(song2.title);
            console.log(underScore);
            var song2Title = document.getElementById("selected");
            song2Title.textContent = underScore;

        if(songs[2] === randomSong[0]) {
            underScore = [];
            var song1Selected = document.getElementById("game");
            song1Selected.textContent = "Here's yoru first hint: " + [song3.fact1];
            }
            for (var i = 0; i < song3.title.length; i++) {
                underScore.push ("_");
                }
                console.log(song3.title);
                console.log(underScore);
                var song3Title = document.getElementById("selected");
                song3Title.textContent = underScore;

        if(songs[3] === randomSong[0]) {
            underScore = [];
             var song1Selected = document.getElementById("game");
             song1Selected.textContent = "Here's yoru first hint: " + [song4.fact1];
            }
            for (var i = 0; i < song4.title.length; i++) {
                underScore.push ("_");
                }
                console.log(song4.title);
                console.log(underScore);
                var song4Title = document.getElementById("selected");
                song4Title.textContent = underScore;

        if(songs[4] === randomSong[0]) {
            underScore = [];
            var song1Selected = document.getElementById("game");
            song1Selected.textContent = "Here's yoru first hint: " + [song5.fact1];
            }
            for (var i = 0; i < song5.title.length; i++) {
                underScore.push ("_");
                }
                console.log(song5.title);
                console.log(underScore);
                var song5Title = document.getElementById("selected");
                song5Title.textContent = underScore;
        
            console.log(randomSong);
            
    } 


  

    var newGame = document.getElementById("instructions");
    newGame.textContent = "This is a new game";



    // Create user variable for user guess on key press
    document.onkeyup = function(event) {
    var userGuess = event.key
    userGuessed.push(userGuess);
    console.log(userGuess);
    
    // Add guess to history
    var guess = document.getElementById("history");
    guess.textContent = userGuessed;
    console.log("The user guessed " + userGuess);
    


}