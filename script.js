// Get a reference to the video-background element
const videoBackground = document.getElementById("video-background");

// Create the YouTube player
const player = new YT.Player("video-background", {
  videoId: "msnYBMdaB08?t=4", // Replace with the actual video ID
  playerVars: {
    autoplay: 0,
    loop: 1,
    mute: 1,
    controls: 0,
    showinfo: 0,
    modestbranding: 1,
    playsinline: 1
  },
  events: {
    onReady: (event) => {
      event.target.playVideo();
}
}
});

