let header = document.querySelector(".header"); 
let aboutMeSection = document.querySelector(".aboutMeSection");
let sectionachievements = document.querySelector(".sectionachievements");
let future = document.querySelector(".future");
let project = document.querySelector(".project"); 
let contact = document.querySelector(".contact");

// This is the pages that need to be shown or hidden //

let home = document.querySelector(".home");
let aboutMe = document.querySelector(".aboutMe");
let skills = document.querySelector(".skills");
let futureaspirations = document.querySelector(".futureaspirations");
let myprojects = document.querySelector(".myprojects"); 
let contacting = document.querySelector(".contacting");

// This is the timeline in achievements and skills //
// nav bar!!!!!
home.addEventListener("click", function(){
    header.style.display = "block"; 
    aboutMeSection.style.display = "none"; 
    sectionachievements.style.display = "none"; 
    future.style.display = "none"; 
    project.style.display = "none"; 
    contact.style.display = "none";
    copyrightprojects.style.display ="none"; 
}); 
aboutMe.addEventListener("click", function(){
    header.style.display= "none";
    aboutMeSection.style.display ="block";
    sectionachievements.style.display = "none";
    future.style.display = "none";  
    project.style.display = "none"; 
    contact.style.display = "none";
    copyrightprojects.style.display ="none"; 
}); 
skills.addEventListener("click", function() {
    header.style.display= "none";
    aboutMeSection.style.display ="none";
    sectionachievements.style.display= "block";
    future.style.display = "none"; 
    project.style.display = "none";
    contact.style.display = "none";
    copyrightprojects.style.display ="none"; 
});
futureaspirations.addEventListener("click", function() {
    header.style.display= "none";
    aboutMeSection.style.display ="none";
    sectionachievements.style.display= "none";
    future.style.display ="block"; 
    project.style.display = "none";
    contact.style.display = "none";
    copyrightprojects.style.display ="none"; 
});
myprojects.addEventListener("click", function() {
    header.style.display= "none";
    aboutMeSection.style.display ="none";
    sectionachievements.style.display= "none";
    future.style.display ="none"; 
    project.style.display = "block";
    contact.style.display = "none";
    copyright.style.display = "none"; 
});
contacting.addEventListener("click", function() {
    header.style.display= "none";
    aboutMeSection.style.display ="none";
    sectionachievements.style.display= "none";
    future.style.display ="none"; 
    project.style.display = "none";
    contact.style.display = "block";
    copyrightprojects.style.display ="none";

});
// This is all the extra fun I have done in my achievements
let youthOfTheDayOne = document.querySelector(".youthOfTheDayOne");
let varsityBasketballManagerOne = document.querySelector(".varsityBasketballManagerOne"); 
let nationalHonorsSocietyOne = document.querySelector(".nationalHonorsSocietyOne"); 
let businessClubPresidentOne = document.querySelector(".businessClubPresidentOne"); 

let youthOfTheDayImg = document.querySelector(".youthOfTheDayImg");
let varsityBasketballManagerImg = document.querySelector(".varsityBasketballManagerImg");
let nationalHonorsSocietyImg = document.querySelector(".nationalHonorsSocietyImg");
let businessClubPresidentImg = document.querySelector(".businessClubPresidentImg");

youthOfTheDayImg.addEventListener("click", function(){
    youthOfTheDayOne.style.display = "block"
    varsityBasketballManagerOne.style.display = "none"
    nationalHonorsSocietyOne.style.display = "none"
    businessClubPresidentOne.style.display = "none"
    youthOfTheDayOne.setAttribute('id','animated');
    varsityBasketballManagerOne.setAttribute('id','');
    nationalHonorsSocietyOne.setAttribute('id','');
    businessClubPresidentOne.setAttribute('id','');
}); 
varsityBasketballManagerImg.addEventListener("click", function(){
    youthOfTheDayOne.style.display = "none"
    varsityBasketballManagerOne.style.display = "block"
    nationalHonorsSocietyOne.style.display = "none"
    businessClubPresidentOne.style.display = "none"
    youthOfTheDayOne.setAttribute('id','');
    varsityBasketballManagerOne.setAttribute('id','animated');
    nationalHonorsSocietyOne.setAttribute('id','');
    businessClubPresidentOne.setAttribute('id','');
}); 
nationalHonorsSocietyImg.addEventListener("click", function(){
    youthOfTheDayOne.style.display = "none"
    varsityBasketballManagerOne.style.display = "none"
    nationalHonorsSocietyOne.style.display = "block"
    businessClubPresidentOne.style.display = "none"
    youthOfTheDayOne.setAttribute('id','');
    varsityBasketballManagerOne.setAttribute('id','');
    nationalHonorsSocietyOne.setAttribute('id','animated');
    businessClubPresidentOne.setAttribute('id','');
}); 
businessClubPresidentImg.addEventListener("click", function(){
    youthOfTheDayOne.style.display = "none"
    varsityBasketballManagerOne.style.display = "none"
    nationalHonorsSocietyOne.style.display = "none"
    businessClubPresidentOne.style.display = "block"
    youthOfTheDayOne.setAttribute('id','');
    varsityBasketballManagerOne.setAttribute('id','');
    nationalHonorsSocietyOne.setAttribute('id','');
    businessClubPresidentOne.setAttribute('id','animated');
}); 
