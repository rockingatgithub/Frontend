<template>
	<div class="container above-padding justify-center flex">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />
            <Intro />
            <hr class="hr" />
            <Services />
        </div>
	</div>
</template>

<style lang="scss">
@import "@/styles/views/industries";
</style>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { INDUSTRIES } from "@/scripts/constants/routes";
import Intro from "./Intro.vue";
import Services from "./Services.vue";

export default {
    name: "Industries",
    components: {
        Breadcrumb,
        Intro,
        Services,
    },

    data() {
        return {
            pathList: [
                {
                    link: INDUSTRIES,
                    title: "Industries",
                },
            ],
        };
    },

};
</script>
