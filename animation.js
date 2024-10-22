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
      y: 200,
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
      y: 150,
      duration: 2,

      scrollTrigger: {
            trigger: "#ab-ani-txt",
            start: "top 60%"

      }
})
gsap.from(".skill-card", {
      opacity: 0,
      y: 50,
      duration: 2,
      stagger: 1.25,
      scrollTrigger: {
            trigger: ".skill-card",
            start: "top 60%"

      }
})


mm.add("(min-width: 768px)", () => {
      gsap.from("#mehefuj-hero", {
            scale: 5
      })
})