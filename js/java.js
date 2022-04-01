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
    let pre=document.getElementById("present");
    pre.classList.add("present");
    document.querySelector(".mg").classList.add("tg");
})

    window.addEventListener("scroll",()=>{
        let card=document.querySelectorAll(".card");
        let screnP=window.innerHeight/1.8;
        card.forEach(carte =>{
            let catP = carte.getBoundingClientRect().top;
            if(screnP>catP){
                carte.classList.add("carte");
            }
            else{
                carte.classList.remove("carte");
            }
        })
    })
