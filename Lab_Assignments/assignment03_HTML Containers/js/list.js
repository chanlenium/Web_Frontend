// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

function init(){
var fruitsList = document.getElementById("fruits");
var newOl = document.createElement("ol");
fruitsList.appendChild(newOl);
fruits.forEach(function(element){   
    let newLi = document.createElement("li");
    newOl.appendChild(newLi);
    newLi.innerHTML = element;
});


var directoryArray = document.getElementById("directArray");
var lv1Ul = document.createElement("ul");
directory.forEach(function(element){
    directoryArray.appendChild(lv1Ul);
    let lv1Li = document.createElement("li");
    lv1Ul.appendChild(lv1Li);
    lv1Li.innerHTML = element.name;

    if(element.type == "directory"){
        let lv2Ul = document.createElement("ul");
        lv1Li.appendChild(lv2Ul);

        element.files.forEach(function(value){
            let lv2Li = document.createElement("li");
            lv2Ul.appendChild(lv2Li);
            lv2Li.innerHTML = value.name;
        });
    }
});
}

window.onload = init;