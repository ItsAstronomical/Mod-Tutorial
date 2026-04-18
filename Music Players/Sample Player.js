// Music Player



  class Song {
    constructor(title, artist, coverLink, audioLink) {
      this.title = title;
      this.artist = artist;
      this.coverLink = coverLink;
      this.audioLink = audioLink;
    }
    getTitle() {
      return this.title;
    }
  
    getArtist() {
      return this.artist;
    }
  
    getCoverLink() {
      return this.coverLink;
    }
  
    getAudioLink() {
      return this.audioLink;
    }
  }
  
  class Playlist {
    constructor() {
      this.songs = [];
      this.currentSongIndex = 0;
    }
  
    addSong(song) {
      this.songs.push(song);
    }
  
    getCurrentSong() {
      return this.songs[this.currentSongIndex];
    }
  
    playNext() {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    }
  
    playPrevious() {
      this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    }
  }
  window.Playlist=Playlist
  window.Song=Song
  
  function changePlaylist(newPlaylist) {
    playlist = newPlaylist;
    playlist.currentSongIndex = 0;
    updateUI(playlist);
    const audio = document.getElementById("audio");
    audio.src = playlist.getCurrentSong().audioLink;
    audio.play();
  }
  window.changePlaylist=changePlaylist
  
  function updateUI(playlist) {
      const currentSong = playlist.getCurrentSong();
      var player = document.getElementById("player");
      player.querySelector("#cover").src = currentSong.getCoverLink();
      player.querySelector("#title").textContent = currentSong.getTitle();
      player.querySelector("#artist").textContent = currentSong.getArtist();
  }
  
  window.updateUI=updateUI
  
  function setupMusicPlayer() {
    playlist = new Playlist();
  
  
   
    const song1 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );

    const song2 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );

   const song3 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );
  
    const song4 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );
    
    const song5 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );  

    const song6 = new Song(
      "DARE",
      "Gorillaz",
      "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
      "https://audio.jukehost.co.uk/hCPMUdLNW5HfDjGgDD9dtuvEtSS7Sbc3"
    );


    playlist.addSong(song1);
    playlist.addSong(song2);
    playlist.addSong(song3);
    playlist.addSong(song4);
    playlist.addSong(song5);
    playlist.addSong(song6);
  
    const playerContainer = document.createElement("div");
    playerContainer.id = "player";
  
   const displayBox = document.createElement("div");
  displayBox.id = "display-box";
  
  const coverElement = document.createElement("img");
  coverElement.id = "cover";
  displayBox.appendChild(coverElement);
  
  const infoContainer = document.createElement("div");
  infoContainer.id = "info-container";
  // infoContainer.style.backgroundColor = "url('https://raw.githubusercontent.com/FlongydOlson/OlsonMods/refs/heads/main/Y./transparent.png')"; // If you're changing
  infoContainer.style.backgroundSize = "cover"; // Optional: adjust based on your needs
  infoContainer.style.color = "#000000"; // Set text color to white
  
  const songInfo = document.createElement("div");
  songInfo.id = "song-info";
  
  const titleElement = document.createElement("h3");
  titleElement.id = "title";
  titleElement.style.fontWeight = 'bold'; // Make it normal as per previous request
  titleElement.style.fontFamily = 'Bebas, sans-serif';
  songInfo.appendChild(titleElement);
  
  const artistElement = document.createElement("p");
  artistElement.id = "artist";
  artistElement.style.fontFamily = 'Bebas, sans-serif';
  artistElement.style.fontSize = '12px';
  songInfo.appendChild(artistElement);
  
  
  infoContainer.appendChild(songInfo);
  displayBox.appendChild(infoContainer);
  
  playerContainer.appendChild(displayBox);
  
  const controlsContainer = document.createElement("div");
  controlsContainer.id = "controls-container";
  
  const controls = document.createElement("div");
  controls.id = "controls";
  
  const prevButton = document.createElement("img");
  prevButton.id = "prevButton";
  prevButton.src = "https://itsastronomical.com/assets/1992Duke/music/backward.png";
  prevButton.alt = "Previous";
  controls.appendChild(prevButton);
  
  const playPauseButton = document.createElement("img");
  playPauseButton.id = "playPauseButton";
  playPauseButton.src = "https://itsastronomical.com/assets/1992Duke/music/pause.png"; // Set the default play image
  playPauseButton.alt = "Play/Pause";
  playPauseButton.style.width = '60%';
  playPauseButton.style.height = '60%';
  playPauseButton.style.marginTop = '9px';
  controls.appendChild(playPauseButton);
  
  const nextButton = document.createElement("img");
  nextButton.id = "nextButton";
  nextButton.src = "https://itsastronomical.com/assets/1992Duke/music/forward2.png";
  nextButton.alt = "Next";
  controls.appendChild(nextButton);
  
  controlsContainer.appendChild(controls);
  
  playPauseButton.addEventListener("click", function () {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      playPauseButton.src = "https://itsastronomical.com/assets/1992Duke/music/pause.png"; // Set the pause image
    } else {
      audio.pause();
      playPauseButton.src = "https://itsastronomical.com/assets/1992Duke/music/play.png"; // Set the play image
    }
  });
  
  nextButton.addEventListener("click", function () {
    playlist.playNext();
    updateUI(playlist);
    const audio = document.getElementById("audio");
    audio.src = playlist.getCurrentSong().audioLink;
    audio.play();
  });
  
  prevButton.addEventListener("click", function () {
    playlist.playPrevious();
    updateUI(playlist);
    const audio = document.getElementById("audio");
    audio.src = playlist.getCurrentSong().audioLink;
    audio.play();
  });
  
    const progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progress-bar-container";

   // Create the progress bar slider
    const progressBar = document.createElement("input");
    progressBar.type = "range"; // Change to range type for a slider
    progressBar.id = "progress-bar";
    progressBar.value = "0";
    progressBar.max = "100";
    progressBar.step = "0.1"; // Optional: sets the granularity of the slider

    progressBarContainer.appendChild(progressBar);
    controlsContainer.appendChild(progressBarContainer);
    playerContainer.appendChild(controlsContainer);
  
   const volumeContainer = document.createElement("div");
    volumeContainer.id = "volume-container";
  
  const volumeLabel = document.createElement("img");
  volumeLabel.src = "https://itsastronomical.com/assets/1992Duke/music/volume.png";
  volumeLabel.alt = "Volume";
  volumeLabel.style.width = '10%';
  volumeLabel.style.marginTop = '9px';
  volumeContainer.appendChild(volumeLabel);
  
    const volumeSliderContainer = document.createElement("div");
    volumeSliderContainer.classList.add("is-horizontal");
    volumeSliderContainer.style.marginLeft = "1%";
    volumeSliderContainer.style.height = "126px";
  
    const volumeSlider = document.createElement("input");
    volumeSlider.id = "volume-slider";
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 9;
    volumeSlider.step = 1;
    volumeSlider.value = 1; // Initial volume
  
    volumeSliderContainer.appendChild(volumeSlider);
  
    const volumeDisplay = document.createElement("span");
    volumeDisplay.id = "volume-display";
    volumeDisplay.style.fontWeight = 'bold'; 
    volumeDisplay.style.display = 'none';
    volumeDisplay.textContent = "1";
  
    volumeContainer.appendChild(volumeSliderContainer);
    volumeContainer.appendChild(volumeDisplay);
  
    playerContainer.appendChild(volumeContainer);
  
    gameWindow_player.insertAdjacentElement("afterend", playerContainer);
  
  
    function updateProgressBar() {
const audio = document.getElementById("audio");
const progress = (audio.currentTime / audio.duration) * 100;
progressBar.value = progress;
}
  
   
    progressBar.addEventListener("input", function () {
      const audio = document.getElementById("audio");
      const seekTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });
  
    const audio = document.createElement("audio");
    audio.id = "audio";
    audio.src = playlist.getCurrentSong().audioLink;
    audio.volume = 1/9;
  
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", function () {
      // Play the next song when the current song ends
      playlist.playNext();
      updateUI(playlist);
      audio.src = playlist.getCurrentSong().audioLink;
      audio.play();
    });
  
      let currentVolume = 1; // Initial volume
  
    volumeSlider.addEventListener("input", function () {
      currentVolume = parseInt(volumeSlider.value, 10);
      updateVolumeDisplay();
      updateAudioVolume();
    });
  
    function updateVolumeDisplay() {
      volumeDisplay.textContent = currentVolume;
    }
  
     function updateAudioVolume() {
      const audio = document.getElementById("audio");
      audio.volume = currentVolume / 9; // Set volume between 0 and 1
    }
  
    document.body.appendChild(audio);
    audio.play();
  
    // Update the UI when the page loads
    updateUI(playlist);
  }
  
  const music = document.createElement("style");
  music.textContent = `
  #player {
      border: 3px solid #000000; /* Add your desired border style */
      display: flex;
      flex-direction: row;
    height:60px;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png");
    }
  
    #display-box {
      display: flex;
      align-items: center;
      width: 50%;
    }
  
    #cover {
      width: 60px;
    height: 60px;
    }
  
    #info-container {
      display: flex;
      flex-direction: row;
      height:100px;
      width:380px;
      margin-top: 3px;
    }
  
    #song-info {
      width: 100%;
      padding: 5px;
    }

    #song-info h3 {
     font-family: Univers;
    }

    #song-info p {
     font-family: Univers;
     padding-top: -200px;
    }

    .title p, 
    .artist p, 
    .album p {
     font-family: Univers;
     padding-top: -220px;
    }
  
    #controls-container {
      display: flex;
      flex-direction: row;
      align-items: left;
      margin: 5px;
      width:100%;
  
    }
    .is-horizontal #volumeSlider {
    width: 150px;
    appearance: slider-horizontal;
  }
  
    #controls {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 80%;
    }
  
    #progress-bar-container {
      width: 200%;
    }
  
    #progress-bar {
      width: 60%;
      margin: auto;
      display: flex;
      margin-Top: 23px;
      height: 5px;
      color: #000000;
      background-color: #E3E3E3;
      border-radius: 3px;
      overflow: hidden;
    }

#progress-bar {
  -webkit-appearance: none;
  appearance: none;

  width: 80%;
  height: 12px;
  background: transparent;
  cursor: pointer;
}

/* Track */
#progress-bar::-webkit-slider-runnable-track {
  height: 4px;
  background: #000;
  border-radius: 999px;
}

#progress-bar::-moz-range-track {
  height: 4px;
  background: #000;
  border-radius: 999px;
}

/* Thumb (scrubber) */
#progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;

  width: 12px;
  height: 12px;

  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;

  margin-top: -4px;
}

#progress-bar::-moz-range-thumb {
  width: 12px;
  height: 12px;

  background: #fff;
  border: 2px solid #000;
  border-radius: 1%;
}
  

    #progress-bar::-webkit-progress-bar {
      background-color: #E3E3E3;
    }

    #progress-bar::-webkit-progress-value {
      background-color: #000000;
    }

    #progress-bar::-moz-progress-bar {
      background-color: #000000;
    }

    #progress-bar input {
      color: #000000;
    }

    #volume-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin: 5px;
      margin-Top: 10px;
      width:50%;
    }

    #volume-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 150px;
      height: 5px;
      margin-Top: 19px;
      background-color: #E3E3E3;
      border: 0px solid buttonborder;
      border-radius: 3px;
      display: flex;
      padding: 0;
      box-sizing: border-box;
      cursor: pointer;
    }

    #volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 13px;
      height: 13px;
      background: buttonface;
      background-color: #ffffff;
      border: 2px solid #000000;
      border-radius: 25%;
      cursor: pointer;
      box-sizing: border-box;
      margin-top: -2px;
    }

    #volume-slider::-moz-range-thumb {
      width: 13px;
      height: 13px;
      background: buttonface;
      background-color: #ffffff;
      border: 2px solid #000000;
      border-radius: 25%;
      cursor: pointer;
      box-sizing: border-box;
    }

    #menu_container {
        background-color: transparent;
    }

  .footer {
    border-color: #ffffff;
      }

  `;

  document.head.appendChild(music);

  const gameWindow_player = document.getElementById("game_window");
  setupMusicPlayer();
