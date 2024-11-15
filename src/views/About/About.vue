<template>
	<div class="container above-padding">
		<Breadcrumb :pathList="pathList" />
		<WhoWeAre />
		<hr class="hr" />
        <Leadership />
		<hr class="hr" />
        <GlobalEvent />
		<hr class="hr" />

        <div class="container flex justify-center m-b-32">
            <div class="wrapper xl">
                <h3 class="heading-bold text-center">
                    Membership
                </h3>
                <div
                    style="display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;"
                >

                    <img
                        class="swing-animation-hover"
                        style="margin: 1rem; width: 6rem;"
                        v-for="(item, idx) in images"
                        :key="'AImage-' + idx"
                        :src="item"
                    />
                </div>
            </div>
        </div>
		<!-- <Extra /> -->
	</div>
</template>

<style lang="scss">
@import "@/styles/views/about";
</style>

<script>
import A1 from "@/assets/images/png/about/a-1.png";
import A2 from "@/assets/images/png/about/a-2.png";
import A3 from "@/assets/images/png/about/a-3.gif";
import A4 from "@/assets/images/png/about/a-4.png";
import A5 from "@/assets/images/png/about/a-5.png";
import A6 from "@/assets/images/png/about/a-6.png";
import A7 from "@/assets/images/png/about/a-7.png";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { ABOUT_US } from "@/scripts/constants/routes";
import WhoWeAre from "./WhoWeAre.vue";
import Leadership from "./Leadership.vue";
import GlobalEvent from "./GlobalEvent.vue";

export default {
    name: "About",
    components: {
        Breadcrumb,
        WhoWeAre,
        Leadership,
        GlobalEvent,
    },

    data() {
        return {
            pathList: [
                {
                    link: ABOUT_US,
                    title: "About Us",
                },
            ],
            images: [
                A1,
                A2,
                A3,
                A4,
                A5,
                A6,
                A7,
            ],
        };
    },

};
</script>
