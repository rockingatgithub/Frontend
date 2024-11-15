import { PRODUCTS } from "@/scripts/constants/routes";

export const PRODUCTS_ROUTE = PRODUCTS;

export const RAKSHAK_ROUTE = `${PRODUCTS_ROUTE}/0`;
export const SANGRAH_ROUTE = `${PRODUCTS_ROUTE}/1`;
export const CHAALAK_ROUTE = `${PRODUCTS_ROUTE}/2`;
export const PEHCHAAN_ROUTE = `${PRODUCTS_ROUTE}/3`;
export const GARUD_ROUTE = `${PRODUCTS_ROUTE}/4`;
export const SUGAN_ROUTE = `${PRODUCTS_ROUTE}/5`;
export const EKLAVYA_ROUTE = `${PRODUCTS_ROUTE}/6`;
export const SWYAM_ROUTE = `${PRODUCTS_ROUTE}/7`;
export const AYUSHMAAN_ROUTE = `${PRODUCTS_ROUTE}/8`;
export const NETRA_ROUTE = `${PRODUCTS_ROUTE}/9`;
export const COVID_19_ROUTE = `${PRODUCTS_ROUTE}/10`;
export const SAMVAAD_ROUTE = `${PRODUCTS_ROUTE}/11`;
export const NOT_AVAILABLE_ROUTE = `${PRODUCTS_ROUTE}/404`;

// This is to check whether we have the data for the requested
// url or not.

export const LIST_OF_AVAILABLE_ROUTES = [
    RAKSHAK_ROUTE,
    SANGRAH_ROUTE,
    CHAALAK_ROUTE,
    PEHCHAAN_ROUTE,
    GARUD_ROUTE,
    SUGAN_ROUTE,
    EKLAVYA_ROUTE,
    SWYAM_ROUTE,
    AYUSHMAAN_ROUTE,
    NETRA_ROUTE,
    COVID_19_ROUTE,
    SAMVAAD_ROUTE,
];
