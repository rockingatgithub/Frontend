<template>
    <div class="wrapper flex align-center justify-flex-start flex-2 desktop align-self-stretch
    link-wrapper">
        <div class="menu-container align-self-stretch">
            <ul class="ul flex">
                <li
                    class="li flex"
                    v-for="(item, key) in navlinks"
                    :key="item.title+key"
                >
                    <router-link class="link heading-regular" :to="item.link"
                    :exact="item.link=='/'">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navlinks from "./data";

export default {
    name: "DesktopMenu",
    data() {
        return { navlinks };
    },
};
</script>
