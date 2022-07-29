// document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.cross').style.display ='inline';
    }
})
var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer","Footballer"],
    typeSpeed: 150,
    backSpeed: 40,
    loop: true
});