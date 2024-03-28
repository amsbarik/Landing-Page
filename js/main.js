// go to scroll top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100){
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient (#00a652 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




// products qty +- js start

// 1st product
const plus_1 = document.querySelector(".cart-plus-1");
const minus_1 = document.querySelector(".cart-minus-1");
const num_1 = document.querySelector(".cart-num-1");

let n = 1;

plus_1.addEventListener("click", ()=>{
    if(n < 10){
        n++;
        num_1.value = n;
    console.log("x");
    }
})

minus_1.addEventListener("click", ()=>{
    if(n > 1){
        n--;
        //x = (x < 10)? "0" + x : x;
        num_1.value = n;
    }
    
})

// 2nd product
const plus_2 = document.querySelector(".cart-plus-2");
const minus_2 = document.querySelector(".cart-minus-2");
const num_2 = document.querySelector(".cart-num-2");

let m = 1;

plus_2.addEventListener("click", ()=>{
    if(m < 10){
        m++;
        num_2.value = m;
    
    }
})

minus_2.addEventListener("click", ()=>{
    if(m > 1){
        m--;
        //x = (x < 10)? "0" + x : x;
        num_2.value = m;
    }
    
})

// 3rd product
const plus_3 = document.querySelector(".cart-plus-3");
const minus_3 = document.querySelector(".cart-minus-3");
const num_3 = document.querySelector(".cart-num-3");

let x = 1;

plus_3.addEventListener("click", ()=>{
    if(x < 10){
        x++;
        num_3.value = x;
    
    }
})

minus_3.addEventListener("click", ()=>{
    if(x > 1){
        x--;
        //x = (x < 10)? "0" + x : x;
        num_3.value = x;
    }
    
})

// products qty +- js end