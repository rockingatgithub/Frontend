<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32 m-t-32 p-t-32">
                <h3 class="text-center heading-bold m-b-32 p-b-32">
                    We offer services to the following industries
                </h3>

                <div class="row justify-center">
                    <router-link
                        v-for="(service, index) in services"
                        :key="service.title+index+'card'"
                        class="card-basic
                        wrapper
                        body-regular
                        flex
                        column
                        black-text hover-animation"
                        :to="service.link"
                    >
                        <h4 class="heading-bold m-b-16">{{ service.title }}</h4>
                        <p class="flex-1">
                            {{ clip(service.description)}}
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

import industriesCard from "./data/card";

export default {
    name: "Services",
    data() {
        return {
            services: industriesCard,
        };
    },

    methods: {
        clip(text) {
            if (text.length > 100) return `${text.slice(0, 100)}...`;
            return text;
        },
    },
};
</script>
