<template>
    <div class="tree-section">
            <img
                src="@/assets/images/gif/tree.gif"
                class="tree-image"
                alt="work-tree"
                usemap="#worktree"
            />
            <map name="worktree">
                <area
                    v-for="(item, index) in treeMap"
                    :key="'worktree-coord'+index"
                    shape="rect"
                    :coords="item.coords"
                    :alt="item.alt"
                    @click="navigate(item.link)"
                    style="cursor: pointer"
                >
            </map>
    </div>
</template>

<script>
import { treeMap } from "./data";

export default {
    name: "Tree",
    data() {
        return {
            treeMap,
        };
    },
    methods: {
        navigate(url) {
            this.$router.push(url);
        },
    },
};
</script>
