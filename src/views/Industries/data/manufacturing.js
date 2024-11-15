// Manufacturing Page data
import ManufacturingImage from "@/assets/images/png/industry/manufacturing.png";
import M1 from "@/assets/images/png/industry/m-1.png";
import M2 from "@/assets/images/png/industry/m-2.png";
import M3 from "@/assets/images/png/industry/m-3.png";
import M4 from "@/assets/images/png/industry/m-4.png";
import M5 from "@/assets/images/png/industry/m-5.png";
import M6 from "@/assets/images/png/industry/m-6.png";
import M7 from "@/assets/images/png/industry/m-7.png";
import M8 from "@/assets/images/png/industry/m-8.png";

import { MANUFACTURING_ROUTE } from "./routes";

export default {
    link: MANUFACTURING_ROUTE,
    title: "Industrial & Manufacturing",
    description: `
    <div class="image-wrapper mxh-md margin">
        <img src=${ManufacturingImage} alt="Industrial & Manufacturing" class="img zoom-in-animation"/>
    </div>
    <div class="manufacturing-box">
        <div class="list-container">
            <h4 class="heading mass">Mass Production</h4>
            <p class="light">Supply chain automation</p>
        </div>

        <div class="list-container">
            <h4 class="heading time">Just in time</h4>
            <p class="light">Upgrade to Industry 4.0</p>
        </div>

        <div class="list-container">
            <h4 class="heading flexibility">Flexible</h4>
            <p class="light">Safety Security Automation. Infrastructural automation</p>
        </div>

        <div class="list-container">
            <h4 class="heading customization">Mass Customization</h4>
            <p class="light">Connected equipments. Predictive Maintenance & Analytics</p>
        </div>

        <div class="list-container">
            <h4 class="heading agile">Agile</h4>
            <p class="light">Documentation and compliance support</p>
        </div>

        <div class="list-container">
            <h4 class="heading rapid">Rapid</h4>
            <p class="light">Reverse engineering. Value Analysis and Value Engineering</p>
        </div>

    </div>
    <hr class="hr"/>
    <h3 class="heading-bold text-center"> Manufacturing - The Waste</h3>
    <p class="text-center body-bold" style="font-size: 0.8rem; color: #aaa">
        Challenges that we handle
    </p>
    
    <div class="m-card-container">
        <div class="m-card">
            <img class="img" src=${M1} alt="manufacturing" />
            <p class="p">
                DEFECTS
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M2} alt="manufacturing" />
            <p class="p">
                OVERPRODUCTION
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M3} alt="manufacturing" />
            <p class="p">
                WAITING
            </p>
        </div>


        <div class="m-card">
            <img class="img" src=${M4} alt="manufacturing" />
            <p class="p">
                NON-UTILIZED TALENT
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M5} alt="manufacturing" />
            <p class="p">
                TRANSPORTATION
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M6} alt="manufacturing" />
            <p class="p">
                INVENTORY
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M7} alt="manufacturing" />
            <p class="p">
                MOTION
            </p>
        </div>

        <div class="m-card">
            <img class="img" src=${M8} alt="manufacturing" />
            <p class="p">
                EXTRA-PROCESSING
            </p>
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
