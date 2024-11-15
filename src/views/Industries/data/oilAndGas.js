// Oil and Gas Page data
import OilAndGasImage from "@/assets/images/png/industry/oil.jpg";
import O1 from "@/assets/images/png/industry/o-1.png";
import O2 from "@/assets/images/png/industry/o-2.png";
import O3 from "@/assets/images/png/industry/o-3.png";
import O4 from "@/assets/images/png/industry/o-4.png";
import O5 from "@/assets/images/png/industry/o-5.png";
import O6 from "@/assets/images/png/industry/o-6.png";
import O7 from "@/assets/images/png/industry/o-7.png";

import { OIL_AND_GAS_ROUTE } from "./routes";

export default {
    link: OIL_AND_GAS_ROUTE,
    title: "Oil And Gas",
    description: `
    <div class="image-wrapper mxh-md margin">
        <img src=${OilAndGasImage} alt="Oil and Gas" class="img cover"/>
    </div>
    <ul class="ul arrow-light p-r-32 p-l-32">
        <li class="li body-regular">GIS application Development</li>
        <li class="li body-regular">Cloud Configuration</li>
        <li class="li body-regular">ERP, SAP, CRM Development and Customisation</li>
        <li class="li body-regular">App and dashboard development</li>
    </ul>

    <hr class="hr" />

    <div class="oil-card-container">
        <div class="oil-card a">
            <div class="oil-card-img">
                <img src=${O1} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Smart meter & customer facing apps
            </p>
        </div>

        <div class="oil-card b">
            <div class="oil-card-img">
                <img src=${O2} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Distribution intelligence apps
            </p>
        </div>

        <div class="oil-card c">
            <div class="oil-card-img">
                <img src=${O3} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Renewable apps
            </p>
        </div>

        <div class="oil-card d">
            <div class="oil-card-img">
                <img src=${O4} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Tariff systems, billing, POS, customer service and scheduling systems
            </p>
        </div>

        <a class="oil-card e" href="/services/2">
            <div class="oil-card-img">
                <img src=${O5} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Cross-functional “Tribal-knowledge” apps
            </p>
        </a>

        <a class="oil-card f" href="/services/1">
            <div class="oil-card-img">
                <img src=${O6} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Industrial IoT apps
            </p>
        </a>

        <a class="oil-card g" href="/products/1">
            <div class="oil-card-img">
                <img src=${O7} alt="Oil and Gas" class="img"/>
            </div>

            <p class="p">
                Asset management apps
            </p>
        </a>
    </div>
    `,
};
