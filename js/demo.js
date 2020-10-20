var modalImg = document.getElementById("img01"); 
const flip_front = document.querySelectorAll(".flip-card-front");
const flipCardContainer1 = document.querySelector(".flip-card-container1");
const flipCardContainer2 = document.querySelector(".flip-card-container2");
var c1_front = document.getElementById("c1_front");
var c2_front = document.getElementById("c2_front");
var key = 2;
        
$("#myBtn3").click(function(){
    if(key == 5){
        $("#myModal3").modal({backdrop: "static"});
        modalImg.src = c1_front.src;
        $("#restartBtn").click(function(){
            key = 2;
            c1_front.src = "puppies/d1.jpg";
            c2_front.src = "puppies/d2.jpg";
        });
    }
    else{
        key++;
        var fImage = "d" + key + ".jpg";
        c2_front.src = "puppies/" + fImage;
    }
});

$("#myBtn2").click(function(){
    if(key == 5){
        $("#myModal3").modal({backdrop: "static"});
        modalImg.src = c2_front.src;
        $("#restartBtn").click(function(){
            key = 2;
            c1_front.src = "puppies/d1.jpg";
            c2_front.src = "puppies/d2.jpg";
        });
    }
    else{
        key++;
        var fImage = "d" + key + ".jpg";
        c1_front.src = "puppies/" + fImage;
    } 
});

        