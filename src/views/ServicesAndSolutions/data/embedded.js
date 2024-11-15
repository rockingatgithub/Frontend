// Embedded System Pag data
import EmbeddedImage1 from "@/assets/images/png/services/embedded-1.jpg";
import EmbeddedImage2 from "@/assets/images/png/services/embedded-2.jpg";
import EmbeddedImage3 from "@/assets/images/png/services/embedded-3.jpg";
import EmbeddedImage4 from "@/assets/images/png/services/embedded-4.jpg";

import { EMBEDDED_ROUTE } from "./routes";

export default {
    link: EMBEDDED_ROUTE,
    title: "Embedded Systems",
    type: "slide-animation",
    description: {
        sections: [
            `
            <div class="image-wrapper margin embedded">
                <img src=${EmbeddedImage1} alt="Embedded System" class="img flex-1"/>
                <div class="flex-1 container concept">
                    <h3 class="heading m-b-16">Conceptualization</h3>
                    Working together with our customers to develop new design ideas, define engineering needs and evaluate the likelihood for success.
                    <ul class="p-r-32 p-l-32">
                        <li class="li body-regular">Industrial Design</li>
                        <li class="li body-regular">IP Analysis and Design</li>
                        <li class="li body-regular">Ergonomics Design</li>
                        <li class="li body-regular">Human Factor Design</li>
                        <li class="li body-regular">System Engineering</li>
                    </ul>
                </div>
            </div>`,
            `
            <div class="image-wrapper margin embedded">
                <div class="flex-1 container design">
                    <h3 class="heading m-b-16">Design</h3>
                        We offer complete product life cycle solution. 

                    <div class="wrapper">
                        <ul class="ul">
                            <li class="li body-regular">Electronics Design</li>
                            <li class="li body-regular">Electrical Design</li>
                            <li class="li body-regular">Mechanical Design</li>
                            <li class="li body-regular">Mechatronics</li>
                            <li class="li body-regular">Control Engineering</li>
                        </ul>

                        <ul class="ul">
                            <li class="li body-regular">Electronics Hardware</li>
                            <li class="li body-regular">Embedded Software</li>
                            <li class="li body-regular">Test System Design</li>
                            <li class="li body-regular">Qualification Certification</li>
                            <li class="li body-regular">Product Life-Cycle Management</li>
                        </ul>
                    </div>

                </div>
                <img src=${EmbeddedImage2} alt="Embedded System" class="img flex-1"/>
            </div>
            `,

            `<div class="image-wrapper margin embedded">
                <img src=${EmbeddedImage3} alt="Embedded System" class="flex-1"/>
                <div class="flex-1 container manufacture">
                    <h3 class="heading m-b-16">Manufacture</h3>
                    Our full-scale mechanical and electronic manufacturing capabilities boost competitive edge while reducing costs and improving performance.
                    <div class="wrapper">
                        <ul class="ul">
                            <li class="li body-regular">DFX Services</li>
                            <li class="li body-regular">Component Sourcing</li>
                            <li class="li body-regular">Part Localization</li>
                            <li class="li body-regular">Supply chain Management</li>
                            <li class="li body-regular">PCB Assembly</li>
                            <li class="li body-regular">Cable and Wire Harness Assembly</li>
                            <li class="li body-regular">Precision Machined Parts</li>
                            <li class="li body-regular">Precision Milling</li>
                            <li class="li body-regular">CMM Inspection</li>
                            <li class="li body-regular">Electrical/Functional/Reliability Testing</li>
                            <li class="li body-regular">Counterfeit Parts Management</li>
                        </ul>

                        <ul class="ul">
                            <li class="li body-regular">3D Printing (Metal and Plastic)</li>
                            <li class="li body-regular">Vendor Managed Inventory</li>
                            <li class="li body-regular">Obsolescence Management</li>
                            <li class="li body-regular">Logistics Management</li>
                            <li class="li body-regular">Conflict Minerals Management</li>
                            <li class="li body-regular">Qualification Certification</li>
                            <li class="li body-regular">Enclosures and Box-Builds</li>
                        </ul>
                    </div>
                </div>
            </div>`,

            `<div class="image-wrapper margin embedded">
                <div class="flex-1 container maintenance">
                    <h3 class="heading m-b-16">Maintenance</h3>
                    Our maintenance services are designed to help manage, optimize, and upgrade existing product lines.
                    <ul class="p-r-32 p-l-32">
                        <li class="li body-regular">Electronics Repair Services</li>
                        <li class="li body-regular">Obsolescence Management</li>
                        <li class="li body-regular">Redesign</li>
                    </ul>
                </div>
                <img src=${EmbeddedImage4} alt="Embedded System" class="img flex-1"/>
            </div>
        </div>`,
        ],
    },
};
