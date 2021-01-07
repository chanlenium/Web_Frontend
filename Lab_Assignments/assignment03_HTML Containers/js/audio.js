// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

function init(){
    var audioTag = document.getElementById("audioTag");
    var newAudio = document.createElement("audio");
    newAudio.controls = audio.controls;
    newAudio.autoplay = true;
    audio.source.forEach(function(element){
        var newSource = document.createElement("source");
        newSource.src = element.src;
        newSource.type = element.type;
        newAudio.appendChild(newSource);
    });
    audioTag.appendChild(newAudio);
}
window.onload = init;

