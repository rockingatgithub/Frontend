// Internet of Things page data
import IOT3Image from "@/assets/images/png/services/iot-3.png";
import IOT4Image from "@/assets/images/png/services/iot-4.png";

import I1 from "@/assets/images/png/services/i-1.png";
import I2 from "@/assets/images/png/services/i-2.png";
import I3 from "@/assets/images/png/services/i-3.png";
import I4 from "@/assets/images/png/services/i-4.png";
import I5 from "@/assets/images/png/services/i-5.png";

import { chartData, options } from "./iot-chart-data";

import { IOT_ROUTE } from "./routes";

export default {
    link: IOT_ROUTE,
    title: "Internet of Things",
    chart: true,
    chartData,
    chartOption: options,
    chartIntro: "We define the right IoT landscape for you to kick start your IoT journey. A structured approach is taken to understand your business needs & offer quick ramp-up to discover your IoT needs & solutions, accelerating your time to market with low risk and zero lock-in.",
    description: {
        intro: `
            <hr class="hr" />
            <h3 class="heading-bold text-center">IOT Workflow</h3>
            <div class="iot-container">
                <img src=${I1} alt="iot" class="iot-img right" />
                <p class="p right">
                    Authority based access
                </p>
            </div>

            <div class="iot-container">
                <img src=${I2} alt="iot" class="iot-img left" />
                <p class="p left">
                    Equipment/Machinery/Vehicles
                </p>
            </div>

            <div class="iot-container">
                <img src=${I3} alt="iot" class="iot-img right" />
                <p class="p right">
                    Life time bounded
                </p>
            </div>

            <div class="iot-container">
                <img src=${I4} alt="iot" class="iot-img left" />
                <p class="p left">
                    Reports/Alerts on Mobile-Phones/Computers in Emails/SMS/Dashboard etc.
                </p>
            </div>

            <div class="iot-container">
                <img src=${I5} alt="iot" class="iot-img right" />
                <p class="p right">
                    Dedicated Kiosks/Screens for display of the information
                </p>
            </div>

            <hr class="hr" />
            <h3 class="heading-bold text-center">IOT New Technology Stack</h3>
            <div class="image-wrapper margin">
                <img src=${IOT3Image} alt="IOt" class="img"/>
            </div>

            <hr class="hr" />
            <h3 class="heading-bold text-center">Cloud</h3>
            <p class="m-t-16 m-b-32 text-center">
            To be secure and scalable the IoT will evolve to more open and decentralized.
            </p>
            <div class="image-wrapper margin">
                <img src=${IOT4Image} alt="IOt" class="img"/>
            </div>

        `,
        sections: [],
    },
};
