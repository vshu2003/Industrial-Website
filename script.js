
function firstpageanim() {
    var tl = gsap.timeline();

   tl.from("#nav",
   {
     y:'-10',  opacity:0,ease:Expo.easeInOut,duration:1.2
   })

    .to(".boundingelem",
        {
            y: 0, ease: Expo.easeInOut, duration: 1.5 , stagger:.2
        })
    
    .from('#herofooter',
    {
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1, ease:Expo.easeInOut

    })
}

firstpageanim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var difft = 0;

    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"),
            {
                opacity: 0,
                ease: Power3,
                duration:0.5,
            });
    });

    elem.addEventListener("mousemove",function(dets){
     var diff = dets.clientY - elem.getBoundingClientRect().top;
     difft = dets.clientX - rotate;
     rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),
        {
            opacity: 1,
            ease: Power3,
            top:diff,
            left:dets.clientX,
            rotate : gsap.utils.clamp(-20,20,difft*.8)
        });
    });


});

var timer;

function circleChaptaKaro()
{
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timer);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
       xprev = dets.clientX; 
       yprev = dets.clientY; 

       circleMouseFollower(xscale,yscale);

       timer = setTimeout(() => {
           document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
       }, 100);

    });
}

circleChaptaKaro();


function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

circleMouseFollower();



// function App ()
// {

//     let Time = new Date().toLocaleTimeString();
//     const [currTime, newTime] = useState(Time);

//     const Change_in_Time = () => {
//         Time = new Date().toLocaleTimeString();
//         newTime(Time);
//     };
//     setInterval(Change_in_Time, 1000);

//     return (<>
//         <h1 className="header">{currTime}</h1>
//     </>);

// };


// App();

