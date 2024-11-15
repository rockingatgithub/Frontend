// Cyber Security Page data
import CyberSecurityImage from "@/assets/images/png/industry/cybersecurity.png";

import { CYBER_SECURITY_ROUTE } from "./routes";

export default {
    link: CYBER_SECURITY_ROUTE,
    title: "Cyber Security",
    description: {
        intro:
        `
        <div class="image-wrapper mxh-md margin">
            <img src=${CyberSecurityImage} alt="Cyber Security" class="img zoom-in-animation"/>
        </div>
        <div class="manufacturing-box">
            <div class="list-container">
                <h3 class="heading mass">Network Security</h3>
                <p class="light">Securing a computer network from intruders</p>
            </div>
    
            <div class="list-container">
                <h3 class="heading time">Application Security</h3>
                <p class="light">Keeping software and devices free of threats</p>
            </div>
    
            <div class="list-container">
                <h3 class="heading flexibility">Information Security</h3>
                <p class="light">Protects the integrity and privacy of data</p>
            </div>
    
            <div class="list-container">
                <h3 class="heading customization">Operational Security</h3>
                <p class="light">Processes and decisions for handling and protecting data assets.</p>
            </div>
    
            <div class="list-container">
                <h3 class="heading agile">Disaster Recovery</h3>
                <p class="light">Responds to a cyber-security incident or any other event that causes the loss of operations or data.</p>
            </div>
    
            <div class="list-container">
                <h3 class="heading rapid">End-user Education</h3>
                <p class="light">Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons is vital for the security of any organization.</p>
            </div>
    
        </div>
        `,
    },
};
