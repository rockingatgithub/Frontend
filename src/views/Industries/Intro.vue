<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32 flex column">
                <img
                    src="@/assets/images/png/industry/intro.gif"
                    class="zoom-in-animation delay-350"
                />
                <!-- <video
                    onloadeddata="this.play();"
                    width="100%"
                    height="100%"
                    muted
                    autoplay
                    playsinline
                    webkit-playsinline
                    loop
                    style="object-fit: cover; max-height: 18.75rem;"
                >
                    <source :src="video" type="video/mp4">
                    <img
                        src="@/assets/images/png/industry/intro.png"
                    />
                </video> -->
                <p class="body-regular m-t-16 p-r-16 p-l-16" style="text-align: justify;">
                    Our services make the everyday life of our customers
                    easier by offering solutions in the fields of transportation,
                    healthcare, finance , defense and manufacturing. Our
                    customers get to focus on their core competence, our service
                    experts take care of the rest.In order to build long-term customer
                    relationships, we aim to offer services that make the everyday
                    life of our customers easier. Our services are reliable
                    and cost-efficient as well as including controlled and
                    high-quality customer service. In order to be able to give
                    our customers the best possible service, we invest in the
                    competence of our personnel. It is our vision that our personnel
                    be known for the incomparable service they provide and are
                    capable of building a true partnership with our customers.
                </p>
            </div>
        </div>
	</div>
</template>

<style scoped>
img {
    height: 100%;
    max-height: 30rem;
    object-fit: contain;
    width: 100%;
}
</style>

<script>

import IndustryVideo from "@/assets/videos/industries.mp4";

export default {
    name: "Intro",
    data() {
        return {
            video: IndustryVideo,
        };
    },
};
</script>
