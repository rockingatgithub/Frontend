<template>
	<div class="container above-padding justify-center flex">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />

            <slot v-if="loading==true">
                <div class="container flex justify-center">
                    <div class="wrapper max">
                        <div class="wrapper m-b-32">
                            <p class="body-regular">Loading...</p>
                        </div>
                    </div>
                </div>
            </slot>
            <slot v-else-if="!loading&&product==''">
                <p class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32">
                    Product not found!
                </p>
            </slot>
            <slot v-else>
                <div class="container flex justify-center">
                    <div class="wrapper max">
                        <div class="wrapper m-b-32">
                            <h2 class="heading-bold text-center m-b-16">{{product.title}}</h2>
                            <p
                                class="body-regular m-t-16 p-r-16 p-l-16"
                                v-html="product.description"
                            >
                            </p>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
	</div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import dataLoader from "./data/loader";
import { LIST_OF_AVAILABLE_ROUTES, PRODUCTS_ROUTE } from "./data/routes";

export default {
    name: "ProductPage",
    components: {
        Breadcrumb,
    },

    data() {
        return {
            pathList: [
                {
                    link: PRODUCTS_ROUTE,
                    title: "Products",
                },
            ],
            loading: true,
            product: "",
        };
    },

    mounted() {
        this.initData();
    },

    methods: {
        async initData() {
            const { fullPath, params } = this.$route;

            if (LIST_OF_AVAILABLE_ROUTES.indexOf(fullPath) !== -1) {
                const data = await dataLoader[params.id].data();
                this.setPathList(fullPath, data.default.title);
                this.product = data.default;
            }
            this.loading = false;
        },

        setPathList(fullPath, title) {
            this.pathList.push({
                link: fullPath,
                title,
            });
        },
    },

};
</script>
