var num = 100
//----------------FRONT-PAGE----------------------

// flag = 0

// document.querySelector("#menu-btn").addEventListener("click",function(){
//     document.querySelector("#menu-btn").innerHTML = `<i class="ri-close-fill"></i>`

//     document.querySelector("#menu").style.zIndex = 99
//     if(flag === 0){
//         document.querySelector("#menu").style.top = "0%"
//         flag = 1 
//     }
//     else{
//         document.querySelector("#menu-btn").innerHTML = `<i class="ri-menu-line"></i>`
//         document.querySelector("#menu").style.top = "-100%"
//         flag = 0
//     }
// })



setInterval(() => {
    if(0 <= num && num <= 100){
        document.querySelector("#frontpage #anime h1").textContent = `${100 - num}%`
        
        if(num === 100){
            gsap.to("#frontpage #anime h1",{
                display:"block",
                top:`80%`,
                duration:2,
            })
        }
        
        else if(num === 75){
            gsap.to("#frontpage #anime h1",{
                top:`50%`,
                duration:2,
            })
        }
        
       else if(num === 50){
            gsap.to("#frontpage #anime h1",{
                top:`30%`,
                duration:2,
            })
        }

        else if(num === 25){
            gsap.to("#frontpage #anime h1",{
                top:`15%`,
                duration:2,
            })
        }   
        
        else if(num === 0){ 
            document.querySelector("#frontpage #anime h1").textContent = `100%`
            gsap.to("#frontpage #anime h1",{
                top:`-40%`,
                opacity:0,
                duration:2,
            })
        }
        num-=25

    }
    else{
        document.querySelector("#frontpage").style.display = "none"
        document.querySelector("#website").style.display = "flex"
        document.querySelector("#part7").style.display = "flex"


    }
    
},1000);    


//---------------NAV SCROLL ANIMATION---------------
gsap.from("#part1 #nav #left #logo #h1",{
    width:"45%",
    scrollTrigger:{
        trigger:"#part1 #nav",
        scroller:"body",
        start:"top 0%",
        end:"top -10%",  
        scrub:3
    }
})
gsap.from("#part1 #nav #left #logo #h1 h1",{
    duration:2,
    scrollTrigger:{
        trigger:"#part1 #nav",
        scroller:"body",
        start:"top 0%",
        end:"top -10%",  
        scrub:3
        }
})
//---------PAGE COLOUR CHANGE--------------
gsap.to("#website",{
    backgroundColor:"orangered",
    scrollTrigger:{
        trigger:"#website",
        scroller:"body",
        start:"top -100%",
        end:"top 50%",
        scrub:3,
        markers:true,

    }
})



gsap.to("#website",{
        backgroundColor:"rgba(218, 214, 211, 0.819)",
        scrollTrigger:{
        trigger:"#website",
        scroller:"body",
        start:"top -240%",
        end:"top 10%",
        scrub:3

    }
})










// gsap.to("#website",{
//     backgroundColor:"orangered",
//     repeat:-1,
//     scrollTrigger:{
//         trigger:"#part4",
//         scroller:"body",
//         end:"top 10%",
//         start:"top 15%",
//         scrub:true,
//         markers:true,
//     }
// })