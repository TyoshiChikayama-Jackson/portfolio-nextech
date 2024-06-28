let header = document.querySelector(".header"); 
let aboutMe = document.querySelector(".aboutMe");
let achievement=document.querySelector(".achievement");
let future = document.querySelector(".future");
let project = document.querySelector(".project"); 
// This is the pages that need to be shown or hidden //
let aboutMeSection = document.querySelector(".aboutMeSection");
let home = document.querySelector(".home")

// This is the timeline in achievements and skills //
let groupstexttimelineoneone = document.querySelector(".groupstexttimelineoneone")
let groupstexttimelinetwotwo = document.querySelector(" .groupstecttimelinetwotwo"); 
let groupstexttimelinethreethree = document.querySelector(" .groupstexttimelinethreethree"); 
let groupstexttimelinefourfour = document.querySelector(" .groupstexttimelinefourfour"); 


let groupstexttimelineone = document.querySelector(".groupstexttimelineone"); 
let groupstexttimelinetwo = document.querySelector(".groupstexttimelinetwo"); 
let awardtext = document.querySelector(".awardtext")
let awardtexttwo = document.querySelector(".awardtexttwo")

//document.getElementById('first').addEventListener("click", function(){
// }); 

// document.getElementById('second').addEventListener("click", function(){
//     header.style.display= "none"; 
//      
// }); 
// aboutMeSection.addEventListener("click", function(){
//     header.style.display ="none"; 
//     aboutMeSection.style.display ="block"; 
    
// });

home.addEventListener("click", function(){
    header.style.display = "block"; 
    aboutMeSection.style.display = "none"; 
}); 


aboutMe.addEventListener("click", function(){
    header.style.display= "none";
    aboutMeSection.style.display ="block";
}); 




groupstexttimelinetwotwo.addEventListener("click", function(){
    groupstexttimelineone.style.display ="none"; 
    awardtext.style.disply ="none"; 
    groupstexttimelinetwo.style.display = "inline-block";
    awardtexttwo.style.display = "inline-block"; 
});


let groupstext = document.querySelector(".groupstext");
