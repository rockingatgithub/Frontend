<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32 m-t-32 p-t-32">
                <h2 class="text-center heading-bold m-b-32 p-b-32">
                    Our Services
                </h2>

                <div class="row justify-center">
                    <div
                        v-for="(service, index) in services"
                        :key="service.heading+index"
                        class="card-basic wrapper body-regular flex column"
                    >
                        <h4 class="heading-bold m-b-16">{{ service.heading }}</h4>
                        <p>{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<style lang="scss">
@import "@/styles/views/services";
</style>
<script>

export default {
    name: "Services",
    data() {
        return {
            services: [
                {
                    heading: "Reverse Engineering Support",
                    description: "Helping our customers in venturing into new segments",
                },
                {
                    heading: "Training",
                    description: "On-site or offshore training on various technologies by our experts",
                },
                {
                    heading: "Improve",
                    description: "Improvising the vintage products with nil modifications in the existing equipment and bringing them to INDUSTRY 4.0 level",
                },
                {
                    heading: "Mentoring",
                    description: "Helping our customers in certifications, compliances, entering new segments",
                },
                {
                    heading: "Feasibility Study",
                    description: "Helping our customers with feasibility study being conducted by our domain experts in terms of executional report generation",
                },
                {
                    heading: "Consulting",
                    description: "Consulting services as per customer as per their requirements",
                },
            ],
        };
    },
};
</script>
