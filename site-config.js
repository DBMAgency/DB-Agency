/* =========================================
   DIGITAL BOOST AGENCY
   CENTRAL CONTACT CONFIGURATION
========================================= */

const SITE_CONFIG = {

    businessName: "Digital Boost Marketing Agency",

    whatsapp: "923252010866",

    whatsappDisplay: "+92 325 2010866",

    email: "contect.digitalboost@gmail.com",

    facebook:
        "https://www.facebook.com/digitalboostagencyinfo",

    instagram:
        "https://www.instagram.com/dig.italboostagency/",

    linkedin: "",

    location: "Pakistan"

};


/* =========================================
   APPLY CONTACT DETAILS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* WhatsApp */

    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(function (element) {

            element.href =
                "https://wa.me/" +
                SITE_CONFIG.whatsapp;

        });


    /* Email */

    document
        .querySelectorAll("[data-email]")
        .forEach(function (element) {

            element.href =
                "mailto:" +
                SITE_CONFIG.email;

            if (element.hasAttribute("data-email-text")) {
                element.textContent =
                    SITE_CONFIG.email;
            }

        });


    /* Facebook */

    document
        .querySelectorAll("[data-facebook]")
        .forEach(function (element) {

            element.href =
                SITE_CONFIG.facebook;

        });


    /* Instagram */

    document
        .querySelectorAll("[data-instagram]")
        .forEach(function (element) {

            element.href =
                SITE_CONFIG.instagram;

        });


    /* LinkedIn */

    document
        .querySelectorAll("[data-linkedin]")
        .forEach(function (element) {

            if (SITE_CONFIG.linkedin) {

                element.href =
                    SITE_CONFIG.linkedin;

            } else {

                element.style.display = "none";

            }

        });


    /* WhatsApp Display Number */

    document
        .querySelectorAll("[data-whatsapp-text]")
        .forEach(function (element) {

            element.textContent =
                SITE_CONFIG.whatsappDisplay;

        });


    /* Business Name */

    document
        .querySelectorAll("[data-business-name]")
        .forEach(function (element) {

            element.textContent =
                SITE_CONFIG.businessName;

        });

});
