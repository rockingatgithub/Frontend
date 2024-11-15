// Digital twinning page data
import Digital1Image from "@/assets/images/png/services/digital-1.png";
import Digital2Image from "@/assets/images/png/services/digital-2.png";

import { DIGITAL_TWINNING_ROUTE } from "./routes";

export default {
    link: DIGITAL_TWINNING_ROUTE,
    title: "Digital Twinning",
    description: {
        intro: `
        <div class="image-wrapper margin col-sm">
            <img src=${Digital1Image} alt="Digital Twinning" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover left">
Digital twinning, the mapping of a physical asset to a digital platform, is one of the latest technologies to emerge from Industry 4.0. 
It uses data from sensors on the physical asset to analyse its efficiency, condition and real-time status. Data collected by digital twins are predicting breakages before they happen and reporting them to human operators to save money and time during production. Before the faults occur, businesses can order parts from companies that source automation components, reducing the risk of downtime caused by broken machinery.
            </p>
        </div>

        <div class="image-wrapper margin col-sm">
            <img src=${Digital2Image} alt="Digital Twinning" class="img flex-1 slide-in-right-animation delay-350"/>
            <p class="hover right">
                The ultimate vision for the digital twin is to create, test and build our equipment/ business in a virtual environment & the physical build tie back to its digital twin through sensors so that the digital twin contains all the information for remote analysis and inspection.
            </p>
        </div>
            <ul class="ul arrow-light p-r-32 p-l-32">
                <li class="li body-regular slide-in-animation delay-350">Ogive technology has replicated multiple processes and equipments from Mining, Oil & Gas, Healthcare to Defense sectors for effective deployment on ground</li>
            </ul>
        `,
        sections: [],
    },
};
