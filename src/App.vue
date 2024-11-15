<template>
  <div id="app">
    <RequestDemoModal />
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/styles/main.scss";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>

<script>
import { handleChange } from "@/scripts/screen";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
import RequestDemoModal from "@/components/footer/RequestDemoModal.vue";

export default {
    name: "App",
    components: {
        Navbar, Footer, RequestDemoModal,
    },
    beforeCreate() {
        handleChange();
        window.addEventListener("resize", handleChange);
    },

};
</script>
