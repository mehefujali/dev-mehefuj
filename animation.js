gsap.from("#mehefuj-hero", {

      x: 100,
      duration: 2,
      opacity: 0
})
gsap.from(".hero-texts", {
      opacity: 0,
      x: -20,
      duration: 2,
      stagger: .4
})
gsap.from("#ab-ani-img", {
      opacity: 0,
      x: -200,
      duration: 2,
      stagger: .4,
      scrollTrigger: {
            trigger: "#ab-ani-img",
            // markers: true,
            start: "top 60%"

      }
})
gsap.from("#ab-ani-txt", {
      opacity: 0,
      x: 150,
      duration: 2,

      scrollTrigger: {
            trigger: "#ab-ani-txt",
            start: "top 60%"

      }
})
gsap.from(".skill-card", {
      opacity: 0,
      x: 150,
      duration: 2,
      stagger: .4,
      scrollTrigger: {
            trigger: ".skill-card",
            start: "top 60%"

      }
})


