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