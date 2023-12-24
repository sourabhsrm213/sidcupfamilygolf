var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+25+ "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.backgroundColor="#9511E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trgger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -2%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#quote0", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote0",
        scroller: "body",
        start: "top 55%",
        end: "top45%",
        scrub: 4
    }
})
gsap.from("#quote", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote",
        scroller: "body",
        start: "55%",
        end: "45%",
        scrub: 4
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 3,
    stagger:"0.1",
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
})

