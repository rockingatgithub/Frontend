<template>
	<div class="container above-padding justify-center flex">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />
            <OurProducts />
        </div>
	</div>
</template>

<style lang="scss">
@import "@/styles/views/home";
</style>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { PRODUCTS } from "@/scripts/constants/routes";
import OurProducts from "./OurProducts.vue";

export default {
    name: "Products",
    components: {
        Breadcrumb,
        OurProducts,
    },

    data() {
        return {
            pathList: [
                {
                    link: PRODUCTS,
                    title: "Products",
                },
            ],
        };
    },

};
</script>
