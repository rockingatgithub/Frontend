/**
 * This code needs to be move in different place.
 * This is solely for the purpose to mock backend.
 */

import * as INDUSTRIES_ROUTES from "@/views/Industries/data/routes";
import * as SERVICES_ROUTES from "@/views/ServicesAndSolutions/data/routes";
import ogiveProducts from "@/views/Products/data/card";

export const ogiveTechnologiesCardData = [
    {
        title: "Artificial Intelligence",
        link: SERVICES_ROUTES.AI_ROUTE,
        animationClass: "slide-in-animation",

    },
    {
        title: "Blockchain",
        link: SERVICES_ROUTES.BLOCKCHAIN_ROUTE,
        animationClass: "slide-in-right-animation",
    },
    {
        title: "Cloud Computing",
        link: SERVICES_ROUTES.CLOUD_ROUTE,
        animationClass: "slide-in-animation",
    },
    {
        title: "Cybersecurity",
        link: SERVICES_ROUTES.CYBER_SECURITY_ROUTE,
        animationClass: "slide-in-animation",
    },
    {
        title: "Digital Twinning",
        link: SERVICES_ROUTES.DIGITAL_TWINNING_ROUTE,
        animationClass: "slide-in-animation",
    },
    {
        title: "Embedded Systems",
        link: SERVICES_ROUTES.EMBEDDED_ROUTE,
        animationClass: "slide-in-right-animation",
    },
    {
        title: "Immersive Reality",
        link: SERVICES_ROUTES.IMMERSIVE_ROUTE,
        animationClass: "slide-in-animation",
    },
    {
        title: "IOT",
        link: SERVICES_ROUTES.IOT_ROUTE,
        animationClass: "slide-in-right-animation",
    },
    {
        title: "Quantum Computing",
        link: SERVICES_ROUTES.QUANTUM_ROUTE,
        animationClass: "slide-in-animation",
    },
    {
        title: "Robotics",
        link: SERVICES_ROUTES.ROBOTICS_ROUTE,
        animationClass: "slide-in-right-animation",
    },
];

export const ogiveProductsCardData = ogiveProducts;

export const treeMap = [
    {
        coords: "119, 82, 192, 115",
        alt: "manufacturing",
        link: INDUSTRIES_ROUTES.MANUFACTURING_ROUTE,
    },
    {
        coords: "353, 34, 296, 85",
        alt: "power&energy",
        link: INDUSTRIES_ROUTES.POWER_AND_ENERGY_ROUTE,
    },
    {
        coords: "367, 93, 307, 113",
        alt: "smart-cities",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "359, 126, 411, 137",
        alt: "banking&finance",
        link: INDUSTRIES_ROUTES.FINANCE_ROUTE,
    },
    {
        coords: "443, 150, 378, 162",
        alt: "consultancy-services",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "405, 205, 365, 195",
        alt: "research",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "359, 237, 325, 219",
        alt: "travel",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "390, 244, 442, 222",
        alt: "hospitality",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "480, 174, 524, 160",
        alt: "pharma",
        link: INDUSTRIES_ROUTES.PHARMA_ROUTE,
    },
    {
        coords: "490, 205, 535, 222",
        alt: "logistics",
        link: INDUSTRIES_ROUTES.TRANSPORTATION_ROUTE,
    },
    {
        coords: "487, 293, 556, 302",
        alt: "administrative-aid",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "533, 331, 582, 353",
        alt: "surveilance",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "457, 359, 519, 385",
        alt: "civil&construction",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "437, 327, 482, 342",
        alt: "security",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "362, 349, 412, 369",
        alt: "e-commerce",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "176, 144, 218, 175",
        alt: "oil&gas",
        link: INDUSTRIES_ROUTES.OIL_AND_GAS_ROUTE,
    },
    {
        coords: "230, 193, 267, 263",
        alt: "agriculture",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "130, 194, 164, 229",
        alt: "fisheries",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "61, 222, 104, 260",
        alt: "healthcare",
        link: INDUSTRIES_ROUTES.HEALTHCARE_ROUTE,
    },
    {
        coords: "86, 286, 128, 320",
        alt: "consumer",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "23, 300, 65, 329",
        alt: "education",
        link: INDUSTRIES_ROUTES.NOT_AVAILABLE_ROUTE,
    },
    {
        coords: "40, 348, 90, 364",
        alt: "defence",
        link: INDUSTRIES_ROUTES.DEFENCE_ROUTE,
    },
    {
        coords: "143, 374, 193, 352",
        alt: "aerospace",
        link: INDUSTRIES_ROUTES.AEROSPACE_ROUTE,
    },
];
