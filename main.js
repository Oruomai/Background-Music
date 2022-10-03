var audio = document.querySelector("audio");
audio.volume = 0.05;

if (audio)
{
  window.addEventListener("keydown", function (event)
  {
    var key = event.which;
    if (key === 32) //spacebar
    {
      audio.paused ? audio.play() : audio.pause();
    }
  });
}