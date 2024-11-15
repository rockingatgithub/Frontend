<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32">
                <h3 class="heading-bold text-center">
                    Certificates & Publications
                </h3>
                <div class="m-t-32 m-b-32">
                    <carousel
                        :autoplay="true"
                        :loop="true"
                        :autoplayTimeout="4000"
                        :centerMode="true"
                        :perPage="1"
                        paginationColor="#aaa"
                        paginationActiveColor="#DE1B2F"
                        style="overflow-x: hidden;"
                    >
                        <!-- <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e-1.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                    Ogive CEO as part of Indian Business Delegation
                                    at Eurosatory 2018
                                </p>
                            </div>
                        </slide> -->

                        <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e-2.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                    Enterpises startup special
                                    <span class="primary-text">APAC CIO outlook</span><br/>
                                    December 27 - 2017
                                </p>
                            </div>
                        </slide>

                        <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e3-frame.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                </p>
                            </div>
                        </slide>

                        <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e4-frame.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                </p>
                            </div>
                        </slide>

                        <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e5-frame.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                </p>
                            </div>
                        </slide>

                        <!-- <slide>
                            <div class="event-wrapper">
                                <img src="@/assets/images/png/about/e-6.png" class="img"/>
                                <p class="body-regular m-t-16 text-center">
                                    Ogive CEO as part of Panel and
                                    speaker at a Blockchain conference
                                </p>
                            </div>
                        </slide> -->
                    </carousel>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "GlobalEvent",
    components: {
        Carousel,
        Slide,
    },
};
</script>
