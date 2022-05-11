 //game variables
const gameOverSound = new Audio("http://starmen.net/mother2/soundfx/eat.wav");
const music = new Audio("../assets/sounds/Under_the_Sea_Lyrics.mp3");
      music.loop = true;
      music.volume = 0.2;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
let birdImage = new Image(700, 431);
      birdImage.src = "Blue_fish.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "https://ipfs.creary.net/ipfs/QmRXz597UwL2YtonShBZ4qW2PPk4mfup3cv9qcMwq6TYrQ";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// fireball variables
const fireballImage = new Image(350);
      fireballImage.src = "https://bestanimations.com/media/sharks/1852381163cute-pixel-art-shark-animated-gif.gif";
const fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("http://mrclan.com/fastdl/tfc/sound/burger.wav");
coinSound.volume = 0.3;
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start or B to open/close shop";
const menuTextXPosition = 200;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";

let fishLifes = 50
let shopIsOpen = false