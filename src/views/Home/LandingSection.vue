<template>
<div class="container">
    <div class="landing-image-wrapper wrapper">
        <div class="landing-image-container"
            id="landing-image-container"
        >
             <video
                onloadeddata="this.play();"
                width="100%"
                height="100%"
                muted
                autoplay
                playsinline
                webkit-playsinline
                loop
                style="object-fit: cover;"
                id="video"
            >
                <source :src="video" type="video/mp4">
                <img
                    src="@/assets/images/jpg/home/landing-background.jpg"
                />
            </video>
        </div>

        <div
            class="landing-intro white-text flex intro-box-animation"
            id="landing-intro"
        >
            <div class="container align-self-flex-end">
                <h1 class="heading-regular white-text">
                    Ideas Coupled with Action
                </h1>
				<div class="red-line" > </div>

                <h3 class="heading-regular">
                    We Design, Develop Intelligent Systems and Simulate them too
                </h3>

                <p class="body-regular">
                    <!-- Embedded Systems, Artificial intelligence and Internet of Things -->
                </p>

                <router-link
                    class="primary-text body-regular hover-wiggle"
                    style="display: inline-block; font-weight: 900; font-size: 16px;"
                    :to="CONTACT_US"
                >
                    READ MORE...
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import Video1 from "@/assets/videos/ogiveintro1.mp4";
import Video2 from "@/assets/videos/ogiveintro.mp4";

import { getElement } from "@/scripts/css";
import { CONTACT_US } from "@/scripts/constants/routes";

export default {
    name: "Home",

    data() {
        return {
            CONTACT_US,
            video: "",
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.setupLandingSection();
            window.addEventListener("resize", this.setupLandingSection);

            const videoPlayer = document.getElementById("video");
            videoPlayer.click();
            setTimeout(() => {
                videoPlayer.play();
            }, 500);
            const random = Math.ceil(Math.random() * 10);
            console.log(random);
            this.video = (random % 2 === 0) ? Video1 : Video2;
        });
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.setupLandingSection);
    },

    methods: {
        setupLandingSection() {
            const landingImageContainer = getElement("landing-image-container");
            const landingIntro = getElement("landing-intro");

            if (window.innerWidth > 1024) {
                // const logoContainer = getElement("logo-container");
                // const { left, right } = logoContainer.getBoundingClientRect();
                // landingImageContainer.style.left = `${right}px`;
                // landingIntro.style.paddingLeft = `${left}px`;
            } else {
                landingImageContainer.style.left = "";
                landingIntro.style.paddingLeft = "";
            }
        },
    },

};
</script>
