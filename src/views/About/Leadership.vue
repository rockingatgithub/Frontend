<template>
	<div class="container flex justify-center">
        <div class="wrapper xl">
            <div class="wrapper m-b-32">
                <h3 class="heading-bold text-center">
                    Leadership
                </h3>

                <div class="wrapper leadership">
                    <div class="img-section">
                        <img
                            src="@/assets/images/png/mily.jpg"
                            alt="ogive's ceo"
                            class="img"
                        />
                        <p class="titles">
                            Entrepreneur |
                            Researcher |
                            Founder |
                            Technologist |
                            Start-up mentor |
                            Innovator |
                            Revenue Growth Expert |
                            Strategist
                        </p>
                    </div>

                    <div class="about-leader-section">
                        <h4 class="heading-bold m-b-32" style="text-align: center">
                            <span class="primary-text">Mily Saxena</span><br/>
                            CMD Ogive Technology, AuSiRo Labs, Pancha Hara & Jijivisha
                        </h4>
                        <carousel
                            :autoplay="true"
                            :loop="true"
                            :autoplayTimeout="8000"
                            :centerMode="true"
                            :perPage="1"
                            paginationColor="#aaa"
                            paginationActiveColor="#DE1B2F"
                        >
                            <slide>
                                <p class="slide">
                                    Global leader with 18 years of experience. Founded three
                                    companies Ogive Technology, AuSiRo Labs, providing leading
                                    real-world Automation & Simulation products with an additive
                                    of Robotics, and Jijivisha is an eCommerce platform.
                                </p>
                            </slide>
                            <slide>
                                <p class="slide">
                                    Served across Public and Private sector, carry functional
                                    expertise in multiple segments .Excellence in understanding
                                    the cutting edge technologies independently and amalgamating
                                    the technologies to deliver the desired intelligent output.
                                </p>
                            </slide>
                            <slide>
                                <p class="slide">
                                    With Product As A Service being the delivery guideline bridging
                                    the gap between executive and technical stakeholders is proven.
                                    Serving as a growth catalyst and infuse productive energy into
                                    the workplace. Developed a framework for developing fast-growing
                                    businesses.
                                </p>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: "Leadership",
    components: {
        Carousel,
        Slide,
    },
};
</script>
