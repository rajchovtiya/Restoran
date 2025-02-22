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
        gsap.from(".service_box", {
            opacity: 0,
            y: 200,
            duration: 1.2,
            // delay: 0.14,
            stagger: 0.3

        })

    }
    gsapanimesn()

    let i = 1
    let j = 1


    function covanutyers() {


        window.addEventListener("scroll", function () {
            let scrollPosition = window.scrollY;
            // let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollPosition > 800 && scrollPosition < 900) {
                let myInterval = setInterval(function () {
                    if (i > 15) {
                        clearInterval(myInterval);
                    } else {
                        coavunt()

                    }

                }, 650);

                let myIntervalpop = setInterval(function () {
                    if (j > 50) {
                        clearInterval(myIntervalpop);
                    } else {
                        pops()

                    }

                }, 200);


            }
        });

        let years = document.querySelector(".years h1")

        function coavunt() {
            if (i <= 15) {
                years.innerText = i;
            }
            i++;
        }

        let years_popular = document.querySelector(".years_popular h1")

        function pops() {
            if (j <= 50) {
                years_popular.innerText = j;
            }
            j++;
        }
    }
    covanutyers()

    let foodbox = document.querySelectorAll(".food-itembox")

    foodbox.forEach((e) => {
        e.addEventListener("click", () => {
            foodbox.forEach((em) => {
                em.setAttribute("class", "food-itembox ")
            })
            e.classList.add("bodercolore")
        })
    })
})
$(function () {

    $('.clients_slider_ditel').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
})
