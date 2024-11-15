<template>
	<div>
		<LandingBanner
			message="Click here to checkout our COVID 19 products."
			:url="COVID_19_ROUTE"
			:show="true"
			type="landing"
			style="position: fixed !important; z-index:1020;"
		/>
		<div class="container home">
			<LandingSection />
			<OgiveTechnologies />
			<OgiveProducts />
			<Tree />
		</div>
	</div>
</template>

<style lang="scss">
@import "@/styles/views/home";
</style>

<script>
import LandingBanner from "@/components/banner/LandingBanner.vue";
import { COVID_19_ROUTE } from "@/views/Products/data/routes";
import LandingSection from "./LandingSection.vue";
import OgiveTechnologies from "./OgiveTechnologies.vue";
import OgiveProducts from "./OgiveProducts.vue";
import Tree from "./Tree.vue";

export default {
    name: "Home",
    components: {
        LandingSection, OgiveTechnologies, OgiveProducts, Tree, LandingBanner,
    },
    data() {
        return {
            COVID_19_ROUTE,
        };
    },
};
</script>
