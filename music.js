var audio = document.getElementById("backgroundMusic");
var playButton = document.getElementById("sound-button");
//var animation = document.getElementById("audio-animation");
//let animation = null;
var audioButtonText = document.getElementById("audio-button-text");
var isPlaying = false;

var animation;
function playAnimation() {
  animation.play();
}
function stopAnimation() {
  animation.pause();
}
document.addEventListener("DOMContentLoaded", function () {
  var animationData = {
    container: document.getElementById("lottie-animation"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path:
      "https://uploads-ssl.webflow.com/641b4c18c85c2827797c0afc/648d75e40265c2684b7ac124_audio-animation.json"
  };

  animation = lottie.loadAnimation(animationData);
});

playButton.addEventListener("click", function () {
  const animationTarget = playButton.getAttribute("data-animation-target");
  //animation = lottie.find(animationTarget);
  if (isPlaying) {
    audio.pause();
    stopAnimation();
    //animation.stop();
    audioButtonText.textContent = "Sound on";
  } else {
    audio.play();
    playAnimation();
    //animation.play();
    audioButtonText.textContent = "Sound off";
  }

  isPlaying = !isPlaying;
});
