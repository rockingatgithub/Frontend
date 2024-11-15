<template>
    <div class="breadcrumb container flex justify-center">
        <div class="wrapper xl">
            <router-link to="/" class="link" exact="">
                <i class="fa fa-home"/>
            </router-link>

            <slot v-for="(path) in pathList">
                <i class="fa fa-chevron-right arrow" :key="path.title" />
                <router-link :to="path.link" class="link body-regular" exact>
                    {{ path.title}}
                </router-link>
            </slot>

        </div>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        pathList: Array,
    },
};
</script>
