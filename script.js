let home_section = document.querySelector(".main-content1 .home");

let about_section = document.querySelector(".aboutMe");

let about_section2 = document.querySelector(".second-conatainer");


let service_section = document.querySelector('.service-container')

let portfolio_section = document.querySelector('.portfolio-container')

let contact_section = document.querySelector('.contact-container')

let service_Icon = document.querySelector('.aside .service_section')

let portfolio_icon = document.querySelector('.aside .portofolio')

let home_icon = document.querySelector(".aside .home");

let about_icon = document.querySelector(".aside .about");

let contact_icon = document.querySelector(".aside .contact");


contact_icon.addEventListener('click', ()=>{
  showContact();
})

portfolio_icon.addEventListener('click', ()=>{
  showPortfolio();
})

about_icon.addEventListener("click", () => {
  showAboutSection();
});

home_icon.addEventListener("click", () => {
//   console.log("Home btn Clicked");
  hideAboutSection();
});

service_Icon.addEventListener('click', ()=>
{   
     ShowServiceSection();
    })
    
function ShowServiceSection() {
    service_section.style.display = 'flex'
    hideAllForServices();
}

function showContact() {
  contact_section.style.display =' flex';
    hideAllforContact()
}

function showPortfolio() {
  portfolio_section.style.display =' flex';
    hideAllforPortfolio()
}

function hideAllforContact() {
  about_section.style.display = "none";
  about_section2.style.display = "none";
  service_section.style.display = 'none';
  home_section.style.display = 'none';
  portfolio_section.style.display = 'none';
}
function hideAllforPortfolio() {
  about_section.style.display = "none";
  about_section2.style.display = "none";
  service_section.style.display = 'none';
  home_section.style.display = 'none';
  contact_section.style.display = 'none';
}

function hideAllForServices() {
    home_section.style.display = "none";
    about_section.classList.remove("animate__fadeOut"); 
  about_section2.classList.remove("animate__fadeOut"); 
    about_section.classList.add("animate__fadeInRight", "animate__animated"); 
     about_section2.classList.add("animate__fadeInRight", "animate__animated");
    about_section.style.display = "none";
    about_section2.style.display = "none";
    portfolio_section.style.display = "none";
    contact_section.style.display = 'none';
}

function showAboutSection() {
  home_section.style.display = "none";
  portfolio_section.style.display = "none";
  service_section.style.display = "none";
  contact_section.style.display = 'none';
  about_section.classList.remove("animate__fadeOut"); 
about_section2.classList.remove("animate__fadeOut"); // Ensure the fadeOut class is removed
  about_section.classList.add("animate__fadeInRight", "animate__animated"); 
   about_section2.classList.add("animate__fadeInRight", "animate__animated");
  about_section.style.display = "flex";
  about_section2.style.display = "flex";
}

function hideAboutSection() {
  about_section.classList.add("animate__fadeOut");  
  service_section.classList.add("animate__fadeOut"); // Add the fadeOut class

  setTimeout(() => {
    about_section.style.display = "none";
    about_section2.style.display = "none";
    service_section.style.display = 'none';
    portfolio_section.style.display = 'none';
    contact_section.style.display = 'none';

    home_section.style.display = "flex";

    about_section.classList.remove("animate__fadeInRight", "animate__animated");   
    about_section2.classList.remove("animate__fadeInRight", "animate__animated"); // Remove the fadeInRight class
  }, 1000);
}
