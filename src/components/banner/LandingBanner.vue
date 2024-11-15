<template>
    <router-link
        :to="url"
        :class="{
            'landing banner container flex justify-center': true,
            'show': show,
        }"
    >
        <div
            :class="'wrapper flex-1 ' + type"
        >
        <div class="flex-1 marquee">
            {{ message }}
        </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Banner",
    props: {
        message: String,
        type: String,
        show: Boolean,
        url: String,
    },
};
</script>
