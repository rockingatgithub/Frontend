<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <h2 class="heading-bold text-center m-b-32">About Us</h2>
            <!-- <div class="wrapper m-b-32">
                <h2 class="heading-bold text-center">Who We Are</h2>
                <p class="body-regular m-t-16 text-center p-r-16 p-l-16">
                    Ogive Technology is a product engineering services company helping
                    clients in realising their ideas in Embedded Systems, Internet of Things,
                    BlockChain,Artificial Intelligence, digital twining, and Immersive
                    technologies. Individual technology stack or amalgamating various technologies
                    to deliver an integrated intelligent product.
                </p>
            </div> -->

            <!-- <div class="wrapper m-b-32">
                <h2 class="heading-bold text-center">What We Do</h2>
                <p class="body-regular m-t-16 text-center p-r-16 p-l-16">
                    We design and develop Intelligent systems and processes, upgrade existing
                    systems and processes to be intelligent. Owning capability to simulate
                    the systems and processes for the ease of operation for users aids value
                    to the offerings. Working on legacy systems and data is our expertise.
                </p>
            </div> -->
            <div class="wrapper m-b-32 p-t-32">
                <div class="row col-on-small">
                    <div
                        class="col-md-2 p-r-16 p-l-16 flex justify-center
                        m-b-32
                        slide-in-animation
                        delay-350
                        flex-1
                        "
                    >
                        <img src="@/assets/images/png/about/about-us.png"/>
                    </div>

                    <div
                        class="col-md-2
                        body-regular
                        p-r-16 p-l-16
                        flex
                        justify-center"
                        style="max-width: 30rem;"
                    >
                        <div class="wrapper md">
                            <div class="slide-in-right-animation delay-100">
                                <h4 class="heading-bold">Mission Statement</h4>
                                <p class="body-regular m-t-8 m-b-16 justify">
                                    We believe that “Every problem has a solution”.
                                    A solution that builds growth and business for our
                                    customers, helps our employees grow and helps in
                                    creating excellent products that simplifies day
                                    to day tasks.
                                </p>
                            </div>

                            <div class="slide-in-right-animation delay-250">
                                <h4 class="heading-bold">Who We Are</h4>
                                <p class="body-regular m-t-8 m-b-16 justify">
                                    Ogive Technology is a product engineering services
                                    company helping clients in realising their ideas in
                                    Embedded Systems, Internet of Things, BlockChain,
                                    Artificial Intelligence, Digital Twining, and Immersive
                                    Technologies. Individual technology stack or amalgamating
                                    various technologies to deliver an integrated intelligent
                                    product.
                                </p>
                            </div>
                            <div class="slide-in-right-animation delay-350">
                                <h4 class="heading-bold">What We Do</h4>
                                <p class="body-regular m-t-8 m-b-16 justify">
                                    We design and develop Intelligent systems and
                                    processes, upgrade existing systems and processes
                                    to be intelligent. Owning capability to simulate the
                                    systems and processes for the ease of operation for users
                                    aids value to the offerings. Working on legacy systems and
                                    data is our expertise.
                                </p>
                            </div>

                            <!--
                                <ul class="ul arrow-light padding">
                                    <li
                                        class="li"
                                        v-for="tech in technologies"
                                        :key="tech"
                                    >
                                        {{ tech }}
                                    </li>
                                </ul>

                        We are the perfect partner for those seeking an innovative approach,
                        viable and cost effective solutions or services. Our diversified
                        technical exposure in various disciplines and extensive exposure
                        to various industrial domains such as; Aerospace, Automotive,
                        Defense, Finance, Manufacturing, Medical and Transportation is invincible.
                        -->
                     </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<style scoped>
img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.justify {
    text-align: justify;
}

</style>

<script>

export default {
    name: "WhoWeAre",
    // data() {
    //     return {
    //         technologies: [
    //             "Embedded Systems",
    //             "Internet Of Things",
    //             "Artificial Intelligence",
    //             "Documentation",
    //         ],
    //     };
    // },
};
</script>
