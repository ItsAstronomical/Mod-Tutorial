// Music Player made for 1932: Happy Days Are Here Again!
// Credit Thatchmaster for this :)

//30's Player

// Initialise custom music

RecReading = true;

// Select the node that will be observed for mutations
const windowsAdvisorTargetNode = document.getElementById("game_window");

// Options for the observer (which mutations to observe)
const windowsAdvisorConfig = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    visitWindow = document.getElementsByClassName("overlay_window")[0];

    if (visitWindow == null || visitWindow.classList.contains("done")) {
        return;
    }
    visitWindow.classList.add("done");
    visitWindow.classList.add("window");
    let titleBar = visitWindow.querySelector("h3");
    titleBar.classList.add("title-bar");
    titleBar.classList.add("title-bar-text");
    titleBar.style.paddingLeft = "3px";
};

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
window.Playlist = Playlist;
window.Song = Song;

function changePlaylist(newPlaylist) {
    playlist = newPlaylist;
    playlist.currentSongIndex = 0;
    updateUI(playlist);
    const audio = document.getElementById("audio");
    audio.src = playlist.getCurrentSong().audioLink;
    audio.play();
}
window.changePlaylist = changePlaylist;

function updateUI(playlist) {
    const currentSong = playlist.getCurrentSong();
    var player = document.getElementById("player");
    player.querySelector("#cover").src = currentSong.getCoverLink();
    player.querySelector("#title").textContent = currentSong.getTitle();
    player.querySelector("#artist").textContent = currentSong.getArtist();
}

window.updateUI = updateUI;

function setupMusicPlayer() {
    playlist = new Playlist();

    const song1 = new Song(
        "Brother Can You Spare A Dime",
        "Bing Crosby",
        "https://itsastronomical.com/assets/1932/imgur/EUcbUas.png",
        "https://audio.jukehost.co.uk/jRXseBAMcWRFKHt1tJ51tqbyJ3sqhKts"
    );
    const song2 = new Song(
        "The Clouds Will Soon Roll By",
        "Ambrose & His Orchestra",
        "https://i.ytimg.com/vi/KgqZJKGHhhQ/sddefault.jpg",
        "https://audio.jukehost.co.uk/Hf6VPaMzNzxlALHDBcuuc5uEtkLNOMDw"
    );
    const song3 = new Song(
        "Remember My Forgotten Man",
        "George Hall",
        "https://i.ytimg.com/vi/bCmHXAz5PFA/sddefault.jpg",
        "https://audio.jukehost.co.uk/MypY1myDgc0mOe9q3V3uQMPbXtyklfuw"
    );
    const song4 = new Song(
        "It Don't Mean A Thing",
        "Ivie Anderson",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqHE-NltdCBjN3dZG2LwmY2NPvZ6cOHgxEg&s",
        "https://audio.jukehost.co.uk/k2tL8nq9UfcAraBVSJ48LjxMotEIXHiO"
    );
    const song5 = new Song(
        "A Lovely Way To Spend An Evening",
        "The Ink Spots",
        "https://cdn-images.dzcdn.net/images/cover/9628c446092888da5119d4c5fa00af6f/0x1900-000000-80-0-0.jpg",
        "https://audio.jukehost.co.uk/QV0iCDjjkWrDAWoYRVDtJ2dgVoSmFcuG"
    );

    playlist.addSong(song1);
    playlist.addSong(song2);
    playlist.addSong(song3);
    playlist.addSong(song4);
    playlist.addSong(song5);



    const playerContainer = document.createElement("div");
    playerContainer.id = "player";

    const displayBox = document.createElement("div");
    displayBox.id = "display-box";

    const coverElement = document.createElement("img");
    coverElement.id = "cover";
    displayBox.appendChild(coverElement);

    const infoContainer = document.createElement("div");
    infoContainer.id = "info-container";
    infoContainer.style.backgroundImage = "url('https://itsastronomical.com/assets/1932/imgur/HTUJApX.png')";
    infoContainer.style.backgroundSize = "cover";
    infoContainer.style.color = "#6e441b";

    const songInfo = document.createElement("div");
    songInfo.id = "song-info";

    const titleElement = document.createElement("h3");
    titleElement.id = "title";
    titleElement.style.fontWeight = 'normal';
    songInfo.appendChild(titleElement);

    const artistElement = document.createElement("p");
    artistElement.id = "artist";
    songInfo.appendChild(artistElement);

    infoContainer.appendChild(songInfo);
    displayBox.appendChild(infoContainer);

    playerContainer.appendChild(displayBox);

    const controlsContainer = document.createElement("div");
    controlsContainer.id = "controls-container";

    const controls = document.createElement("div");
    controls.id = "controls";

    const volumeDownButton = document.createElement("img");
    volumeDownButton.id = "volumeDownButton";
    volumeDownButton.src = "https://itsastronomical.com/assets/1932/imgur/VQfvYev.png";
    volumeDownButton.alt = "Volume Down";
    controls.appendChild(volumeDownButton);

    const prevButton = document.createElement("img");
    prevButton.id = "prevButton";
    prevButton.src = "https://itsastronomical.com/assets/1932/imgur/LAojana.png";
    prevButton.alt = "Previous";
    controls.appendChild(prevButton);

    const playPauseButton = document.createElement("img");
    playPauseButton.id = "playPauseButton";
    playPauseButton.src = "https://itsastronomical.com/assets/1932/imgur/JdndnqR.png";
    playPauseButton.alt = "Play/Pause";
    controls.appendChild(playPauseButton);

    const nextButton = document.createElement("img");
    nextButton.id = "nextButton";
    nextButton.src = "https://itsastronomical.com/assets/1932/imgur/VpjQN97.png";
    nextButton.alt = "Next";
    controls.appendChild(nextButton);

    const volumeUpButton = document.createElement("img");
    volumeUpButton.id = "volumeUpButton";
    volumeUpButton.src = "https://itsastronomical.com/assets/1932/imgur/AWjSTLv.png";
    volumeUpButton.alt = "Volume Up";
    controls.appendChild(volumeUpButton);

    controlsContainer.appendChild(controls);

    playPauseButton.addEventListener("click", function () {
        const audio = document.getElementById("audio");
        if (audio.paused) {
            audio.play();
            playPauseButton.src = "https://itsastronomical.com/assets/1932/imgur/JdndnqR.png";
        } else {
            audio.pause();
            playPauseButton.src = "https://itsastronomical.com/assets/1932/imgur/nzG7asd.png";
        }
    });

    nextButton.addEventListener("click", function () {
        playlist.playNext();
        updateUI(playlist);
        const audio = document.getElementById("audio");
        audio.src = playlist.getCurrentSong().audioLink;
        audio.play();
        rotateButton(nextButton, "right");
    });

    prevButton.addEventListener("click", function () {
        playlist.playPrevious();
        updateUI(playlist);
        const audio = document.getElementById("audio");
        audio.src = playlist.getCurrentSong().audioLink;
        audio.play();
        rotateButton(prevButton, "left");
    });

    let currentVolume = 6; // Medium initial volume 

    volumeUpButton.addEventListener("click", function () {
        const audio = document.getElementById("audio");
        if (currentVolume < 20) { // Increased max volume range
            currentVolume++;
            audio.volume = currentVolume / 20; // Adjusted for new range
            rotateButton(volumeUpButton, "left");
        }
    });
    
    volumeDownButton.addEventListener("click", function () {
        const audio = document.getElementById("audio");
        if (currentVolume > 0) {
            currentVolume--;
            audio.volume = currentVolume / 20; // Adjusted for new range
            rotateButton(volumeDownButton, "right");
        }
    });

    function rotateButton(button, direction) {
        const rotationAngle = direction === "left" ? "rotate(-15deg)" : "rotate(15deg)";
        button.style.transform = rotationAngle;
        setTimeout(() => {
            button.style.transform = "rotate(0deg)";
        }, 200);
    }

    const progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progress-bar-container";

    const progressBar = document.createElement("progress");
    progressBar.type = "range";
    progressBar.id = "progress-bar";
    progressBar.value = "0";
    progressBar.max = "100";

    progressBarContainer.appendChild(progressBar);
    controlsContainer.appendChild(progressBarContainer);
    playerContainer.appendChild(controlsContainer);

    const lipImage = document.createElement("div");
    lipImage.id = "lip-overlay";
    playerContainer.appendChild(lipImage); // Add the overlay as a child of #player
    
    

    gameWindow_player.insertAdjacentElement("afterend", playerContainer);

    function updateProgressBar() {
        const audio = document.getElementById("audio");
        const progress = (audio.currentTime / audio.duration) * 100;
        try {
            progressBar.value = progress;
        } catch {}
    }

    progressBar.addEventListener("input", function () {
        const audio = document.getElementById("audio");
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    const audio = document.createElement("audio");
    audio.id = "audio";
    audio.src = playlist.getCurrentSong().audioLink;

    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", function () {
        playlist.playNext();
        updateUI(playlist);
        audio.src = playlist.getCurrentSong().audioLink;
        audio.play();
    });

    document.body.appendChild(audio);
    audio.play();

    updateUI(playlist);
}

const style = document.createElement("style");
style.textContent = `
#player {
    position: relative; /* Ensures child absolute elements are positioned relative to this */
    border: 3px solid #5e2f0d;
    display: flex;
    flex-direction: row;
    height: 191px;
    background-image: url("https://itsastronomical.com/assets/1932/imgur/XvHX0fc.png");
    transition: transform 0.2s ease;
}

#lip-overlay {
    position: absolute;
    top: 0; /* Align at the top of the player */
    left: 0;
    width: 100%;
    height: 100%; /* Same height as the #player */
    z-index: 2; /* Brings it to the foreground */
    pointer-events: none; /* Prevent interference with user interactions */
    background-image: url('https://itsastronomical.com/assets/1932/imgur/4vt4JNH.png');
    background-size: cover; /* Ensures the image fills the container */
}


#display-box {
    display: flex;
    align-items: center;
    width: 50%;
}

#cover {
    width: 176px;
    height: 176px;
}

#info-container {
    display: flex;
    flex-direction: row;
    height: 178px;
    width: 127px;
    margin-top: 3px;
    margin-left: 5px;
}

#song-info {
    width: 100%;
    padding: 5px;
}

#controls-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 100%;
    padding-top: 15px;
}

#controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
}

#progress-bar-container {
    width: 100%;
}

#progress-bar {
    width: 80%;
    margin: auto;
    display: flex;
    margin-top: 20px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;
}

#progress-bar::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 0.5);
}

#progress-bar::-webkit-progress-value {
    background-color: rgba(255, 255, 255, 0.5);
}

#progress-bar::-moz-progress-bar {
    background-color: rgba(255, 255, 255, 0.5);
}



`;

document.head.appendChild(style);

const gameWindow_player = document.getElementById("game_window");
setupMusicPlayer();
