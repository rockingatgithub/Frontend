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
            <slot v-else-if="!loading&&services==''">
                <p class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32">
                    Details not found!
                </p>
            </slot>

            <slot v-else-if="!loading&&services.type=='slide-animation'">
                <EmbeddedSystem :data="services"/>
            </slot>

            <slot v-else>
                <div class="container flex justify-center">
                    <div class="wrapper max">
                        <div class="wrapper">
                            <h2 class="heading-bold text-center m-b-16">{{services.title}}</h2>
                            <div
                                v-if="services.chart == true"
                                style="display: flex; flex-direction: column;
                                align-items: center"
                            >
                                <p
                                    class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32"
                                    v-html="services.chartIntro"
                                ></p>
                                <div style="max-width: 800px; position: relative; width: 100%;"
                                    class="m-b-32 m-t-32"
                                >
                                    <Chart
                                        :chart-data="services.chartData"
                                        :options="services.chartOption"
                                    >
                                    </Chart>
                                    <p class="chart-title">
                                        Sensor Application for a Smarter World
                                    </p>
                                </div>
                            </div>
                            <p
                                class="body-regular m-t-16 p-r-16 p-l-16 m-b-32 p-b-32"
                                v-html="services.description.intro"
                            >
                            </p>

                            <slot
                                v-for="(section, index) in services.description.sections"
                            >
                                <hr class="hr" :key="'hr'+section.heading+index" />
                                <div :key="index+section.heading" class="m-b-32 p-r-16 p-l-16">
                                    <h4 class="heading-bold">
                                        {{ section.heading}}
                                    </h4>
                                    <div
                                        class="body-regular m-t-16 p-r-16 p-l-16"
                                        v-html="section.intro"
                                    >
                                    </div>

                                    <ul
                                        class="ul arrow-light p-r-32 p-l-32"
                                        v-if="section.list.length != 0"
                                    >
                                        <li
                                            class="li body-regular"
                                            v-for="(item, key) in section.list"
                                            :key="section.heading+index+'list'+key"
                                        > {{ item.subheading}}
                                            <ul class="ul triangle p-r-16 p-l-16">
                                                <li
                                                    class="li"
                                                    v-for="(point, i) in item.list"
                                                    :key="i+point[i]"
                                                >
                                                    {{point}}
                                                </li>
                                            </ul>
                                            <hr class="hr" />
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

<style lang="scss">
@import "@/styles/views/services";
@import "@/styles/views/industries";
</style>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import dataLoader from "./data/loader";
import { LIST_OF_AVAILABLE_ROUTES, SERVICES_ROUTE } from "./data/routes";
import Chart from "./Chart.vue";

import EmbeddedSystem from "./EmbeddedSystem.vue";

export default {
    name: "Services",
    components: {
        Breadcrumb,
        Chart,
        EmbeddedSystem,
    },

    data() {
        return {
            pathList: [
                {
                    link: SERVICES_ROUTE,
                    title: "Services & Solutions",
                },
            ],
            loading: true,
            services: "",
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
                this.services = data.default;
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
