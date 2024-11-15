<template>
	<div class="container above-padding flex justify-center">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />
            <ListOfOpening />
            <hr class="hr" />
            <CareerForm />
        </div>
	</div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { CAREER } from "@/scripts/constants/routes";
import ListOfOpening from "./ListOfOpening.vue";
import CareerForm from "./CareerForm.vue";

export default {
    name: "Career",
    components: {
        Breadcrumb,
        ListOfOpening,
        CareerForm,
    },

    data() {
        return {
            pathList: [
                {
                    link: CAREER,
                    title: "Career",
                },
            ],
        };
    },

};
</script>
