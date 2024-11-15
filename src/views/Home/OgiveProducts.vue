<template>
<div class="container flex justify-center section p-t-b">
    <div class="wrapper max">
        <div
            class="wrapper card-container"
            id="project-card-container"
            :data-open="cardContainer"
        >
            <div
                class="card-row"
                v-for="(items, index) in cardRows"
                :key="'card-row-'+index"
            >
                <router-link
                    :class="'card ' + (item.cardClass !== undefined ? item.cardClass : '')"
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

        <div class="flex justify-center section m-t-16" v-if="cardData.length > 8">
            <button
                class="button primary-text ghost uppercase hover"
                @click="this.toggleCardContainer"
            >
                {{ button }}
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { getElement } from "@/scripts/css";
import { ogiveProductsCardData } from "./data";

export default {
    name: "OgiveTechnologies",
    data() {
        return {
            cardData: ogiveProductsCardData,
            button: "View all",
            cardContainer: "close",
        };
    },

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

    methods: {
        toggleCardContainer() {
            const container = getElement("project-card-container");
            if (this.cardContainer === "close") {
                this.cardContainer = "open";
                this.button = "Close";
                container.style.height = `${container.scrollHeight}px`;
            } else {
                container.removeAttribute("style");
                this.cardContainer = "close";
                this.button = "View All";
            }
        },
    },
};
</script>
