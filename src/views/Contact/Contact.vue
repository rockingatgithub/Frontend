<template>
	<div class="container above-padding flex justify-center">
        <div class="wrapper xl">
            <Breadcrumb :pathList="pathList" />
            <ContactInfo />
            <hr class="hr" />
            <ContactForm />
        </div>
	</div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { CONTACT_US } from "@/scripts/constants/routes";

import ContactInfo from "./ContactInfo.vue";
import ContactForm from "./ContactForm.vue";

export default {
    name: "Contact",
    components: {
        Breadcrumb,
        ContactInfo,
        ContactForm,
    },

    data() {
        return {
            pathList: [
                {
                    link: CONTACT_US,
                    title: "Contact Us",
                },
            ],
        };
    },

};
</script>
