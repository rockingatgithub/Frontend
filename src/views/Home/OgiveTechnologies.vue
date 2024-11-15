<template>
<div class="container flex justify-center section p-t-b">
    <div class="wrapper xl section m-t-b">
        <div class="container justify-center flex flex-wrap section p-l-r revealer">
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
import { ogiveTechnologiesCardData } from "./data";

export default {
    name: "OgiveTechnologies",
    data() {
        return {
            cardData: ogiveTechnologiesCardData,
        };
    },
};
</script>
