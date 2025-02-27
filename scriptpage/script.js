
let food_arr = [
    arr_one = [
        [
            img = "img/menu-1.jpg",
            name = "Chicken Burger",
            price = "$115",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-2.jpg",
            name = "Chicken Burger",
            price = "$150",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-4.jpg",
            name = "Chicken Burger",
            price = "$90",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-3.jpg",
            name = "Chicken Burger",
            price = "$200",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-5.jpg",
            name = "Chicken Burger",
            price = "$300",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-8.jpg",
            name = "Chicken Burger",
            price = "$432",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-7.jpg",
            name = "Chicken Burger",
            price = "$120",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-6.jpg",
            name = "Chicken Burger",
            price = "$901",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ]
    ],
    arr_one = [
        [
            img = "img/menu-8.jpg",
            name = "Chicken Burger",
            price = "$152",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-7.jpg",
            name = "Chicken Burger",
            price = "$99",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-6.jpg",
            name = "Chicken Burger",
            price = "$212",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-5.jpg",
            name = "Chicken Burger",
            price = "$123",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-4.jpg",
            name = "Chicken Burger",
            price = "$999",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-3.jpg",
            name = "Chicken Burger",
            price = "$765",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-2.jpg",
            name = "Chicken Burger",
            price = "$567",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-1.jpg",
            name = "Chicken Burger",
            price = "$456",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ]
    ],
    arr_one = [
        [
            img = "img/menu-7.jpg",
            name = "Chicken Burger",
            price = "$215",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-5.jpg",
            name = "Chicken Burger",
            price = "$185",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-8.jpg",
            name = "Chicken Burger",
            price = "$117",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-6.jpg",
            name = "Chicken Burger",
            price = "$915",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-3.jpg",
            name = "Chicken Burger",
            price = "$415",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-4.jpg",
            name = "Chicken Burger",
            price = "$615",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-1.jpg",
            name = "Chicken Burger",
            price = "$715",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ],
        [
            img = "img/menu-2.jpg",
            name = "Chicken Burger",
            price = "$315",
            food_conten = "Ipsum ipsum clita erat amet dolor justo diam"

        ]
    ]
]
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
        // autoplay: true,
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
// -- food menu item
$(function () {
    let n = 0;
    let food_contenrbox = document.querySelector(".food_contenrbox")
    function foodmenu() {
        food_contenrbox.innerText = ""
        food_arr[n].forEach((e) => {
            let foditemsbox = document.createElement("div")
            let foodimg = document.createElement("div")
            let img = document.createElement("img")
            let food_ditelbox = document.createElement("div")
            let food_name = document.createElement("div")
            let h2 = document.createElement("h2")
            let h1 = document.createElement("h1")
            let food_money = document.createElement("div")
            let i = document.createElement("i")

            foditemsbox.classList.add("foditemsbox")
            foodimg.classList.add("foodimg")
            img.src = e[0]
            food_ditelbox.classList.add("food_ditelbox")
            food_name.classList.add("food_name")
            h2.innerText = e[1]
            h1.innerText = e[2]
            food_money.classList.add("food_money")
            i.innerText = e[3]



            food_contenrbox.appendChild(foditemsbox)

            foditemsbox.appendChild(foodimg)
            foodimg.appendChild(img)
            foditemsbox.appendChild(food_ditelbox)
            food_ditelbox.appendChild(food_name)
            food_name.appendChild(h2)
            food_name.appendChild(h1)
            food_ditelbox.appendChild(food_money)
            food_money.appendChild(i)

        })

    }
    foodmenu()
    let food_itembox = document.querySelectorAll(".food-itembox")
    food_itembox.forEach((e) => {
        e.addEventListener("click", () => {
            let number_n = Number(e.getAttribute("id"))
            n = number_n
            foodmenu()
        })
    })
})

