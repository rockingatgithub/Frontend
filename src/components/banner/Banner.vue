<template>
    <div
        :class="{
            'banner container flex justify-center': true,
            'show': show,
        }"
    >
        <div
            :class="'wrapper flex-1 ' + type"
        >
        <div class="flex-1">
            {{ message }}
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
    props: {
        message: String,
        type: String,
        show: Boolean,
    },
};
</script>
