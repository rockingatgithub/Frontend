// Data for card

// Icons
import RakshakImage from "@/assets/images/png/misc/wrench.png";
import ChaalakImage from "@/assets/images/png/misc/chalak.png";
import EklavyaImage from "@/assets/images/png/misc/fire.png";
import SugamImage from "@/assets/images/png/misc/monitor.png";
import PehchaanImage from "@/assets/images/png/misc/pehchan.png";
import SangrahImage from "@/assets/images/png/misc/sangrah.png";
import SwyamImage from "@/assets/images/png/misc/robot.png";
import GarudImage from "@/assets/images/png/misc/eagle.png";
import AyushmaanImage from "@/assets/images/png/misc/sport.png";
import NetraImage from "@/assets/images/png/misc/binoculars.png";
import SamvaadImage from "@/assets/images/png/misc/chatbot.png";

// Hover Image
import RakshakHoverImage from "@/assets/images/png/products/rakshak.jpg";
import ChaalakHoverImage from "@/assets/images/png/products/chaalak.png";
import EklavyaHoverImage from "@/assets/images/png/products/eklavya.png";
import SugamHoverImage from "@/assets/images/png/products/blockchain.png";
import PehchaanHoverImage from "@/assets/images/png/products/pehchaan.png";
import SangrahHoverImage from "@/assets/images/png/products/sangrah.png";
import SwyamHoverImage from "@/assets/images/png/products/swayam.png";
import GarudHoverImage from "@/assets/images/png/products/garud.png";
import AyushmaanHoverImage from "@/assets/images/png/products/ayushmaan.png";
import NetraHoverImage from "@/assets/images/png/products/netra.png";
import SamvaadHoverImage from "@/assets/images/png/products/samvaad.png";

import * as PRODUCTS_ROUTES from "./routes";

export default [
    {
        link: PRODUCTS_ROUTES.RAKSHAK_ROUTE,
        title: "Rakshak",
        description: "AI enabled Predictive Maintenance suite for Equipment health monitoring.Aided with BOTs for user convenience, existing ERP/SAP customisation and upgradation.",
        icon: RakshakImage,
        hoverImage: RakshakHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.SANGRAH_ROUTE,
        title: "Sangrah",
        description: "Inventory & warehouse automation solution. Can be configured to work with Rakshak enabling a fully automated end-to-end process automation from maintenance to procurement.",
        icon: SangrahImage,
        hoverImage: SangrahHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.CHAALAK_ROUTE,
        title: "Chaalak",
        description: "Fleet   health   monitoring   & tracking   solution.   This product   is   aided   with   driver behavior  monitoring  and  fuel consumption features.",
        icon: ChaalakImage,
        hoverImage: ChaalakHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.PEHCHAAN_ROUTE,
        title: "Pehchaan",
        description: "AI based security & surveillance system meant for attendance monitoring, visitor management, intruder detection.",
        icon: PehchaanImage,
        hoverImage: PehchaanHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.GARUD_ROUTE,
        title: "Garud",
        description: "UAV ( Service / Product ) Customised solution for deploying aerial or under water platform with desired payload and operational specification.SWARM concept is also offered.",
        icon: GarudImage,
        hoverImage: GarudHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.SUGAN_ROUTE,
        title: "Sugam",
        description: "Blockchain  integrated  with AI   solution   for   land records, education & health care automation solution.",
        icon: SugamImage,
        hoverImage: SugamHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.EKLAVYA_ROUTE,
        title: "Eklavya",
        description: "Simulators   for   various systems(we   are   certified production   agency   for   a specified   class   of   simulators for   homeland   and   defense application",
        icon: EklavyaImage,
        hoverImage: EklavyaHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.SWYAM_ROUTE,
        title: "Swayam",
        description: "Robotic solutions for defense   and   warehouse operations   automation",
        icon: SwyamImage,
        hoverImage: SwyamHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.AYUSHMAAN_ROUTE,
        title: "Ayushmaan",
        description: "An AI based Gym and wellness clinic automation with prescriptive  analytics to optimum diet, exercise routine etc, Virtual assistant & real time recognition of members.",
        icon: AyushmaanImage,
        hoverImage: AyushmaanHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.NETRA_ROUTE,
        title: "Netra",
        description: "Augmented Reality Glasses with built in AI (under development)",
        icon: NetraImage,
        hoverImage: NetraHoverImage,
    },
    {
        link: PRODUCTS_ROUTES.SAMVAAD_ROUTE,
        title: "Samvaad",
        description: "This is a voice/text based application and leads to building up of an intelligent platform that binds together different modules of SAP",
        icon: SamvaadImage,
        hoverImage: SamvaadHoverImage,
    },
];
