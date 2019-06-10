var videos = ["media/video.mp4"];

videoIdx = 0; 
videoPlayer = document.getElementById("video");

function loadNext()
{
    videoIdx = videoIdx % videos.length;
    var videoSrc = videos[videoIdx];
    videoIdx += 1;

    if( videoSrc != "" )
    {       
        videoPlayer.src = videoSrc;
        videoPlayer.load();
    }
}

function startPlay()
{   
    videoPlayer.play();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    loadNext();
});


// code from https://blog.sverrirs.com/2016/10/html5-video-playback-xbox.html, accessed 06/09/2019 