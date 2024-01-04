var circle = document.querySelector("#circle");
var text_effects = document.querySelectorAll(".text-effect");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function(de){
    gsap.to(circle,{
        x: de.clientX - 13,
        y: de.clientY - 13,
    })
})

text_effects.forEach(text_effect=>{
    text_effect.addEventListener("mousemove",function(de){

        var dimension = text_effect.getBoundingClientRect();
    
        var xStart = dimension.x;
        var xEnd = dimension.x + dimension.width;
    
        var zeroOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, de.clientX);
    
        gsap.to(circle,{
            scale:5,
        })
        gsap.to(text_effect.children,{
            color:"#fff",
            duration:.4,
            y:"-5vw"
        })
        gsap.to(text_effect.children,{
            x: lerp(-50,50,zeroOne),
            duration:.4
        })
    
    })
    text_effect.addEventListener("mouseleave",function(){
        gsap.to(circle,{
            scale:1,
        })
        gsap.to(text_effect.children,{
            color:"#000",
            duration:.4,
            y:0
        })
        gsap.to(text_effect.children,{
            x: 0,
            duration:.4
        })
    })
})