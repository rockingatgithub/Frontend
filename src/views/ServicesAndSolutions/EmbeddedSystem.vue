<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32">
                <h3 class="heading-bold text-center">
                    {{ data.title }}
                </h3>
                <div class="m-t-32 m-b-32">
                    <carousel
                        :autoplay="true"
                        :loop="true"
                        :autoplayTimeout="4000"
                        :centerMode="true"
                        :perPage="1"
                        paginationColor="#aaa"
                        paginationActiveColor="#DE1B2F"
                        style="overflow-x: hidden;"
                    >
                        <slide
                            v-for="(item, key) in data.description.sections"
                            :key="'slider-animation' + key"
                        >
                        <div v-html="item"/>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "EmbeddedSystem",
    components: {
        Carousel,
        Slide,
    },
    props: {
        data: Object,
    },

    mounted() {
        console.log(this.data.title);
    },
};
</script>
