import { SERVICES } from "@/scripts/constants/routes";

export const SERVICES_ROUTE = SERVICES;
export const EMBEDDED_ROUTE = `${SERVICES_ROUTE}/0`;
export const IOT_ROUTE = `${SERVICES_ROUTE}/1`;
export const AI_ROUTE = `${SERVICES_ROUTE}/2`;
export const IMMERSIVE_ROUTE = `${SERVICES_ROUTE}/3`;
export const QUANTUM_ROUTE = `${SERVICES_ROUTE}/4`;
export const DIGITAL_TWINNING_ROUTE = `${SERVICES_ROUTE}/5`;
export const BLOCKCHAIN_ROUTE = `${SERVICES_ROUTE}/6`;
export const CLOUD_ROUTE = `${SERVICES_ROUTE}/7`;
export const ROBOTICS_ROUTE = `${SERVICES_ROUTE}/8`;
export const CYBER_SECURITY_ROUTE = `${SERVICES_ROUTE}/9`;
export const NOT_AVAILABLE_ROUTE = `${SERVICES_ROUTE}/404`;

// This is to check whether we have the data for the requested
// url or not.

export const LIST_OF_AVAILABLE_ROUTES = [
    EMBEDDED_ROUTE,
    IOT_ROUTE,
    AI_ROUTE,
    IMMERSIVE_ROUTE,
    QUANTUM_ROUTE,
    DIGITAL_TWINNING_ROUTE,
    BLOCKCHAIN_ROUTE,
    CLOUD_ROUTE,
    ROBOTICS_ROUTE,
    CYBER_SECURITY_ROUTE,
];
