<template>
    <div class="wrapper flex align-center justify-flex-end flex-2 mobile">
        <div class="menu-button body-regular link">
            <Ham
                :isOpen="isOpen"
                :toggle="toggleMenu"
                :menuTitle="menuTitle"
            />
        </div>
        <ul class="ul flex" id="mobile-menu">
            <li
                class="li flex"
                v-for="(item, key) in navlinks"
                :key="item.title+key"
            >
                <router-link class="link" :to="item.link" :exact="item.link=='/'">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getElement } from "@/scripts/css";

import navlinks from "./data";
import Ham from "./Ham.vue";

export default {
    name: "MobileMenu",
    data() {
        return { navlinks, isOpen: false, menuTitle: "Menu" };
    },
    methods: {
        toggleMenu() {
            const mobileMenu = getElement("mobile-menu");

            if (this.isOpen) {
                mobileMenu.style.height = "";
                this.menuTitle = "Menu";
            } else {
                const height = (window.innerHeight > mobileMenu.scrollHeight + 16)
                    ? mobileMenu.scrollHeight + 16 : window.innerHeight;

                mobileMenu.style.height = `${height}px`;
                this.menuTitle = "Close";
            }

            this.isOpen = !this.isOpen;
        },
    },
    components: { Ham },
    watch: {
        $route() {
            if (this.isOpen) {
                const mobileMenu = getElement("mobile-menu");
                this.isOpen = false;
                this.menuTitle = "Menu";
                mobileMenu.style.height = "";
            }
        },
    },
};
</script>
