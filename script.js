/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {

        mainNav.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (mainNav.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                } else {

                    entry.target.classList.remove(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin:
                "0px 0px -60px 0px"
        }
    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   FAQ
===================================================== */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");

if (backTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        },
        { passive: true }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   HEADER SHADOW
===================================================== */

const header =
    document.getElementById("header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 30px rgba(30,30,100,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    },
    { passive: true }
);


/* =====================================================
   INTERNAL SMOOTH LINKS
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.offsetTop -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


/* =====================================================
   HERO PROFILE CARD PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const profileCard =
    document.querySelector(".profile-card");

if (heroVisual && profileCard) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x / rect.width - .5) * 8;

            const moveY =
                (y / rect.height - .5) * 8;

            profileCard.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "translate(0,0)";

        }
    );

}


/* =====================================================
   FOOTER YEAR
===================================================== */

const footerYear =
    document.getElementById("footerYear");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   INITIAL
===================================================== */

updateActiveNavigation();
