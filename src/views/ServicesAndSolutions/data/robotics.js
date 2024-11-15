// Robotics page data
import Robotics1Image from "@/assets/images/png/services/robotics-1.png";
import Robotics2Image from "@/assets/images/png/services/robotics-2.png";

import { ROBOTICS_ROUTE } from "./routes";

export default {
    link: ROBOTICS_ROUTE,
    title: "Robotics",
    description: {
        intro: `
        <div class="image-wrapper margin col-sm">
            <img src=${Robotics1Image} alt="Robotics" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover right">
                Robotics is an interdisciplinary branch of science where design construction and use of machines perform task done traditionally by humans. Robots can be used in different industry to automate a physical or software process which are majorly repetitive in nature .
            </p>
        </div>
        <div class="image-wrapper margin col-sm">
            <img src=${Robotics2Image} alt="Robotics" class="img flex-1 slide-in-right-animation delay-350"/>
            <p class="hover left">
                Ogive Technology has mastered many aspects of robotics involving artificial Intelligence, visual recognition, Voice recognition, faster process and smaller power source; with a rugged in-house design and development. Proven experience in delivering of the company in Unmanned air Vehicle for tactical surveillance, Pipeline & Perimeter safety; Unmanned ground vehicle is to act as logistic carrier, defusing of bomb; Unmanned under-water vehicle for maintenance, inspection & surveillance. In healthcare sector we have developed Robotic nurse & sanitisation products. Our solutions in Robotics process Automation by using API's and dedicated scripting tool to automate the software process and saving the manhour
            </p>
        </div>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular slide-in-animation delay-350">Ogive is progressively working on various active and passive Anti-Drone measures for defence & civil use.</li>
            </ul>
        `,
        sections: [],
    },
};
