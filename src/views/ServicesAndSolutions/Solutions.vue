<template>
<div class="container flex justify-center">
    <div class="wrapper xl">
        <h2 class="heading-bold text-center p-b-32 m-b-32">
            Our Solutions
        </h2>
        <div class="wrapper xl justify-center flex flex-wrap">
            <div
                class="card-sm hover-animation"
                v-for="(item, key) in cardData"
                :key="item.title+key"
            >
                <router-link
                    :to="item.link"
                    class="link body-bold white-text"
                >
                    {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ogiveTechnologiesCardData } from "@/views/Home/data";

export default {
    name: "Solutions",
    data() {
        return {
            cardData: ogiveTechnologiesCardData,
        };
    },
};
</script>
