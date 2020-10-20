var modalImg = document.getElementById("img01"); 
const flip_front = document.querySelectorAll(".flip-card-front");
const flipCardContainer1 = document.querySelector(".flip-card-container1");
const flipCardContainer2 = document.querySelector(".flip-card-container2");
var c1_front = document.getElementById("c1_front");
var c1_back = document.getElementById("c1_back");
var c2_front = document.getElementById("c2_front");
var c2_back = document.getElementById("c2_back");
var key = 2;
var isFliped1 = false;
var isFliped2 = false;
        
$("#myBtn3").click(function(){
    if(key == 15){
        var fImage = key + ".1" + ".jpg";
        var bImage = key + ".2" + ".jpg";
        $("#myModal3").modal({backdrop: "static"});
        // modalImg.src = "cards/Cards(updated)/" + fImage;
        modalImg.src = c1_front.src;
        $("#restartBtn").click(function(){
            key = 2;
            c1_front.src = "cards/Cards(updated)/1.1.jpg"; 
            c1_back.src = "cards/Cards(updated)/1.2.jpg";
            c2_front.src = "cards/Cards(updated)/2.1.jpg";
            c2_back.src = "cards/Cards(updated)/2.2.jpg";
            if (isFliped1){
                flipCardContainer1.classList.toggle("flip");
                isFliped1 = false;
            }
            else if (isFliped2){
                flipCardContainer2.classList.toggle("flip");
                isFliped2 = false;
            }
        });
    }
    else{
        key++;
        var fImage = key + ".1" + ".jpg";
        var bImage = key + ".2" + ".jpg";
        c2_front.src = "cards/Cards(updated)/" + fImage;
        c2_back.src = "cards/Cards(updated)/" + bImage;
    }

});

$("#myBtn2").click(function(){
    if(key == 17){
        var fImage = key + ".1" + ".jpg";
        var bImage = key + ".2" + ".jpg";
        $("#myModal3").modal({backdrop: "static"});
        modalImg.src = c2_front.src;
        $("#restartBtn").click(function(){
            key = 2;
            c1_front.src = "cards/Cards(updated)/1.1.jpg"; 
            c1_back.src = "cards/Cards(updated)/1.2.jpg";
            c2_front.src = "cards/Cards(updated)/2.1.jpg";
            c2_back.src = "cards/Cards(updated)/2.2.jpg";
            if (isFliped1){
                flipCardContainer1.classList.toggle("flip");
                isFliped1 = false;
            }
            else if (isFliped2){
                flipCardContainer2.classList.toggle("flip");
                isFliped2 = false;
            }
        });
    }
    
    else{
        key++;    
        var fImage = key + ".1" + ".jpg";
        var bImage = key + ".2" + ".jpg";
        c1_front.src = "cards/Cards(updated)/" + fImage;
        c1_back.src = "cards/Cards(updated)/" + bImage;
        
    }

});

        
flipCardContainer1.addEventListener("click", function(){
    if (isFliped1){
        flipCardContainer1.classList.toggle("flip");
        isFliped1 = false;
    }
    else{
        flipCardContainer1.classList.toggle("flip");
        isFliped1 = true;
    }
});

flipCardContainer2.addEventListener("click", function(){
    if (isFliped2){
        flipCardContainer2.classList.toggle("flip");
        isFliped2 = false;
    }
    else{
        flipCardContainer2.classList.toggle("flip");
        isFliped2 = true;
    }
});
                