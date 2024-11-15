// Immersive page data
import IR1Image from "@/assets/images/png/services/ir-1.png";
import IR2Image from "@/assets/images/png/services/ir-2.png";
import IR3Image from "@/assets/images/png/services/ir-3.png";
import IR4Image from "@/assets/images/png/services/ir-4.png";

import { IMMERSIVE_ROUTE } from "./routes";

export default {
    link: IMMERSIVE_ROUTE,
    title: "Immersive Reality",
    description: {
        intro: `
        <div class="image-wrapper margin col-sm">
            <img src=${IR3Image} alt="Immersive Reality" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover right">
                Augmented Reality (AR)adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokémon Go
            </p>
        </div>

        <div class="image-wrapper margin col-sm">
            <img src=${IR2Image} alt="Immersive Reality" class="img flex-1 slide-in-right-animation delay-350"/>
            <p class="hover left">
                Virtual Reality (VR) implies a complete immersion experience that shuts out the physical world. Using VR devices such as HTC Vive, Oculus Rift or Google Cardboard, users can be transported into a number of real-world and imagined environments such as the middle of a squawking penguin colony or even the back of a dragon.
            </p>
        </div>

        <div class="image-wrapper margin col-sm">
            <img src=${IR1Image} alt="Immersive Reality" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover right">
                Mixed Reality (MR) experience, which combines elements of both AR and VR, real-world and digital objects interact. Mixed reality technology is just now starting to take off with Microsoft’s HoloLens one of the most notable early mixed reality apparatuses.
            </p>
        </div>

        <div class="image-wrapper margin col-sm">
            <img src=${IR4Image} alt="Immersive Reality" class="img flex-1 slide-in-animation delay-350"/>
            <p class="hover left">
                Extended Reality (XR) is an umbrella term that covers all of the various technologies that enhance our senses, whether they’re providing additional information about the actual world or creating totally unreal, simulated worlds for us to experience. It includes VR, AR & MR technologies. Augmented Reality (AR)adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokémon Go
            </p>
        </div>
        `,
        sections: [],
    },
};
