// Cloud page data
import Cloud1Image from "@/assets/images/png/services/cloud-1.png";
import Cloud2Image from "@/assets/images/png/services/cloud-2.png";

import { CLOUD_ROUTE } from "./routes";

export default {
    link: CLOUD_ROUTE,
    title: "Cloud Computing",
    description: {
        intro: `
        <div class="image-wrapper margin col-sm">
            <img src=${Cloud1Image} alt="Cloud" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover right">
                The practice of using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer.
            </p>
        </div>

        <div class="image-wrapper margin col-sm">
            <img src=${Cloud2Image} alt="Cloud" class="img flex-1 slide-in-right-animation delay-350"/>
            <p class="hover left">
                Ogive Technology is facilitating its customer as per requirement in using its various AI+ IoT product based at solution at different geographical location with secure private or public cloud network. We are also providing different level of encryption for cloud enabled product of our clients to make it more secure in public cloud to make it part of the digital transformation. As part of our Hybrid cloud configuration we also provide opportunity to the customer to keep their native development in server and other mundane items in public cloud and sync it seamlessly with adequate firewalls in place
            </p>
        </div>
        `,
        sections: [],
    },
};
