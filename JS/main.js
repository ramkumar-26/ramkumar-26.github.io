//Show Menu

let showMenu = (toggleId,navId)=>{
    let toggle = document.getElementById(toggleId);
    let nav = document.getElementById(navId);

    if(toggle && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle','nav_menu');

//active and remove active

let navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n=> n.classList.remove('active'));

navLink.forEach(n=> n.addEventListener('click',linkAction));

function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'));
    this.classList.add('active');
    let navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

//dailog box
function send() {
    
    let name = document.getElementById("input-1").value;
    let email = document.getElementById("input-2").value;
    let msg = document.getElementById("input-3").value;
    if(name=="" || email=="" || msg==""){
        alertt ("Please Enter All The Fields!");
    }else{
        document.getElementById("input-1").value="";
        document.getElementById("input-2").value="";
        document.getElementById("input-3").value="";
        alert ("Thank You for Contacting! Message sent Successfully!");
    }
 }