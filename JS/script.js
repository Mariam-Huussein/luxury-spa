window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    setTimeout( ()=>{},1800);

    loader.classList.add("fade");
    setTimeout(()=> {loader.style.display="none"},400);

});


let btnToUp= document.querySelector('.btn-up');

window.addEventListener('scroll', function() {
    const nav = document.getElementsByTagName('nav')[0];
    if (window.scrollY >= 59) {
        nav.style.cssText = `
            background-color: rgb(253, 244, 227, 0.56);
            backdrop-filter: blur(8px);
            background-color: rgb(123 92 65 / 0.64);
        `;
    } else {
        nav.style.cssText = ``;
    }
    if (window.scrollY >56){
        btnToUp.style.cssText=`display: inline-block;`;
    }
    else if (window.scrollY <=56){
        btnToUp.style.cssText=``;
    }

});

btnToUp.addEventListener( 'click',function(){
    scroll(
        {
            top:0,
            behavior:"smooth"
        }
    )
});

function smoothScrollTo(id) {
    const target = document.querySelector(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function setSelect(cardValue){
    if(cardValue>6)
    {
        document.getElementById('label-serv').textContent="Packages";
    }
    else{
        document.getElementById('label-serv').textContent="Services";
    }
}

let element = document.querySelectorAll('.main-txt-footer');
element.forEach(ele =>{
    ele.nextElementSibling.style.marginLeft='20px';
});


document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name');
    const alertOverlay = document.getElementById('custom-alert-overlay');
    const alertMessage = document.getElementById('custom-alert-message');

    alertMessage.innerHTML = `<p>Thank you, ${name.value}!</p><p>Your booking was received.</p>`;
    alertOverlay.style.display = 'flex';

    document.querySelectorAll('input').forEach(element => {
        element.value='';
    });
    document.querySelector('select').value=''
    
    document.getElementById('custom-alert-close').addEventListener('click', function() {
        document.getElementById('custom-alert-overlay').style.display = 'none';
    });
});



let menu = document.querySelector(".nav-list");
let openBtn = document.getElementById("open-menu-btn");
let closeBtn = document.getElementById("close-menu-btn");
let openIcon = openBtn.querySelector("i");
let closeIcon = closeBtn.querySelector("i");

openBtn.addEventListener("click", () => {
menu.classList.add("active");

openBtn.classList.add("slide-out");
openIcon.classList.add("rotate");

setTimeout(() => {
    openBtn.style.display = "none";

    closeBtn.style.display = "block";
    closeBtn.classList.add("slide-in");
    closeIcon.classList.add("rotate");

    setTimeout(() => {
    openBtn.classList.remove("slide-out");
    openIcon.classList.remove("rotate");
    closeIcon.classList.remove("rotate");
    }, 500);
}, 500);
});

closeBtn.addEventListener("click", () => {
menu.classList.remove("active");

closeBtn.classList.add("slide-out");
closeIcon.classList.add("rotate");

setTimeout(() => {
    closeBtn.style.display = "none";

    openBtn.style.display = "block";
    openBtn.classList.add("slide-in");
    openIcon.classList.add("rotate");

    setTimeout(() => {
    closeBtn.classList.remove("slide-out");
    closeIcon.classList.remove("rotate");
    openIcon.classList.remove("rotate");
    }, 500);
}, 500);
});
