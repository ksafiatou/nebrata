window.addEventListener("scroll",()=>{
    let navba = document.getElementById("nav");
    let topY = window.scrollY;
    if(topY>0){
        navba.classList.remove("bg-transparent");
        navba.classList.add("bg-light");
        navba.classList.add("h8")
    }
    else{
        navba.classList.remove("bg-light");
        navba.classList.add("bg-transparent");
        navba.classList.remove("h8");
        
    }
})
window.addEventListener("load",()=>{
    let pre=document.querySelector(".tx");
    pre.classList.add("presentation");
    let im=document.querySelector(".im");
    im.classList.add("ims");
})
window.addEventListener("scroll",()=>{
    let card=document.querySelectorAll(".card");
    let screnP=window.innerHeight;
    card.forEach(carte =>{
        let catP = carte.getBoundingClientRect().top;
        if(screnP>catP){
            carte.classList.add("cart");
        }
        else{
            carte.classList.remove("cart");
        }
    })
})
