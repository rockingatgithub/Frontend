// This is to load page data dynamically

// Here ordering is important.
export default [
    {
        data: () => import(/* webpackChunkName: "industries-page-defence" */ "./defence"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-finance" */ "./finance"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-healthcare" */ "./healthcare"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-manufacturing" */ "./manufacturing"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-transportation" */ "./transportation"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-power-and-energy" */ "./powerAndEnergy"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-oil-and-gas" */ "./oilAndGas"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-aerospace" */ "./aerospace"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-pharma" */ "./pharma"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-automotive" */ "./automotive"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-mining" */ "./mining"),
    },
    {
        data: () => import(/* webpackChunkName: "industries-page-cybersecurity" */ "./cybersecurity"),
    },
];
