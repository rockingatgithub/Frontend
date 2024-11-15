// Automotive Page data
import AutomotiveImage from "@/assets/images/png/industry/automotive.png";
import A1 from "@/assets/images/png/industry/a-1.png";
import A2 from "@/assets/images/png/industry/a-2.png";
import A3 from "@/assets/images/png/industry/a-3.png";
import A4 from "@/assets/images/png/industry/a-4.png";
import A5 from "@/assets/images/png/industry/a-5.png";

import { AUTOMOTIVE_ROUTE } from "./routes";

export default {
    link: AUTOMOTIVE_ROUTE,
    title: "Automotive",
    description: `
    <div class="image-wrapper margin mxh-md">
        <img src=${AutomotiveImage} alt="automotive" class="img zoom-in-animation delay-350"/>
    </div>
    <div class="manufacturing-box automotive">
        <div class="list-container no-background">
            <h4 class="heading">
                <img class="icon" src=${A1} alt="Automotive" />
                Project Process
            </h4>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular">Robotics</li>
                <li class="li body-regular">CCA/PCB Design</li>
                <li class="li body-regular">Mechanical Engineering</li>
                <li class="li body-regular">Unmanned Aerial Vehicles</li>
            </ul>
        </div>

        <div class="list-container no-background">
            <h4 class="heading">
                <img class="icon" src=${A2} alt="Automotive" />
                Development Process
            </h4>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular">Software application development for camera, radar, ultrasound, LIDAR, fusion systems</li>
            </ul>
        </div>

        <div class="list-container no-background">
            <h4 class="heading">
                <img class="icon" src=${A3} alt="Automotive" />
                Labour Management
            </h4>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular">Inventory Optimization</li>
                <li class="li body-regular">Asset health monitoring</li>
                <li class="li body-regular">Supply Chain automation</li>
                <li class="li body-regular">Fleet Management Program Support</li>
            </ul>
        </div>

        <div class="list-container no-background flex-1">
            <h4 class="heading">
                <img class="icon" src=${A4} alt="Automotive" />
                Quality Management
            </h4>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular">Proficient in ISO26262 safety standards,ASPICE.</li>
                <li class="li body-regular">EMI/EMC, full characterization, and production testing.</li>
                <li class="li body-regular">Classic and adaptive AUTOSAR development, migration, and integration beyond traditional.</li>
                <li class="li body-regular">Automotive quality options compliant with TS16949, including Design Failure Mode and Effect Analysis (DFEMA).</li>
            </ul>
        </div>

        <div class="list-container no-background">
            <h4 class="heading">
                <img class="icon" src=${A5} alt="Automotive" />
                Digital
            </h4>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular">Simulation</li>
                <li class="li body-regular">Cybersecurity</li>
                <li class="li body-regular">Vision and deep learning AI algorithms</li>
            </ul>
        </div>
    </div>
    <hr class="hr"/>

    <div class="card-container">
        <div class="card-row" style="justify-content: space-evenly">
            <div class="card mxw-md">
                <h4 class="heading-bold white-text">
                    Optimized Costs
                </h4>

                <p class="body-regular white-text" style="text-align: justify">
                    Whether designing processes or building industrial tools, controllers, or power distribution equipment, we help reduce and optimize costs across the product life cycle through benchmarking, localization, and value engineering.
                </p>
            </div>

            <div class="card mxw-md">
                <h4 class="heading-bold white-text">
                    Flexible Operations
                </h4>

                <p class="body-regular white-text" style="text-align: justify">
                    Our flexible engagement model offers the product development and value engineering support you need to build agile operations and grow market share.
                </p>
            </div>
        </div>
    </div>
    `,
};
