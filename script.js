
let menu = document.getElementById('menu');
let left = document.getElementById('left');
let wr = document.getElementById('wrapper');

menu.addEventListener("click", function(){
    if(left.style.width == "7%"){
        left.style.transition = 'all 0.5s ease-in-out';
        left.style.width = "40%";
        wr.style.display = 'block';
    }else{
        left.style.transition = 'all 0.5s ease-in-out';
        left.style.width = '7%';
        wr.style.display = 'none';
    }

});


const texts = "I am a programmer .";
const element = document.querySelector('span.content');
let letter = '';
let index = 0;
console.log(element);

(function type(){
    letter = texts.slice(0, ++index);
    element.textContent = letter;
    if(letter.length === texts.length){
        index = 0;
    }
    setTimeout(type, 400);
})();

function svg2(){
    let right = document.querySelector('div.right');
    let svg = document.getElementById('svg2');
    let info = document.querySelectorAll('.right .info .con .index');
    let home = document.querySelector('.right .info .title');

    svg.addEventListener("click", function(){
        if(right.offsetWidth == 90){
            home.style.display = "none";
            right.style.width = "190px"
            info.forEach(element => {
                element.style.display = "block";
            });
        }else if(right.offsetWidth == 190){
            info.forEach(element => {
                element.style.display = "none";
            });
            right.style.width = "90px";
            home.style.display = "block";
        }
    });
}
svg2();

function locate(){
    let links = document.querySelectorAll('.thelinks');
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", foo);
    }
    
}
locate();

function foo(e){
    e.preventDefault();
    let str = e.target.getAttribute('data-select');
    document.getElementById('mytitle').textContent = e.target.textContent;
    document.querySelector(str).scrollIntoView({
        behavior: "smooth"
      });
    
}

window.onscroll = function(){
    let el = document.getElementById('mytitle');
    if(Math.floor(window.scrollY) >= 316 && Math.floor(window.scrollY) < 528){
        el.textContent = "Who am I?";
    }else if(Math.floor(window.scrollY) >= 528 && Math.floor(window.scrollY) < 739){
        el.textContent = "Personal Information";
    }
    else if(Math.floor(window.scrollY) >= 739 && Math.floor(window.scrollY) < 1056){
        el.textContent = "Obtained Diplomas";
    }else if(Math.floor(window.scrollY) >= 1056 && Math.floor(window.scrollY) < 1584){
        el.textContent = "General Skills";
    }else if(Math.floor(window.scrollY) >= 1584 && Math.floor(window.scrollY) < 3660){
        el.textContent = "Professional Experience";
    }else if(Math.floor(window.scrollY) >= 3660){
        el.textContent = "Personal Projects";
    }
}

function navbarSmall(){
    let btnleft = document.getElementById('sideleft');
    let btnright = document.getElementById('sideright');

    let right = document.querySelector('div.right');
    let info = document.querySelectorAll('.right .info .con .index');
    let home = document.querySelector('.right .info .title');
    let svg = document.getElementById('svg2');

    btnleft.addEventListener("click", function(){
        menu.style.display = 'none';
        if(left.style.width == '0px'){
            console.log("mamama");
            left.style.transition = 'all 0.5s ease-in-out';
            btnleft.style.marginLeft = "50%";
            btnleft.style.zIndex = "100";
            left.style.width = "60%";
            wr.style.display = 'block';
        }else{
            btnleft.style.marginLeft = "0";
            btnleft.style.zIndex = "100";
            left.style.transition = 'all 0.5s ease-in-out';
            left.style.width = '0';
            wr.style.display = 'none';
        }
    });
    btnright.addEventListener("click", function(){
        if(right.offsetWidth == 0){
            svg.style.display = "none";
            home.style.display = "none";
            btnright.style.marginRight = "40%";
            btnright.style.zIndex = "100";
            right.style.width = "190px"
            info.forEach(element => {
                element.style.display = "block";
            });
        }else if(right.offsetWidth == 190){
            info.forEach(element => {
                element.style.display = "none";
            });
            btnright.style.marginRight = "0";
            btnright.style.zIndex = "100";
            right.style.width = 0;
            home.style.display = "none";
        }
    });
}
navbarSmall();