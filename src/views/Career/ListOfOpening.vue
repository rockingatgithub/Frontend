<template>
    <div class="wrapper p-l-16 p-r-16">
        <div class="">
            <h3 class="heading-bold">List of Openings</h3>
            <slot v-if="openings.length == 0">
                <ul class="ul m-t-24 p-l-24 body-regular">
                    <li class="li">Currently no opening!</li>
                </ul>
            </slot>
            <slot v-else>
                <ul class="ul p-l-24 body-regular arrow-light">
                    <li
                        class="li"
                        v-for="(opening, index) in openings"
                        :key="opening.jobTitle+index"
                    >
                        <router-link :to="opening.link" class="primary-text">
                            {{ opening.jobTitle }}
                        </router-link>
                    </li>
                </ul>
            </slot>
        </div>
    </div>
</template>

<script>

import jobs from "./data";

export default {
    name: "ListOfOpening",
    data() {
        return {
            openings: jobs,
        };
    },
};
</script>
