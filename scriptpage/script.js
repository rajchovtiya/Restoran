$(function () {
    function gsapanimesn() {
        gsap.from(".conten_img h1,.conten_img p", {
            x: -700,
            duration: 1.5,
            delay: 0.16,
            opacity: 0

        })

        gsap.from(".conten_img button", {
            x: -500,
            duration: 1.5,
            delay: 0.14,
            opacity: 0

        })

    }
    gsapanimesn()
})

