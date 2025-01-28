//initiate some things
const vol = new Tone.Volume(-12).toDestination();
const reverb = new Tone.Reverb({decay: 9, wet: .6}).connect(vol);
const fDel = new Tone.FeedbackDelay(.125, 0.4).connect(reverb);
const fDel2 = new Tone.FeedbackDelay(.25, 0.4).connect(reverb);
const filty = new Tone.AutoFilter(.06125, 400, 3).connect(fDel2);
const samples = new Tone.ToneAudioBuffers({
//the low notes
  0 : "sounds/root/Arb_Cherry_Low_1a.wav",
  1 : "sounds/root/Arb_Cherry_Low_1b.wav",
	2 : "sounds/root/Arb_Cherry_Low_1c.wav",
	3 : "sounds/root/Arb_Cherry_Low_1d.wav",
	4 : "sounds/root/Arb_Cherry_Low_1e.wav",

//the hi notes
  5 : "sounds/arb/cluster_1/Arb_Cherry_1a.wav",
  6 : "sounds/arb/cluster_1/Arb_Cherry_1b.wav",
  7 : "sounds/arb/cluster_1/Arb_Cherry_1c.wav",
  8 : "sounds/arb/cluster_1/Arb_Cherry_1d.wav",
  9 : "sounds/arb/cluster_1/Arb_Cherry_2a.wav",
  10 : "sounds/arb/cluster_1/Arb_Cherry_2b.wav",
  11 : "sounds/arb/cluster_1/Arb_Cherry_2c.wav",
  12 : "sounds/arb/cluster_1/Arb_Cherry_2d.wav",
  13 : "sounds/arb/cluster_1/Arb_Cherry_2e.wav",
  14 : "sounds/arb/cluster_1/Arb_Cherry_3a.wav",
  15 : "sounds/arb/cluster_1/Arb_Cherry_3b.wav",
  16 : "sounds/arb/cluster_1/Arb_Cherry_3c.wav",
  17 : "sounds/arb/cluster_1/Arb_Cherry_3d.wav",
  18 : "sounds/arb/cluster_1/Arb_Cherry_3e.wav",
  19 : "sounds/arb/cluster_1/Arb_Cherry_4a.wav",
  20 : "sounds/arb/cluster_1/Arb_Cherry_4b.wav",
  21 : "sounds/arb/cluster_1/Arb_Cherry_4c.wav",
  22 : "sounds/arb/cluster_1/Arb_Cherry_4d.wav",
  23 : "sounds/arb/cluster_1/Arb_Cherry_5a.wav",
  24 : "sounds/arb/cluster_1/Arb_Cherry_5b.wav",
  25 : "sounds/arb/cluster_1/Arb_Cherry_5c.wav",
  26 : "sounds/arb/cluster_1/Arb_Cherry_5d.wav",
  27 : "sounds/arb/cluster_1/Arb_Cherry_5e.wav",
  28 : "sounds/arb/cluster_1/Arb_Cherry_5f.wav",
  29 : "sounds/arb/cluster_1/Arb_Cherry_6a.wav",
  30 : "sounds/arb/cluster_1/Arb_Cherry_6b.wav",
  31 : "sounds/arb/cluster_1/Arb_Cherry_6c.wav",
  32 : "sounds/arb/cluster_1/Arb_Cherry_6d.wav",
  33 : "sounds/arb/cluster_1/Arb_Cherry_6e.wav",
  34 : "sounds/arb/cluster_1/Arb_Cherry_7a.wav",
  35 : "sounds/arb/cluster_1/Arb_Cherry_7b.wav",
  36 : "sounds/arb/cluster_1/Arb_Cherry_7c.wav",
  37 : "sounds/arb/cluster_1/Arb_Cherry_7d.wav",
  38 : "sounds/arb/cluster_1/Arb_Cherry_8a.wav",
  39 : "sounds/arb/cluster_1/Arb_Cherry_8b.wav",
  40 : "sounds/arb/cluster_1/Arb_Cherry_8c.wav",
  41 : "sounds/arb/cluster_1/Arb_Cherry_8d.wav",
  42 : "sounds/arb/cluster_1/Arb_Cherry_9a.wav",
  43 : "sounds/arb/cluster_1/Arb_Cherry_9b.wav",
  44 : "sounds/arb/cluster_1/Arb_Cherry_9c.wav",
  45 : "sounds/arb/cluster_1/Arb_Cherry_9d.wav",
  46 : "sounds/arb/cluster_1/Arb_Cherry_10a.wav",
  47 : "sounds/arb/cluster_1/Arb_Cherry_10b.wav",
  48 : "sounds/arb/cluster_1/Arb_Cherry_10c.wav",
  49 : "sounds/arb/cluster_1/Arb_Cherry_10d.wav",
  50 : "sounds/arb/cluster_1/Arb_Cherry_10e.wav",
  51 : "sounds/arb/cluster_1/Arb_Cherry_11a.wav",
  52 : "sounds/arb/cluster_1/Arb_Cherry_11b.wav",
  53 : "sounds/arb/cluster_1/Arb_Cherry_11c.wav",
  54 : "sounds/arb/cluster_1/Arb_Cherry_11d.wav",
  55 : "sounds/arb/cluster_1/Arb_Cherry_12a.wav",
  56 : "sounds/arb/cluster_1/Arb_Cherry_12b.wav",
  57 : "sounds/arb/cluster_1/Arb_Cherry_12c.wav",
  58 : "sounds/arb/cluster_1/Arb_Cherry_12d.wav",
  59 : "sounds/arb/cluster_1/Arb_Cherry_13a.wav",
  60 : "sounds/arb/cluster_1/Arb_Cherry_13b.wav",
  61 : "sounds/arb/cluster_1/Arb_Cherry_13c.wav",
  62 : "sounds/arb/cluster_1/Arb_Cherry_13d.wav",
  63 : "sounds/arb/cluster_1/Arb_Cherry_14a.wav",
  64 : "sounds/arb/cluster_1/Arb_Cherry_14b.wav",
  65 : "sounds/arb/cluster_1/Arb_Cherry_14c.wav",
  66 : "sounds/arb/cluster_1/Arb_Cherry_15a.wav",
  67 : "sounds/arb/cluster_1/Arb_Cherry_15b.wav",
  68 : "sounds/arb/cluster_1/Arb_Cherry_15c.wav",
  69 : "sounds/arb/cluster_1/Arb_Cherry_15d.wav",
  70 : "sounds/arb/cluster_1/Arb_Cherry_15e.wav",
  71 : "sounds/arb/cluster_1/Arb_Cherry_16a.wav",
  72 : "sounds/arb/cluster_1/Arb_Cherry_16b.wav",
  73 : "sounds/arb/cluster_1/Arb_Cherry_16c.wav",
  74 : "sounds/arb/cluster_1/Arb_Cherry_16d.wav",
  75 : "sounds/arb/cluster_1/Arb_Cherry_17a.wav",
  76 : "sounds/arb/cluster_1/Arb_Cherry_17b.wav",
  77 : "sounds/arb/cluster_1/Arb_Cherry_17c.wav",
  78 : "sounds/arb/cluster_1/Arb_Cherry_18a.wav",
  79 : "sounds/arb/cluster_1/Arb_Cherry_18b.wav",
  80 : "sounds/arb/cluster_1/Arb_Cherry_18c.wav",
  81 : "sounds/arb/cluster_1/Arb_Cherry_18d.wav",
  82 : "sounds/arb/cluster_1/Arb_Cherry_19a.wav",
  83 : "sounds/arb/cluster_1/Arb_Cherry_19b.wav",
  84 : "sounds/arb/cluster_1/Arb_Cherry_19c.wav",
  85 : "sounds/arb/cluster_1/Arb_Cherry_19d.wav",
  86 : "sounds/arb/cluster_1/Arb_Cherry_20a.wav",
  87 : "sounds/arb/cluster_1/Arb_Cherry_20b.wav",
  88 : "sounds/arb/cluster_1/Arb_Cherry_20c.wav",
  89 : "sounds/arb/cluster_1/Arb_Cherry_20d.wav",
  90 : "sounds/arb/cluster_1/Arb_Cherry_21a.wav",
  91 : "sounds/arb/cluster_1/Arb_Cherry_21b.wav",
  92 : "sounds/arb/cluster_1/Arb_Cherry_21c.wav",
  93 : "sounds/arb/cluster_1/Arb_Cherry_21d.wav",
  94 : "sounds/arb/cluster_1/Arb_Cherry_22a.wav",
  95 : "sounds/arb/cluster_1/Arb_Cherry_22b.wav",
  96 : "sounds/arb/cluster_1/Arb_Cherry_22c.wav",
  97 : "sounds/arb/cluster_1/Arb_Cherry_22d.wav",
//the high notes

}, () => {
  rootPlayers = [];
  melodyPlayers = [];
  leadPlayers = [];
  panners = [];
  leadPanners = [];
  for (let x = 0; x < 12; x++) {
    panners.push(new Tone.AutoPanner(2).connect(fDel).start());
    leadPanners.push(new Tone.AutoPanner(.25).connect(filty).start());
    panners[x].type = "square";
    panners[x].wet.value = .5;
    leadPanners[x].type = "square";
    leadPanners[x].wet.value = .7;
    rootPlayers.push(new Tone.Player().connect(reverb));
    //rootPlayers[x].buffer = samples.get("0");
    melodyPlayers.push(new Tone.Player().connect(panners[x]));
    leadPlayers.push(new Tone.Player().connect(leadPanners[x]));
  }
  document.querySelector(".button").innerHTML = "begin";
});
let isPlaying = false;
let ranSample = 0;
let counter = 0;
const silentPlayer = new Tone.Player("./sounds/silence.m4a");
silentPlayer.connect(reverb);
silentPlayer.loop = true;
rootPlayerCount = 0; //root voice allocator
melodyPlayerCount = 0; //melody voice allocator
leadPlayerCount = 0; //lead voice allocator

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//this function doesn't do anything until we use it. 
//this defines the offset in the array so we can do things on top of the root note.

//canvas to create music player
let x = 0; //keep track of playhead drawing
let isDrawing = false;
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  counter = x;
  isDrawing = true;
});
canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    x = e.offsetX;
    counter = x;
  }
  canvas.addEventListener('mouseup', e => {
    isDrawing = false;
  });
});
ctx.fillStyle = "black";

//increment is the music, and it needs isPlaying to be true to advance, to do anything

function increment(evt) {
  if(isPlaying) {
    counter = counter + .14; //granularity of time. (tempo baby)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(counter, 0, 1, canvas.height)
    //the low d ;P
    if (counter > 2) { 
      if (Math.floor(counter) % 4 == 0 && Math.random() > Math.random()*.8) {
        rootPlayerCount++;
        
        //if counter is evenly divisible by 4 AND some random operations, you may get a root note
        //skewedness of random notes because it's not pure random

        if (rootPlayerCount >= rootPlayers.length) {
          rootPlayerCount = 0;
        }
        rootPlayers[rootPlayerCount].buffer = samples.get(getRandomInt(4));
        rootPlayers[rootPlayerCount].start();    
        //pick a random low note of the four notes
      }
      if (Math.floor(counter) % 5 == 0 && Math.random() > Math.random()*.8) {
        melodyPlayerCount++;
        try{ //wrapping this in a try block because sometimes the buffer isn't loaded before a play event
          if (melodyPlayerCount >= melodyPlayers.length) {
            melodyPlayerCount = 0;
          }
          melodyPlayers[melodyPlayerCount].buffer = samples.get(getRandomInt(97) + 5); 
              //here's the offset from the low notes and 97 total files

          melodyPlayers[melodyPlayerCount].volume.value = -4;
          melodyPlayers[melodyPlayerCount].start();
        } catch(error){
          console.log("sorry");
        }    
      }
      if (Math.floor(counter) % 7 == 0 && Math.random() > Math.random()*.2) {
        melodyPlayerCount++;
        if (melodyPlayerCount >= melodyPlayers.length) {
          melodyPlayerCount = 0;
        }
        try{
          melodyPlayers[melodyPlayerCount].buffer = samples.get(getRandomInt(97));
          melodyPlayers[melodyPlayerCount].volume.value = -4;
          melodyPlayers[melodyPlayerCount].start();
        } catch(error){} 
      }
      if (counter > 100 && counter < 280) {
        if (Math.floor(counter) % 2 == 0 && Math.random() > Math.random()*.3 || Math.floor(counter) % 3 == 0 && Math.random() > Math.random()*.3) {
          leadPlayerCount++;
          if (leadPlayerCount >= leadPlayers.length) {
            leadPlayerCount = 0;
          }
          try{
            leadPlayers[leadPlayerCount].buffer = samples.get(getRandomInt(70) + 97);
            leadPlayers[leadPlayerCount].volume.value = -8;
            leadPlayers[leadPlayerCount].start();
          } catch(error){}
        }
      }
      if (counter >= 290) {
        Tone.Transport.stop();
        document.querySelector(".button").innerHTML = "play";
        isPlaying = false;
        counter = 0;
      }
    }
  }
  setTimeout(increment, (Math.random() * 60 + 70)); 
  //this defines a random impulse between 70 and 130 ms that defines the increment.
  //so the rhythm doesn't advance metronomically
}

increment();

function init() {
  if (!isPlaying) {
    isPlaying = true;
    document.querySelector(".button").innerHTML = "pause";
    Tone.start();
    Tone.Transport.start();
    filty.start();
    silentPlayer.start();
  }
  else {
    Tone.Transport.pause();
    document.querySelector(".button").innerHTML = "continue";
    isPlaying = false;
  }
}
function adjustCanvas() {
  if (window.innerWidth > 600) {
    //canvas.width = 290;
    //canvas.height = 28;
  }
  else {
    //canvas.width = 100;
  }
}

window.onresize = adjustCanvas;