// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};


function init(){
    var videoTag = document.getElementById("videoTag");
    var newVideo = document.createElement("video");
    newVideo.controls = video.controls;
    newVideo.width = video.width;
    newVideo.height = video.height;
    newVideo.autoplay = true;

    video.source.forEach(function(element){
        var newSource = document.createElement("source");
        newSource.src = element.src;
        newSource.type = element.type;
        newVideo.appendChild(newSource);
    });
    videoTag.appendChild(newVideo);
}
window.onload = init;