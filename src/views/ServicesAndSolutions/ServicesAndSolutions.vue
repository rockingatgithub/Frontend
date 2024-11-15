<template>
	<div class="container above-padding justify-center flex">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />
            <Solutions />
            <hr class="hr" />
            <Services />
        </div>
	</div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { SERVICES } from "@/scripts/constants/routes";
import Solutions from "./Solutions.vue";
import Services from "./Services.vue";

export default {
    name: "ServicesAndSolutions",
    components: {
        Breadcrumb,
        Solutions,
        Services,
    },

    data() {
        return {
            pathList: [
                {
                    link: SERVICES,
                    title: "Services And Solutions",
                },
            ],
        };
    },

};
</script>
