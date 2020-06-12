
document.getElementById("button1").addEventListener("click", function(){

    box.style.width = "250px";
    box.style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function(){
    box.style.backgroundColor = "Blue";
});

document.getElementById("button3").addEventListener("click", function(){
    box.style.opacity = box.style.opacity - .25; 

});

document.getElementById("button4").addEventListener("click", function(){

    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "Orange";
    box.style.opacity = 1; 
});
