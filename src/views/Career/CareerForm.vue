<template>
    <div class="wrapper p-l-16 p-r-16 m-b-32">
        <form id="contact-us-form" class="form" style="padding: 0">
            <div class="fields-wrapper">
                <div class="row">

                    <div class="h-label-input col-sm-2 p-r-8 p-l-8">
                        <label
                            for="request-form-first-name"
                            :class="{label: true, 'error-text': $v.firstName.$error}"
                        >
                            First Name*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.firstName.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="first name"
                            id="request-form-first-name"
                            placeholder="First Name"
                            v-model.trim="$v.firstName.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.firstName.$error}"
                        >
                            *First Name is required.
                        </p>
                    </div>

                    <div class="h-label-input col-sm-2 p-l-8 p-r-8">
                        <label
                            for="request-form-last-name"
                            :class="{label: true, 'error-text': $v.lastName.$error}"
                        >
                            Last Name*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.lastName.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="last name"
                            id="request-form-last-name"
                            placeholder="Last Name"
                            v-model.trim="$v.lastName.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.lastName.$error}"
                        >
                            *Last Name is required.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="h-label-input col-sm-2 p-r-8 p-l-8">
                        <label
                            for="request-form-email"
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
                            id="request-form-email"
                            placeholder="Email"
                            v-model.trim="$v.email.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.email.$error}"
                        >
                            *Please check email.
                        </p>
                    </div>

                    <div class="h-label-input col-sm-2 p-l-8 p-r-8">
                        <label
                            for="request-form-contact"
                            :class="{label: true, 'error-text': $v.contact.$error}"
                        >
                            Contact*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.contact.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="contact"
                            id="request-form-contact"
                            placeholder="Contact"
                            v-model.trim="$v.contact.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.contact.$error}"
                        >
                            *Please check contact.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="h-label-input p-l-8 p-r-8 col-sm-2">
                        <label
                            for="request-form-role"
                            :class="{label: true, 'error-text': $v.role.$error}"
                        >
                            Role*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.role.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="Role"
                            id="request-form-role"
                            placeholder="Role"
                            v-model.trim="$v.role.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.role.$error}"
                        >
                            *Role is required.
                        </p>
                    </div>
                    <div class="h-label-input p-l-8 p-r-8 col-sm-2">

                        <label
                            for="request-form-role"
                            :class="{label: true, 'error-text': $v.role.$error}"
                        >
                            Job Type*
                        </label>
                        <select
                            for="request-form-role"
                            class="input with-border"
                            v-model="type"
                        >
                            <option value="full-time" selected>Full Time</option>
                            <option value="intern">Intern</option>
                            <option value="consultant">Consultant</option>
                        </select>
                    </div>
                </div>

                <div class="h-label-input flex-1 p-l-8 p-r-8">
                    <label
                        for="career-message"
                        :class="{label: true, 'error-text': $v.message.$error}"
                    >
                        Message*
                    </label>
                    <textarea
                        name="message"
                        id="career-message"
                        class="textarea md with-border flex-1"
                        v-model.trim="$v.message.$model"
                    />
                    <p
                        :class="{'required-msg': true, 'none': !$v.message.$error}"
                    >
                        *Don't you want to say something?.
                    </p>
                </div>

                <div class="p-l-8 p-r-16 flex-1">
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
                    Submit
                </button>
            </div>
            <Banner :message="bannerMessage" :type="bannerMessageType" :show="bannerShow"/>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import { CAREER } from "@/scripts/constants/endpoints";
import {
    required, email, numeric, minLength,
} from "vuelidate/lib/validators";
import Banner from "@/components/banner/Banner.vue";

export default {
    name: "CareerForm",
    components: { Banner },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            role: "",
            type: "full-time",
            message: "",
            declaration: false,
            bannerMessage: "",
            bannerMessageType: "",
            bannerShow: false,
            disableSubmit: false,
        };
    },

    validations: {
        firstName: {
            required,
        },
        lastName: {
            required,
        },
        contact: {
            required,
            numeric,
            minLength: minLength(10),
        },
        role: {
            required,
        },
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
            console.log("checking....", this.declaration, this.type);
            if (this.$v.$invalid) {
                console.log("Invalid");
            } else {
                this.disableSubmit = true;
                const data = {
                    first_name: this.$v.firstName.$model,
                    last_name: this.$v.lastName.$model,
                    email: this.$v.email.$model,
                    contact: this.$v.contact.$model,
                    Role: this.$v.role.$model,
                    message: this.$v.message.$model,
                    type: this.type,
                };
                axios.post(CAREER, qs.stringify(data))
                    .then(() => {
                        this.bannerMessage = "We have successfully received you request.";
                        this.bannerMessageType = "success";
                        this.bannerShow = true;

                        setTimeout(() => {
                            this.bannerShow = false;
                            this.disableSubmit = false;
                            Object.assign(this.$data, {
                                firstName: "",
                                lastName: "",
                                email: "",
                                contact: "",
                                role: "",
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
