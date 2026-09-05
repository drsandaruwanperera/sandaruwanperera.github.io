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

const updateActiveNav = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

};

window.addEventListener("scroll", updateActiveNav);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const duration = 1500;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current = Math.floor(target * eased);

                counter.textContent =
                    target >= 1000
                        ? current.toLocaleString() + "+"
                        : current;

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target >= 1000
                            ? target.toLocaleString() + "+"
                            : target;

                }

            };

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.6
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================================
   FAQ
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");


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

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   HEADER SHADOW
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(30,30,100,.07)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const footerYear =
    document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Dr. Sandaruwan Perera. All Rights Reserved.`;

}
