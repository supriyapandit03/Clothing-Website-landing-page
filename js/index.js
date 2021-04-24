const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".humburger");
const closeBtn = document.querySelector(".close");

// getBoundingClientRect() Return the size of an element and its position relative to the viewport:
const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", ()=> {
    if(navLeft < 0){
        // Dynamic addind class to nav , navigation, body
        navigation.classList.add("show");
        nav.classList.add("show");
        document.body.classList.add("show");
    }
});

closeBtn.addEventListener("click", ()=> {
    if(navLeft < 0){
        // Dynamic addind class to nav , navigation, body
        navigation.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove("show");
    }
});


// Fixed Nav

const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;
// console.log(navHeight);

window.addEventListener('scroll', () =>{
    const scrollHeight =window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    }else{
        navBar.classList.remove("fix-nav");
    }
});


