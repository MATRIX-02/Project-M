// import "bundle.js"

var cursor = document.querySelector("#cust-cursor");
var icons = document.querySelectorAll('.icon');
var nav = document.querySelector("#menutoggle");
var circles = document.querySelector("#circles");
var sticky = document.querySelector(".iconparent");

// For navigation
var navlink = document.querySelectorAll(".nav-link");
const lerp = (x, y, a) => x * (1 - a) + y * a;

// For sticky cursor




navlink.forEach(frame => {
    frame.addEventListener("mousemove", function(dets){

        var dims = frame.getBoundingClientRect();
        
        var xstart = dims.x;
        var xend = dims.x + dims.width;
    
        var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    
        
        
        gsap.to(cursor, {
            scale: 8
        })
    
        gsap.to(frame.children, {
            
            duration: .4,
            y: "-4.5rem"
        })
    
        gsap.to(frame.children, {
            x: lerp(-50, 50, zeroone),
            duration: .3
        })
    
    })
    
    frame.addEventListener("mouseleave", function(dets){
        gsap.to(cursor, {
            scale: 1
        })
    
        gsap.to(frame.children, {
            color: "#000",
            duration: .4,
            y : 0
        })
    
        gsap.to(frame.children, {
            x: 0,
            duration: .3
        })
    })
})

// cursor.setStick(element);

// For hamburger
icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
      nav.classList.toggle('active');
      document.body.classList.toggle('bgcolor');
    });
  });

  circles.addEventListener("mouseover", function(){
    circles.style.transform = "rotate(180deg)";
  });
  circles.addEventListener("mouseout", function(){
    circles.style.transform = "rotate(-180deg)";
  });

  

window.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})

