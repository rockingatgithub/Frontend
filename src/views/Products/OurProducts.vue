<template>
	<div class="container flex justify-center" style="overflow-x: hidden;">
        <LandingBanner
            style="top: 2rem !important"
            message="Click here to checkout our COVID 19 products."
            :url="COVID_19_ROUTE"
            :show="true"
            type="landing"
        />
        <div class="wrapper max home">
            <div class="wrapper m-b-32">
                <h2 class="heading-bold text-center p-b-32 m-b-32">Our Products</h2>
                <div class="wrapper">
                    <div
                        class="wrapper card-container"
                        style="height: auto !important"
                    >
                        <div
                            class="card-row"
                            v-for="(items, index) in cardRows"
                            :key="'card-row-'+index"
                        >
                            <router-link
                                :class="'card ' + (
                                    item.cardClass !== undefined ? item.cardClass : ''
                                )"
                                v-for="(item, index) in items"
                                :key="item.title+index"
                                :to="item.link"
                            >
                            <div class="card-transition-image-container">
                                <img class="card-transition-image" :src="item.hoverImage" />
                            </div>
                                <div class="icon">
                                    <img :src="item.icon" :alt="item.title" />
                                </div>
                                <h4 class="heading-bold white-text">
                                    {{ item.title }}
                                </h4>

                                <p class="body-regular white-text">
                                    {{item.description}}
                                </p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import LandingBanner from "@/components/banner/LandingBanner.vue";
import { COVID_19_ROUTE } from "@/views/Products/data/routes";

import { ogiveProductsCardData } from "@/views/Home/data";

export default {
    name: "Intro",
    data() {
        return {
            cardData: ogiveProductsCardData,
            COVID_19_ROUTE,
        };
    },

    components: { LandingBanner },
    computed: {
        cardRows() {
            const colSize = 4;
            const card = [];
            let i;
            for (i = 0; i < this.cardData.length; i += colSize) {
                card.push(this.cardData.slice(i, i + colSize));
            }

            return card;
        },
    },

};
</script>
