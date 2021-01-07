// Data for the "HTML Images" Page

var images = [
    {caption: "Red Slate Mountain", alt: "Mountain", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"},
    {caption: "St. Petersburg River", alt: "River", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"},
    {caption: "Lybian Desert", alt: "Desert", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"},
    {caption: "Azerbaijan Forest", alt: "Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"},
    {caption: "Indonesian Jungle", alt: "Jungle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"}
];

function init(){
var imag = document.getElementById("imageJS");
images.forEach(function(image){
    let newA = document.createElement('a');
    newA.href = image.url;

    let newImg = document.createElement('img');
    newImg.src = image.url;
    newImg.alt = image.alt;

    newA.appendChild(newImg);
    imag.appendChild(newA);
    
    let newP = document.createElement('p');
    newP.innerHTML = image.caption;
    imag.appendChild(newP);
});
}

window.onload = init;
