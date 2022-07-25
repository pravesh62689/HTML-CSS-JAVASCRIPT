var audio =new Audio("audio/01. Ye Tune Kya Kiya.mp3");
var main_play_button = document.querySelector(".play_button");
var progress_bar=document.querySelector(".range");

main_play_button.addEventListener('click',()=>{
    if (audio.paused || audio.currentTime<=0) {
        audio.play();
        main_play_button.classList.add("fa-pause");
        main_play_button.classList.remove("fa-play");
        document.querySelector(".Gif").style.opacity=1;
    }
    else if (audio.play) {
        audio.pause();
        main_play_button.classList.add("fa-play");
        main_play_button.classList.remove("fa-pause");
        document.querySelector(".Gif").style.opacity=0;
    }
});

audio.addEventListener('timeupdate',()=>{
    console.log("Update");
    // value of the progress bar in % (here 100000 is the no of percentage divided in)
    var progress=parseInt((audio.currentTime/audio.duration)*100000);
    progress_bar.value=progress;
})

progress_bar.addEventListener('change',()=>{
    audio.currentTime=progress_bar.value*audio.duration/100000;
})