<template>
    <header class="navbar container flex justify-center" id="header" style="padding: 0 1rem;">
        <div class="container flex-1 flex">
            <div class="wrapper flex-1 flex align-center justify-flex-end">
                <div class="logo-container" id="logo-container">
                <router-link to="/">
                    <img class="logo" :src="OgiveLogo" />
                </router-link>
                </div>
                <DesktopMenu />
                <MobileMenu />
            </div>
        </div>
    </header>
</template>

<script>

import OgiveLogo from "@/assets/images/png/logo.png";
import { getElement, cssPrefixes } from "@/scripts/css";
import { getBaseFontSize } from "@/scripts/screen";
// import { HOME } from "@/scripts/constants/routes";
import navlinks from "./data";

import DesktopMenu from "./DesktopMenu.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
    name: "Navbar",
    data() {
        return { navlinks, OgiveLogo, showGradient: true };
    },
    mounted() {
        // this.setLinearGradient();
        // this.handleScroll();
        // window.addEventListener("resize", this.setLinearGradient);
        // window.addEventListener("scroll", this.handleScroll);
    },

    beforeDestroy() {
        // window.removeEventListener("resize", this.setLinearGradient);
        // window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        setLinearGradient() {
            if (window.scrollY < ((10 / 16) * getBaseFontSize())
                && window.innerWidth > 1024
                && this.showGradient) {
                const logoContainer = getElement("logo-container");
                const { right } = logoContainer.getBoundingClientRect();
                let linearGradient = `background-image: linear-gradient(0deg, transparent ${right}px, rgba(0, 0, 0, 0.4) 0%);`;
                let i;

                for (i = 0; i < cssPrefixes.length; i += 1) {
                    linearGradient += `background-image: ${cssPrefixes[i]}linear-gradient(0deg, transparent ${right}px, rgba(0, 0, 0, 0.4) 0%);`;
                }

                const header = getElement("header");
                header.setAttribute("style", linearGradient);
            } else {
                const header = getElement("header");
                header.setAttribute("style", "");
                header.classList.add("scroll");
            }
        },

        handleScroll() {
            const header = getElement("header");
            if (window.innerWidth < 1024) {
                header.setAttribute("style", "");
                header.classList.add("scroll");
            } else if (window.scrollY > ((10 / 16) * getBaseFontSize())) {
                header.setAttribute("style", "");
                header.classList.add("scroll");
            } else {
                header.classList.remove("scroll");
                this.setLinearGradient();
            }
        },
    },

    // watch: {
    //     // $route(to) {
    //     // window.scrollTo(0, 0);
    //     // const header = getElement("header");
    //     // if (to.path === HOME) {
    //     //     this.showGradient = true;
    //     //     header.classList.remove("scroll");
    //     //     this.setLinearGradient();
    //     // } else {
    //     //     this.showGradient = false;
    //     //     header.setAttribute("style", "");
    //     //     header.classList.add("scroll");
    //     // }
    //     // },
    // },

    components: {
        DesktopMenu,
        MobileMenu,
    },
};
</script>
