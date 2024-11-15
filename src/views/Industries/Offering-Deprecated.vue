<template>
	<div class="container above-padding justify-center flex m-b-32 p-b-32">
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
            <slot v-else-if="!loading&&offering==''">
                <p class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32">
                    Details not found!
                </p>
            </slot>
            <slot v-else>
                <div class="container flex justify-center">
                    <div class="wrapper max">
                        <div class="wrapper">
                            <h3 class="heading-bold text-center m-b-16">{{offering.title}}</h3>
                            <p
                                class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32"
                                v-html="offering.description.intro"
                            >
                            </p>
                            <slot
                                v-for="(section, index) in offering.description.sections"
                            >
                                <hr class="hr" :key="'hr'+section.heading+index" />
                                <div :key="index+section.heading" class="m-b-32 p-r-16 p-l-16">
                                    <h4 class="heading-bold">
                                        {{ section.heading}}
                                    </h4>
                                    <ul class="ul arrow-light p-r-32 p-l-32">
                                        <li
                                            class="li body-regular"
                                            v-for="(item, key) in section.list"
                                            :key="section.heading+index+'list'+key"
                                        >
                                            {{item}}
                                        </li>
                                    </ul>
                                </div>
                            </slot>
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
import { LIST_OF_AVAILABLE_ROUTES, INDUSTRIES_ROUTE } from "./data/routes";

export default {
    name: "Offering",
    components: {
        Breadcrumb,
    },

    data() {
        return {
            pathList: [
                {
                    link: INDUSTRIES_ROUTE,
                    title: "Industry",
                },
            ],
            loading: true,
            offering: "",
        };
    },

    mounted() {
        this.initData();
    },

    methods: {
        async initData() {
            const { fullPath, params } = this.$route;

            if (params.id in LIST_OF_AVAILABLE_ROUTES) {
                const data = await dataLoader[params.id].data();
                this.setPathList(fullPath, data.default.title);
                this.offering = data.default;
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
