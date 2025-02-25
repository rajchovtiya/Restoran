// --- gsap
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
            delay: 0.14,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".service_contenr",
                scroller: "body",
                // markers: true,
                start: "top 64%",

            }
        })
        gsap.from(".restoran_img img", {
            opacity: 0,
            duration: 1.4,
            delay: 0.17,
            stagger: 0.4,
            scale: 0,
            scrollTrigger: {
                trigger: ".about_conten",
                scroller: "body",
                // markers: true,
                start: "top 64%",

            }

        })
        gsap.from(".food_items,.food_contenrbox,.hedig_food,.hedig_twofood", {
            y: 150,
            opacity: 0,
            duration: 1.4,
            delay: 0.12,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".foodmenu",
                scroller: "body",
                // markers: true,
                start: "top 79%",

            }


        })
        gsap.from(".book_table,.book_table img,.booking_from", {
            y: 150,
            opacity: 0,
            duration: 1.4,
            delay: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".book_table",
                scroller: "body",
                // markers: true,
                start: "top 77%",

            }

        })
        gsap.from(".team_members h2,.team_members h1,.mainchefs", {
            opacity: 0,
            y: 200,
            duration: 1.2,
            delay: 0.14,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".team_members",
                scroller: "body",
                // markers: true,
                start: "top 61%",

            }
        })
        gsap.from(".hederabout h1", {
            opacity: 0,
            y: -70,
            duration: 1.2,
            scale: 0,
        })
        gsap.from(".contact_page h6,.contact_page h5,.google_map,.contact_from", {
            y: 150,
            opacity: 0,
            duration: 1.4,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".contact_page",
                scroller: "body",
                // markers: true,
                start: "top 77%",

            }

        })
        gsap.from(".restoran_img img", {
            opacity: 0,
            duration: 1.4,
            delay: 0.17,
            stagger: 0.4,
            scale: 0

        })

    }
    gsapanimesn()

})
// ---nav bar scroll cod
$(function () {
    function navscroll() {

        let nav = document.querySelector(".navbar")
        let nav_linktext = document.querySelectorAll(".nav-linktext")
        let dropdown_itemlink = document.querySelectorAll(".dropdown-itemlink")

        window.addEventListener("scroll", function () {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 55) {
                nav.style.backgroundColor = "#0f172b"
                nav.style.position = "fixed";
            }
            else if (scrollPosition < 55) {
                nav.style.backgroundColor = "transparent"
                nav.style.position = "absolute";

            }

        })

        nav_linktext.forEach((e) => {

            e.addEventListener("click", () => {
                nav_linktext.forEach((em) => {
                    em.setAttribute("class", "nav-linktext")
                })
                e.classList.add("nav-link_click")
            })
        })

        dropdown_itemlink.forEach((e) => {
            e.addEventListener("mousemove", () => {
                dropdown_itemlink.forEach((em) => {
                    em.style.backgroundColor = "transparent"
                    em.style.color = "black"
                })
                e.style.backgroundColor = "#FEA116"
                e.style.color = "white"
            })
        })
    }
    navscroll()
})
// -- covant
$(function () {
    let i = 1
    let j = 1


    function covanutyers() {


        window.addEventListener("scroll", function () {
            // let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
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

    let foodbox = document.querySelectorAll(".food-itembox")
    foodbox.forEach((e) => {
        e.addEventListener("click", () => {
            foodbox.forEach((em) => {
                em.setAttribute("class", "food-itembox ")
            })
            e.classList.add("bodercolore")
        })
    })

    gsap.from(".resctoran_experience", {
        scrollTrigger: {
            trigger: ".about_conten",
            scroller: "body",
            // markers: true,
            start: "top 30%",
            onEnter: () => covanutyers()

        }

    })


})
// --slider
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
                    centerPadding: '10px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });
})
// --google map
$(function () {

    var map = L.map('map').setView([22.3039, 70.8022], 10); // Example: Rajkot, India

    // Add OpenStreetMap Tile Layer (Google Maps alternative)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add Marker
    var marker = L.marker([22.3039, 70.8022]).addTo(map)
        .bindPopup("This is Rajkot, India.")
        .openPopup();

})


