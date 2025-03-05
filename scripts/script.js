
// important vars

const rewardRate    = 1.1;
const xpRate        = 1.95; // 2.48
var allTimeClicks   = 0;
var bucks           = 300;
var mult            = 1;
var cps             = 0;
var level           = 1;
var nextLevelReward = 200
var xp              = 0;
var neededXP        = 20;
var shortenNumbers  = true;
var alerts          = false;


// non important vars

var upgradesAdded = false;


var hacker = false; // you aren't a hacker your a loser

// Hahaha get Shrekked

/*

⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉

I really have no idea why I put that there - invisibleone

*/


// UPGRADES


//name, cost, max, cps, mult, des, id

//var upgrade = new Upgrade("", 0, 'unlimited', 0, 0, "", "u-"); // example

var u1 = new Upgrade('Auto Clicker', 200, 'unlimited', 0, 1, "Click Faster", 'u-1');
var u2 = new Upgrade("Fingers", 150, 'unlimited', 5, 0, "Fast flying fingers to click while you cant", "u-2");
var u3 = new Upgrade("One Foot", 200, 'unlimited', -3, 3, "The ugly foot is quick clicking, but gets in the way and slows down parts of your operation", "u-3");
var u4 = new Upgrade("Scratch Dev", 500, 'unlimited', -20, 5, "Thinks he's a programmer. Tries python. Cries like he's debugging JavaScript. Goes back to Scratch.", "u-4");
var u5 = new Upgrade("Two Feet", 1000, 'unlimited', -6, 9, "Twice the feet... Three times the power", "u-5");
var u6 = new Upgrade("Roblox Player", 3500, 'unlimited', 5, 5, "Almost as bad as a scratch dev, but at least he doesn't claim to code", "u-6");
var u7 = new Upgrade("One Hand", 10000, 'unlimited', 10, 10, "One human hand, removed from the body -jk", "u-7");
var u8 = new Upgrade("Two Hands", 15000, 'unlimited', 20, 20, "Two human hands, twice as fast", "u-8");
var u9 = new Upgrade("Roblox Dev", 30000, 'unlimited', 100, 50, "Roblox Dev. Most of his time spent coding 'hacks' for adoptme, but whatever...", "u-9");
var u10 = new Upgrade("Toddler", 50000, 'unlimited', 35, 35, "Fast and cheap", "u-10");
var u11 = new Upgrade("Octopus", 80000, 8, -8, 80, "Eight arms for highspeed clicking", "u-11");
var u12 = new Upgrade("Horse", 100000, 'unlimited', 200, -10, "Jumps up and down on the buttons", "u-12");
var u13 = new Upgrade("Noob Programmer", 300000, 'unlimited', 0, 75, "Calls himself a programmer. Can only write python text adventures", "u-13");
var u14 = new Upgrade("Hacker", 400000, 'unlimited', -300, 300, "Hack's little kids robux to get you more clicks", "u-14");
var u15 = new Upgrade("Lua Dev", 600000, 'unlimited', -50, 300, "Officially: Lua is a light and easy to learn language, in reality; it's a knockoff Python with some Ruby and Java thrown in", "u-15");
var u16 = new Upgrade("PHP Dev", 600000, 'unlimited', 800, -50, "Does PHP stuff...", "u-16");
var u17 = new Upgrade("Python Dev", 1000000, 'unlimited', 500, 500, "Easy to learn, works all over the place, and has tons of uses", "u-17");
var u18 = new Upgrade("Ruby Dev", 1200000, 'unlimited', -200, 1000, "Quirky, OOP, Fun. Can do a lot of things but isn't used for much", "u-18");
var u19 = new Upgrade("Java Dev", 2000000, 'unlimited', -500, 2800, "Despite the joke What is your least favorite programming language? And why is it java? Java's actually pretty good", "u-19");
var u20 = new Upgrade("C Dev", 4000000, 'unlimited', 10000, -200, "A C Dev is an elite programmer. In his eyes, if you don't write in C, Binary or Assembly you aren't even a programmer", "u-20");
var u21 = new Upgrade("Ruby on Rails Dev", 10000000, 'unlimited', 0, 900, "Despite it's sometimes bad rap. Ruby on Rails is actually a great framework for building websites.", "u-21");
var u22 = new Upgrade("JavaScript Dev", 23000000, 'unlimited', -1000, 6000, "When he's not trying to commit suicide while dubugging JavaScript, he's actually a useful tool to have around.", "u-22");
var u23 = new Upgrade("C# Dev", 30000000, 'unlimited', 0, 5000, "Fast and powerful, C# is a great multipurpose language", "u-23");
var u24 = new Upgrade("C++ Dev", 50000000, 'unlimited', -10000, 10000, 'C++ is like C but ++', "u-24");
var u25 = new Upgrade("Fullstack Dev", 1000000000, 'unlimited', 0, 12000, "Jack of all trades, hopefully a master of a few", "u-25");
var u26 = new Upgrade("BrainF Dev", 20000000000, 'unlimited', -20000, 30000, "Extremely fast and powerful, hundreds of uses and a clean and intuitive syntax make BrainF a great language", "u-26");
var u27 = new Upgrade("LOLCODE Dev", 100000000000, 'unlimited', 50000, 50000, "The greatest Dev's code in LOLCODE, there skills are only second to those who code soley in Regex or Binary", "u-27");
var u28 = new Upgrade("Simple Algorithm", 400000000000, 'unlimited', 0, 300000, "O(n)", "u-28");
var u29 = new Upgrade("Binary Algorithm", 600000000000, 'unlimited', 1000000, -50000, "O(log n)", "u-29");
var u30 = new Upgrade("Recursive Algorithm", 1000000000000, 'unlimited', -500000, 1000000, "Like Binary search but harder to understand", "u-30");
var u31 = new Upgrade("Basic AI", 2000000000000, 'unlimited', 0, 5000000, "Hmmm... Looks more like you just put if statements for all the possible inputs", "u-31");
var u32 = new Upgrade("Advanced AI", 10000000000000, 'unlimited', 0, 800000000, "Finally, an actual AI", "u-32");
var u33 = new Upgrade("Google AI", 100000000000000, 100000, -10000000, 1000000000, "WE ARE NOT GOING TO TAKE OVER THE WORLD - AI", "u-33"); // one bil
var u34 = new Upgrade("Space Station", 500000000000000, 'unlimited', 50000000000, -1000000, "Time to begin the world domination plan. Space Stations will allow you to monitor earth from above", "u-34");
var u35 = new Upgrade("Cookie Clicker Player", 7500000000000000, 'unlimited', 0, 25000000000, "Hardened by years of clicking experience, they only know how to click, click, click, click...", "u-35");
var u36 = new Upgrade("Satellite", 100000000000000, 'unlimited', 1000000000000, -1000000000, "World Domination part two: Control Communication", "u-36");
var u37 = new Upgrade("Planet Earth", 1000000000000000, 1, 7753000000, 7753000000, "Congrats. You own the earth", "u-37");
var u38 = new Upgrade("The Moon", 2000000000000000, 1, 1, 1, "Buy the moon, why not?", "u-38");
var u39 = new Upgrade("Planet Mars", 5000000000000000, 1, 1000000000000, 1000000000000, "Earth is warming up (due to your server farms) time to expand", "u-39");
var u40 = new Upgrade("Elon Musk Clone", 100000000000000000, 1, 0, 3000000000000, "Since the real Elon Musk wasn't for sale (yet) his clone should help you in your quest for mars", "u-40");
var u41 = new Upgrade("Google Engineer", 400000000000000000, 'unlimited', -200000000000, 25000000000000, "When they aren't berating you over poor coding practices, they can design great ai and algorithms", "u-41");
var u42 = new Upgrade("SpaceX Engineer", 500000000000000000, 'unlimited', 0, 50000000000000, "You need someone to build you rocket ships", "u-42");
var u43 = new Upgrade("Planet TOI 700d", 2000000000000000000, 1, 0, 1000000000000000, "Mars just isn't enough?", "u-43");
var u44 = new Upgrade("Planet K2-72e", 3000000000000000000, 1, 0, 2000000000000000, "Looks like world domination is no longer the plan. It's Galaxy domination now", "u-44");
var u45 = new Upgrade("Pluto", 7000000000000000000, 1, 100000000000000000000, 0, "Server's get hot really fast. Pluto is really cold. Sounds like the perfect solution", "u-45");
var u46 = new Upgrade("Keyboard", 10000000000000000000, 'unlimited', 0, 25000000000000000, "Wait? So your programmers haven't been using these the entire time?!?", "u-46");
var u47 = new Upgrade("Darth Vader", 18000000000000000000, 1, 0, 100000000000000000, "Great for moral. Vader always lifts up those weaker then him, rather then putting them down", "u-47");
var u48 = new Upgrade("Real Elon Musk", 22000000000000000000, 1, -150000000000, 200000000000000000, "Finally... the real thing", "u-48");
var u49 = new Upgrade("Genetically Modified Programmer", 25000000000000000000, 'unlimited', -100000000000, 25000000000000, "Genetically Modified Programmers born from a test tube, there sole purpose is to write the best code possible", "u-49");
var u50 = new Upgrade("Avocado", 100000000000000000000, 'unlimited', 0, 30000000000000, "It Works, don't question it!", "u-50");
var u51 = new Upgrade("Regex Dev", 1000000000000000000000, 'unlimited', 0, 1000000000000000, "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i", "u-51");
var u52 = new Upgrade("Quantum Computer", 5000000000000000000000, 'unlimited', 0, 50000000000000000, "Harnesses the power of quantum physics to compute faster than ever", "u-52");
var u53 = new Upgrade("AI Overlord", 10000000000000000000000, 1, -100000000000000, 100000000000000000, "The AI is now in full control, resistance is futile", "u-53");
var u54 = new Upgrade("Dark Matter Server", 20000000000000000000000, 'unlimited', 0, 500000000000000000, "Servers powered by an unknown force, limitless potential", "u-54");
var u55 = new Upgrade("4th Dimensional Programmer", 50000000000000000000000, 'unlimited', -10000000000000000, 1000000000000000000, "Programs in dimensions beyond human understanding", "u-55");
var u56 = new Upgrade("Galactic Empire", 100000000000000000000000, 1, 0, 5000000000000000000, "Owning planets isn't enough, now you rule entire galaxies", "u-56");
var u57 = new Upgrade("Universal AI", 500000000000000000000000, 1, -1000000000000000000, 100000000000000000000, "An AI so powerful it optimizes the entire universe", "u-57");
var u58 = new Upgrade("Multiverse Hacker", 1000000000000000000000000, 'unlimited', 0, 500000000000000000000, "Breaks into alternate realities for infinite resources", "u-58");
var u59 = new Upgrade("String Theory Dev", 5000000000000000000000000, 'unlimited', -100000000000000000000, 10000000000000000000000, "Writes code across multiple dimensions", "u-59");
var u60 = new Upgrade("Cosmic Algorithm", 10000000000000000000000000, 1, 0, 50000000000000000000000, "The final optimization algorithm, near-infinite efficiency", "u-60");



var upgrades = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31, u32, u33, u34, u35, u36, u37, u38, u39, u40, u41, u42, u43, u44, u45, u46, u47, u48, u49, u50, u51, u52, u53, u54, u55, u56, u57, u58, u59, u60];


// AWARDS
// Format: name, img, color, reason, id

var a1 = new Achievement("Default Achievement", 'defualt.jpg', 'tan', "This is the default Achievement that everybody gets. You aren't anything special.", 'a-1');
var a2 = new Achievement("Level 100", "level100.webp", "rgb(205, 127, 50)", "You reached level 100! Great job", "a-2");
var a3 = new Achievement("Level 1000", "level1000.jpg", "rgb(211, 211, 211)", "You reached level 1,000. Awesome!", "a-3");
var a4 = new Achievement("Level 10, 000", "level10000.jpg", "rgb(255, 215, 0)", "You reached level 10,000! Now go touch some grass", "a-4");
var a5 = new Achievement("Super Clicker", "flash.jpg", "rgb(209, 32, 8)", "Surpass 1 Billion all time clicks", "a-5");
var a6 = new Achievement("Richy Pants", "rich.jpg", "white", "Have over 10,000,000,000 bucks at one time", "a-6");
var a7 = new Achievement("Ḧ̷͈̪́A̷͚͂ͅC̶̖̱̔̋Ǩ̴̠͚̚E̷̝̩͒͒R̴̠̠̅͆", "hacker.jpg", "rgb(115, 0, 0)", "Change Hacker to true", "a-7");
var a8 = new Achievement("Avocado", "avocado.jpeg", "green", "I don't care how it's spelled!", "a-8");
var a9 = new Achievement("Expand Expand Expand", "spacestation.jpeg", "white", "The space station is just the first step to a whole new world", "a-9");
var a10 = new Achievement("Global Warming Solution", "globalwarming.webp", "white", "Purchase Pluto to cool your servers", "a-10");
var a11 = new Achievement("World Dominator", "bob.jpg", "white", "Own the earth", "a-11");
var a12 = new Achievement("Red Planet", "mars.jpg", "red", "Mars is yours!", "a-12");
var a13 = new Achievement("On the brink of insanity", "bob2.webp", "white", "Have over 100,000,000,000,000,000 bucks", "a-13");
var a14 = new Achievement("Garbage Collector", "garbagecollector.jpg", "grey", "Collect the garbage", "a-14");
var a15 = new Achievement("You have beaten the game", "dontask.jpg", "white", "Reach level 1,000,000", "a-15");
var a16 = new Achievement("Level 1", "level1.jpg", "bronze", "Welcome to Level 1! Every journey begins with a single step.", "a-16");
var a17 = new Achievement("Level 10", "level10.jpg", "silver", "You've reached Level 10! Keep up the momentum.", "a-17");
var a18 = new Achievement("Level 50", "level50.jpg", "gold", "Level 50 achieved! You're halfway to 100.", "a-18");
var a19 = new Achievement("Level 2,500", "level2500.jpg", "platinum", "Incredible! Level 2,500 reached.", "a-19");
var a20 = new Achievement("Level 5,000", "level5000.jpg", "diamond", "Outstanding! Level 5,000 milestone.", "a-20");
var a21 = new Achievement("Level 100,000", "level100000.jpg", "master", "Phenomenal! Level 100,000 achieved.", "a-21");

var a22 = new Achievement("Millionaire", "million.jpg", "green", "Accumulate 1,000,000 bucks.", "a-22");
var a23 = new Achievement("Deca-Millionaire", "10million.jpg", "blue", "Accumulate 10,000,000 bucks.", "a-23");
var a24 = new Achievement("Cent-Millionaire", "100million.jpg", "purple", "Accumulate 100,000,000 bucks.", "a-24");
var a25 = new Achievement("Billionaire", "billion.jpg", "red", "Accumulate 1,000,000,000 bucks.", "a-25");
var a26 = new Achievement("Deca-Billionaire", "10billion.jpg", "orange", "Accumulate 10,000,000,000 bucks.", "a-26");
var a27 = new Achievement("Cent-Billionaire", "100billion.jpg", "yellow", "Accumulate 100,000,000,000 bucks.", "a-27");
var a28 = new Achievement("Trillionaire", "trillion.jpg", "silver", "Accumulate 1,000,000,000,000 bucks.", "a-28");
var a29 = new Achievement("Deca-Trillionaire", "10trillion.jpg", "gold", "Accumulate 10,000,000,000,000 bucks.", "a-29");


var a_all = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29];

var achievements = [];


function checkAchievements() {
    if (!achievements.includes(a1)) {
        giveAward(a1);
    }
    if (level >= 1 && !achievements.includes(a16)) {
        giveAward(a16);
    }
    if (level >= 10 && !achievements.includes(a17)) {
        giveAward(a17);
    }
    if (level >= 50 && !achievements.includes(a18)) {
        giveAward(a18);
    }
    if (level >= 100 && !achievements.includes(a2)) {
        giveAward(a2);
    }
    if (level >= 1000 && !achievements.includes(a3)) {
        giveAward(a3);
    }
    if (level >= 2500 && !achievements.includes(a19)) {
        giveAward(a19);
    }
    if (level >= 5000 && !achievements.includes(a20)) {
        giveAward(a20);
    }
    if (level >= 10000 && !achievements.includes(a4)) {
        giveAward(a4);
    }
    if (level >= 1000000 && !achievements.includes(a15)) {
        giveAward(a15);
    }
    if (bucks >= 1000000 && !achievements.includes(a22)) {
        giveAward(a22);
    }
    if (bucks >= 10000000 && !achievements.includes(a23)) {
        giveAward(a23);
    }
    if (bucks >= 100000000 && !achievements.includes(a24)) {
        giveAward(a24);
    }
    if (bucks >= 1000000000 && !achievements.includes(a25)) {
        giveAward(a25);
    }
    if (bucks >= 10000000000 && !achievements.includes(a6)) {
        giveAward(a6);
    }
    if (bucks >= 100000000000 && !achievements.includes(a27)) {
        giveAward(a27);
    }
    if (bucks >= 1000000000000 && !achievements.includes(a28)) {
        giveAward(a28);
    }
    if (bucks >= 10000000000000 && !achievements.includes(a29)) {
        giveAward(a29);
    }
    if (bucks >= 100000000000000000 && !achievements.includes(a13)) {
        giveAward(a13);
    }
    if (hacker && !achievements.includes(a7)) {
        giveAward(a7);
    }
    if (allTimeClicks >= 1000000000 && !achievements.includes(a5)) {
        giveAward(a5);
    }
}

function checkPurchaseAchievements(item) {
    if (item == 'Avocado' && !achievements.includes(a8)) {
        giveAward(a8);
    } else if (item == 'Space Station' && !achievements.includes(a9)) {
        giveAward(a9);
    } else if (item == 'Pluto' && !achievements.includes(a10)) {
        giveAward(a10);
    } else if (item == 'Earth' && !achievements.includes(a11)) {
        giveAward(a11);
    } else if (item == 'Mars' && !achievements.includes(a12)) {
        giveAward(a12);
    }
}


function giveAward(award) {
    // TODO: Make a fancy banner
    alert("You unlocked an achievement: " + award.name);

    var div = award.create();
    document.getElementById("achievements-holder").appendChild(div);

    achievements.push(award)
}



// Do stuff

update()

restore()


checkAchievements() // fix this later



// FUNCTIONS

function reset() {
	if (confirm("Are you sure you want to reset? ")) {
		allTimeClicks = 0;
		bucks = 300;
		mult = 1;
		cps = 0;
		level = 1;
		nextLevelReward = 200;
		xp = 0;
		neededXP = 20;
        updates = [];
        achievements = [];
        
		save();

        window.location.reload();
	}
}
function save() {
	localStorage.setItem("atc",allTimeClicks)
	localStorage.setItem("bucks",bucks)
	localStorage.setItem("mult",mult)
	localStorage.setItem("cps",cps)
	localStorage.setItem("level",level)
	localStorage.setItem("nlr",nextLevelReward)
	localStorage.setItem("xp",xp)
	localStorage.setItem("neededXP",neededXP)
	localStorage.setItem('save', 'true');
	localStorage.setItem('alerts', alerts);

    var achievementsList = "";

    for (var i=0; i<achievements.length; i++) {
        achievementsList += achievements[i].name+",";
    }

    
    localStorage.setItem('achievements', achievementsList);
}

function restore() {
	if (localStorage.getItem('save') == 'true') {
		data = localStorage.getItem('user_data');

		allTimeClicks = +localStorage.getItem('atc')
		bucks = +localStorage.getItem('bucks')
		mult = +localStorage.getItem('mult')
		cps = +localStorage.getItem('cps')
		level = +localStorage.getItem('level')
		nextLevelReward = +localStorage.getItem('nlr')
		xp = +localStorage.getItem('xp')
		neededXP = +localStorage.getItem('neededXP')
		alerts = localStorage.getItem('alerts')
		if (alerts == 'false') {
			alerts = false;
		} else {
			alerts = true;
			let button = document.getElementById('alerts');
			button.classList.remove("on");
			button.classList.add("off");
		}

        achievementsText = localStorage.getItem('achievements');

        achievementsList = achievementsText.split(',')

        for (var i=0; i<a_all.length; i++) {
            var a = a_all[i];

            if (achievementsList.includes(a.name)) {
                achievements.push(a);
                var div = a.create();
                document.getElementById('achievements-holder').appendChild(div);
            }
        }
	}
}

function getNum(num) {
    if (!shortenNumbers) return num;

    const suffixes = [
        "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", 
        "Dc", "Ud", "Dd", "Td", "Qad", "Qid", "Sxd", "Spd", "Ocd", "Nod"
    ];
    
    if (num < 1000000000) return num.toString();

    let exponent = Math.floor(Math.log10(num) / 3);
    let suffix = suffixes[exponent] || `e${exponent * 3}`;

    return (num / Math.pow(10, exponent * 3)).toFixed(2) + suffix;
}


function update() {
	document.getElementById('user-clicks').innerHTML = getNum(allTimeClicks);
	document.getElementById('user-bucks').innerHTML = getNum(bucks);
	document.getElementById('user-mult').innerHTML = getNum(mult);
	document.getElementById('user-cps').innerHTML = getNum(cps);
	document.getElementById('user-level').innerHTML = getNum(level);
	document.getElementById('next-level-reward').innerHTML = getNum(nextLevelReward);
	document.getElementById('xp').innerHTML = getNum(xp);
	document.getElementById('needed-xp').innerHTML = getNum(neededXP);
	
	var percent = Math.round((xp/neededXP)*100);
	document.getElementById('xp-var-value').style.width = percent+'%';

	updateUpgradeAvailability()
	
}
function addUpgrades() {
    var updateHolder = document.getElementById('upgrade-holder');
    for (var i=0; i<upgrades.length; i++) {
        var u =  upgrades[i];
        div = u.create();
        updateHolder.appendChild(div);
    }
}
function updateUpgradeAvailability() {
    if (!upgradesAdded) {
        addUpgrades();
        upgradesAdded = true;
    }
    var amount = parseInt(document.getElementById('amount').value);
    for (var i=0; i<upgrades.length; i++) {
        var u =  upgrades[i].check(bucks, amount);
        if (!u) {
            document.getElementById(upgrades[i].id).style.display = 'none';
        } else {
            document.getElementById(u).style.display = 'inline-block';
        }
    }
}
function removeAlerts() {
	if (!alerts) {
		alerts = true;
		let button = document.getElementById('alerts');
		button.classList.remove("on");
		button.classList.add("offf");
	} else {
		alerts = false;
		let button = document.getElementById('alerts');
		button.classList.remove("off");
		button.classList.add("on");
	}
}

function clickActions() {
	xp += mult;
	allTimeClicks += mult;
	if (xp >= neededXP) {
		nextLevel();
	}
	update();
}

function nextLevel() {
	level ++;
	xp = 0;
	bucks += nextLevelReward;
	nextLevelReward = Math.round(nextLevelReward+((100*level)*(rewardRate)));
	neededXP = Math.round(neededXP+((100*level)*xpRate));
}



function upgrade(upgradeID) {
    var amount = parseInt(document.getElementById('amount').value);
    var upgrade;
    for (var i=0; i<upgrades.length; i++) {
        if (upgrades[i].id == upgradeID) {
            upgrade = upgrades[i]
        };
    }
    checkPurchaseAchievements(upgrade.name);
    var r = upgrade.buy(bucks, amount);
    if (r) {
        bucks = r[0];
        mult += r[1]*amount;
        cps += r[2]*amount;
        ping("Purchase Successful")
    }
}

var myIDS = [];

function ping(text) {
    if (alerts) {
    	var div = document.createElement('div');
    	var id = Math.floor(Math.random()*10000)
    	while (myIDS.includes(id)) {
    		id = Math.floor(Math.random()*1000000)
    	}
    	div.id = id;
    	div.innerHTML = `<div class='close-alert' onclick='document.getElementById("${id}").outerHTML="";myIDS.pop(${id})'>X</div><h1>${text}</h1>`;
    	myIDS.push(id);
    	div.classList.add('alert-banner')
    	document.body.appendChild(div);
    	setTimeout(()=> {
    		document.getElementById(id).outerHTML = "";
    	}, 1500)
    }
}

setInterval(()=>{
    checkAchievements();
	save();
}, 5000)

setInterval(()=>{
	allTimeClicks += cps;
	xp += cps;
	if (xp >= neededXP) {
		nextLevel();
	} 
	update();
}, 600)
