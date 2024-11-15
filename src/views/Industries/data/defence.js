// Defence Page data
import DefenceImage from "@/assets/images/png/industry/defense.png";

import { DEFENCE_ROUTE } from "./routes";

export default {
    link: DEFENCE_ROUTE,
    title: "Defence",
    description: `
        <div class="image-wrapper margin flex-1">
            <img src=${DefenceImage} alt="Defence" class="img zoom-in-animation"/>
        </div>
        <div class="aerospace row">
        <div class="aerospace-ul-wrapper" style="background: #5e6828; color: #fff">
            <div class="content-wrapper">
                <h3 class="heading m-t-16">Digital</h3>
                <ul class="ul">
                    <li class="li body-regular">Maintenance</li>
                    <li class="li body-regular">Training</li>
                    <li class="li body-regular">Artificial Intelligence</li>
                    <li class="li body-regular">Cybersecurity</li>
                </ul>
            </div>
             <svg viewbox="0 0 150 150" class="aerospace-svg" preserveAspectRatio="none">
                <polygon points="0, 0 0, 200 200, 200" style="fill:white" />
            </svg> 
        </div>
    
        <div class="aerospace-ul-wrapper" style="background: #4b5320; color: #fff">
            <div class="content-wrapper" style="text-align: center">
                <h3 class="heading m-t-16">Design And Development</h3>
                <ul class="ul m-b-32">
                    <li class="li body-regular">System Engineering</li>
                    <li class="li body-regular">Prototyping</li>
                    <li class="li body-regular">Testing and Qualification</li>
                    <li class="li body-regular">Automated Testing Equipment</li>
                    <li class="li body-regular">Technical Publications</li>
                    <li class="li body-regular">Model-based Design Engineering</li>
                    <li class="li body-regular">Electronics Manufacturing (Mil. Grade design and assembly)</li>
                    <li class="li body-regular">Obsolescence Management</li>
                    <li class="li body-regular">Software and IT</li>
                    <li class="li body-regular">Reverse Engineering</li>
                </ul>
            </div>
        </div>
    
        <div class="aerospace-ul-wrapper" style="background: #3c421a; color: #fff">
            <div class="content-wrapper" style="text-align: right">
                <h3 class="heading m-t-16">After Market (Industry 4.0)</h3>
                <ul class="ul m-b-32">
                    <li class="li body-regular">Inventory Optimization</li>
                    <li class="li body-regular">Fleet Management</li>
                    <li class="li body-regular">Asset Health Monitoring</li>
                </ul>
            </div>

            <svg viewbox="0 0 150 150" class="aerospace-svg" style="transform: scaleX(-1);" preserveAspectRatio="none">
                <polygon points="-10, -10 -10, 200 200, 200" style="fill:white;"/>
            </svg> 
        </div>
    </div>
    `,
};
