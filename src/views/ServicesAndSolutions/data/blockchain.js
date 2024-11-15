// Blockchain page data
import Block1Image from "@/assets/images/png/services/blockchain-1.png";
import Block2Image from "@/assets/images/png/services/blockchain-2.png";

import { BLOCKCHAIN_ROUTE } from "./routes";

export default {
    link: BLOCKCHAIN_ROUTE,
    title: "Blockchain",
    description: {
        intro: `
        <div class="image-wrapper mxh-md margin">
            <img src=${Block1Image} alt="Blockchain" class="img flex-1 zoom-in-animation delay-350"/>
            <div class="hover right" style="flex-direction: column; justify-content: center">
                A blockchain is, in the simplest of terms, a time-stamped series of immutable records of data that is managed by a cluster of computers not owned by any single entity. Each of these blocks of data (i.e. block) is secured and bound to each other using cryptographic principles (i.e. chain).
                <ul class="p-r-32 p-l-32 m-t-32">
                    <li class="li body-regular">It is not owned by a single entity, hence it is decentralized</li>
                    <li class="li body-regular">The data is cryptographically stored inside</li>
                    <li class="li body-regular">The blockchain is immutable, so no one can tamper with the data that is inside the blockchain</li>
                    <li class="li body-regular">The blockchain is transparent so one can track the data if they want to</li>
                </ul>
            </div>
        </div>

        <div class="image-wrapper mxh-md margin">
            <img src=${Block2Image} alt="Blockchain" class="img flex-1 zoom-in-animation delay-350"/>
            <p class="hover left">
                Ogive technology has created Blockchain enabled land record & revenue system. The Modular platform of our blockchain build is Most suitable for education and healthcare system.<br/><br/>
                Our Warehouse management module is working on the concept of Smart contracts to make the automation of remote systems management possible. 
                A combination of software, sensors, and the network facilitates an exchange of data between objects and mechanisms. The result increases system efficiency and improves cost monitoring.

            </p>
        </div>
        <ul class="ul arrow-light p-r-32 p-l-32">
            <li class="li body-regular slide-in-animation delay-350">We are also working for railway ticketing, pay per article concept for news and blogs and revolutionize the real-estate sector by making it more transparent. With integrated AI and Immersive technologies the experience will be completely different.</li>
        </ul>
        `,
        sections: [],
    },
};
