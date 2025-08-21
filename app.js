gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
const lineOneTl=gsap.timeline({
    scrollTrigger:{
        trigger:".line-one",
        start: "top",
        scrub: true,
        pin: true,
    }
})


lineOneTl.from(".line-one span",{y:"100vh",stagger:0.3})
    .to(".line-one",{backgroundColor: "yellow"})
    .from(".sun",{x:"100vw", duration:5})
    .to(".line-one span",{x:"100vw", delay: 2,duration: 3})
    .to(".sun",{x:"-100vw", duration: 3},"<")
    .to(".line-one",{backgroundColor:"white", duration: 3},"<")
    
const lineTwoTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-two",
        start: "top",
        scrub: true,
        pin: true
    }
})

lineTwoTl.from('.line-two span:first-child',{x:"-100vw", scale:10})
.from('.line-two span:last-child',{x:"100vw", scale:10}, "<")
.to('.line-two span:first-child', {y:-20})
.to('.line-two span:first-child', {y:0})
.to('.line-two span:last-child', {y:-20})
.to('.line-two span:last-child', {y:0})


const lineThreeTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.line-three',
        start:"top",
        scrub:true,
        pin: true
    }
})

lineThreeTl.from('.line-three span',{y:'100vw', stagger: 0.5})
.to('.line-three',{backgroundPositionX:0, duration:3})
.to('.line-three span',{color: "white"},"<")
.from('.moon', {x:"100vw"},"-=1")