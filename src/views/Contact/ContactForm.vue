<template>
    <div class="wrapper p-l-16 p-r-16 m-b-32">
        <form id="contact-us-form" class="form" style="padding: 0">
            <div class="fields-wrapper">
                <div class="row">
                    <div class="h-label-input col-sm-2 p-r-8 p-l-8">
                        <label
                            for="contact-us-name"
                            :class="{label: true, 'error-text': $v.name.$error}"
                        >
                            Name*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.name.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="name"
                            id="contact-us-name"
                            placeholder="Name"
                            v-model.trim="$v.name.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.name.$error}"
                        >
                            *Name is required.
                        </p>
                    </div>

                    <div class="h-label-input col-sm-2 p-r-8 p-l-8">
                        <label
                            for="contact-us-email"
                            :class="{label: true, 'error-text': $v.email.$error}"
                        >
                            Email*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.email.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="email"
                            id="contact-us-email"
                            placeholder="Email"
                            v-model.trim="$v.email.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.email.$error}"
                        >
                            *Please check email.
                        </p>
                    </div>

                    <!-- <div class="h-label-input col-md-3 p-r-8 p-l-8">
                        <label
                            for="contact-us-subject"
                            :class="{label: true, 'error-text': $v.subject.$error}"
                        >
                            Subject*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.subject.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="subject"
                            id="contact-us-subject"
                            placeholder="Subject"
                            v-model.trim="$v.subject.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.subject.$error}"
                        >
                            *Subject is required
                        </p>
                    </div> -->
                </div>

                <div class="row">
                    <div class="h-label-input p-l-8 p-r-8 flex-1">
                        <label
                            for="contact-us-message"
                            :class="{label: true, 'error-text': $v.message.$error}"
                        >
                            Message*
                        </label>
                        <textarea
                            name="message"
                            id="contact-us-message"
                            class="textarea md with-border flex-1"
                            v-model.trim="$v.message.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.message.$error}"
                        >
                            *Don't you want to say something?.
                        </p>
                    </div>
                </div>
                <div class="p-l-8 p-r-8 flex-1">
                    <input
                        type="checkbox"
                        name="declaration"
                        id="declaration"
                        v-model="declaration"
                    />
                    <label for="declaration" class="label">
                        I hereby certify that the information above is true and accurate.
                    </label>
                </div>
            </div>

            <div class="row m-b-32">
                <button
                    class="button primary-bg white-text hover focus"
                    @click.prevent="submitForm"
                    :disabled="$v.$invalid || !declaration || disableSubmit"
                >
                    Send Message
                </button>
            </div>
            <Banner :message="bannerMessage" :type="bannerMessageType" :show="bannerShow"/>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import { CONTACT_US } from "@/scripts/constants/endpoints";

import {
    required, email,
} from "vuelidate/lib/validators";
import Banner from "@/components/banner/Banner.vue";

export default {
    name: "ContactInfo",
    components: { Banner },
    data() {
        return {
            name: "",
            // subject: "",
            email: "",
            message: "",
            declaration: false,
            bannerMessage: "",
            bannerMessageType: "",
            bannerShow: false,
            disableSubmit: false,
        };
    },

    validations: {
        name: {
            required,
        },
        // subject: {
        //     required,
        // },
        email: {
            required,
            email,
        },
        message: {
            required,
        },
    },

    methods: {
        submitForm() {
            console.log("checking....", this.declaration);
            if (this.$v.$invalid) {
                console.log("Invalid");
            } else {
                this.disableSubmit = true;
                const data = {
                    name: this.$v.name.$model,
                    email: this.$v.email.$model,
                    message: this.$v.message.$model,
                };

                axios.post(CONTACT_US, qs.stringify(data))
                    .then(() => {
                        this.bannerMessage = "We have successfully received you message. We will get in touch as soon as possible.";
                        this.bannerMessageType = "success";
                        this.bannerShow = true;

                        setTimeout(() => {
                            this.bannerShow = false;
                            this.disableSubmit = false;
                            Object.assign(this.$data, {
                                name: "",
                                // subject: "",
                                email: "",
                                message: "",
                                declaration: false,
                                bannerMessage: "",
                                bannerMessageType: "",
                                bannerShow: false,
                                disableSubmit: false,
                            });
                            setTimeout(() => { this.$v.$reset(); }, 0);
                        }, 8000);
                    })
                    .catch((err) => {
                        console.log(err);
                        this.bannerMessage = "Unexpected error. Please try after sometime";
                        this.bannerMessageType = "error";
                        this.bannerShow = true;

                        setTimeout(() => {
                            this.bannerShow = false;
                            this.disableSubmit = false;
                        }, 8000);
                    });
            }
        },
    },
};
</script>
