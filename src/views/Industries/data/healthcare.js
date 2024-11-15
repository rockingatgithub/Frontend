// Healthcare page data.

import Healthcare1Image from "@/assets/images/png/industry/healthcare-1.png";
import Healthcare2Image from "@/assets/images/png/industry/healthcare-2.png";
import Healthcare3Image from "@/assets/images/png/industry/healthcare-3.png";
import Healthcare4Image from "@/assets/images/png/industry/healthcare-4.png";
import Healthcare5Image from "@/assets/images/png/industry/healthcare-5.png";
import Healthcare6Image from "@/assets/images/png/industry/healthcare-6.png";
import Healthcare7Image from "@/assets/images/png/industry/healthcare-7.png";
import Healthcare8Image from "@/assets/images/png/industry/healthcare-8.jpg";
import Healthcare9Image from "@/assets/images/png/industry/healthcare-9.jpg";

import { HEALTHCARE_ROUTE } from "./routes";

export default {
    link: HEALTHCARE_ROUTE,
    title: "Healthcare",
    description: `
        Preventive healthcare is on the rise with companies in the medical industry aiming at creating a sustainable tomorrow. Rising patient cost, increase in population, higher incidence of lifestyle related disorders, just in time medical interventions are propelling companies to embrace technology to reduce their time to market processes.
        <div class="image-wrapper mxh-md margin">
            <div class="image-overflow-wrapper">
                <img src=${Healthcare1Image} alt="healthcare" class="img slide-in-right-animation delay-350"/>
            </div>
        </div>

        <hr class="hr"/>
        <h3 class="heading-bold" style="text-align: center;"><span class="primary-text">Digital</span> Engineering</h3>
        
        <div class="card-container m-t-32">
            <div class="health-card-row">
                <div class="card-healthcare">
                    <div class="cover-img-container">
                        <img src=${Healthcare5Image} alt="healthcare" />
                    </div>
                    <div class="wrapper">
                        <h5 class="heading-bold uppercase text-center">Asset Monitoring and Predictive Management</h3>
                        <p>
                            We support companies analyze asset telemetry, log, and reference data for real-time monitoring and insight.
                            Our proprietary algorithm helps predict an asset failure and send out proactive service alerts that helps in proactive maintenance of assets.
                        </p>
                    </div>
                </div>

                <div class="card-healthcare">
                    <div class="cover-img-container">
                        <img src=${Healthcare6Image} alt="healthcare" />
                    </div>
                    <div class="wrapper">
                        <h5 class="heading-bold uppercase text-center">CyberSecurity</h3>
                        <p>
                            Our cybersecurity verification and validation solutions help companies comply with FDA Guidelines for Cybersecurity for Networked Medical Devices. Our capabilities in threat modeling for penetration testing, network topology, and security management have helped clients complete product documentation for 510(k) approval. 
                        </p>
                    </div>
                </div>

                <div class="card-healthcare">
                    <div class="cover-img-container">
                        <img src=${Healthcare7Image} alt="healthcare" />
                    </div>
                    <div class="wrapper">
                        <h5 class="heading-bold uppercase text-center">Smart Wearables</h3>
                        <p>
                            Develop medical grade wearables with our proven experience in material selection, small form factor design and manufacturing flexible PCBs. With in-depth expertise in PPG sensor integration and OLED screens incorporating Bluetooth 5.0 we can support complete design, and development of wearables.
                        </p>
                    </div>
                </div>


                <div class="card-healthcare">
                    <div class="cover-img-container">
                        <img src=${Healthcare8Image} alt="healthcare" />
                    </div>
                    <div class="wrapper">
                        <h5 class="heading-bold uppercase text-center">Augmented Reality And Immersive Technology</h3>
                        <p>
                            Leverage our virtual reality platform to develop training modules and augmented reality platform for maintenance tasks.
                        </p>
                    </div>
                </div>


                <div class="card-healthcare">
                    <div class="cover-img-container">
                        <img src=${Healthcare9Image} alt="healthcare" />
                    </div>
                    <div class="wrapper">
                        <h5 class="heading-bold uppercase text-center">Connected Factories</h3>
                        <p>
                            By connecting integral factory assets through Ogive's IoT platform we enable shop-floor automation, on-demand real-time insight into factory assets, improved operational performance, optimal maintenance, and cost savings.
                        </p>
                    </div>
                </div>
                <div class="card-healthcare hide-sm-screen" />
            </div>
        </div>
        <hr class="hr"/>
        <h3 class="heading-bold" style="text-align: center;"><span class="primary-text">Sustaining</span> Engineering</h3>
        <div class="image-wrapper mxh-md margin">
            <div class="image-overflow-wrapper">
                <img src=${Healthcare2Image} alt="healthcare" class="img"/>
            </div>
        </div>

        <hr class="hr"/>
        <h3 class="heading-bold" style="text-align: center;"><span class="primary-text">Quality</span> Engineering</h3>
        <div class="certification-container">
            <div class="flex-1">
                <div class="icon-container">
                    <img src=${Healthcare4Image} alt="healthcare" class="img"/> 
                </div>
            </div>
            <div class="flex-1 hide-sm-screen">
                <div class="icon-container">
                    <img src=${Healthcare3Image} alt="healthcare" class="img"/> 
                </div>
            </div>
        </div>
        <div class="health-row">
                <ul class="ul arrow-light p-l-32 health-list">
                    <li class="li body-regular">Remediation</li>
                    <li class="li body-regular">Corrective action/preventive action</li>
                    <li class="li body-regular">QMS development</li>
                    <li class="li body-regular">Product design control</li>
                    <li class="li body-regular">Supplier quality assurance services</li>
                    <li class="li body-regular">QSR compliance with 21 CFR 820</li>

                </ul>

                <div class="certification-container show-sm-screen">
                    <div class="flex-1">
                        <div class="icon-container">
                            <img src=${Healthcare3Image} alt="healthcare" class="img"/> 
                        </div>
                    </div>
                </div>
                <ul class="ul arrow-light p-l-32 health-list">
                    <li class="li body-regular">IVDR and MDR compliance</li>
                    <li class="li body-regular">Country specific regulatory filings and submissions</li>
                    <li class="li body-regular">Environmental compliance (RoHS, REACH, WEEE)</li>
                    <li class="li body-regular">Risk management services per ISO 14971</li>
                    <li class="li body-regular">Responding to FDA 483 observations, warning letters, and Notified Body audit findings</li>
                    <li class="li body-regular">Post Approval Change Control</li>
                </ul>
            </div>
    `,
};
