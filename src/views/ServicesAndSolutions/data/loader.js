// This is to load page data dynamically

// Here ordering is important.
export default [
    {
        data: () => import(/* webpackChunkName: "service-page-embedded" */ "./embedded"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-iot" */ "./iot"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-ai" */ "./ai"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-immersive" */ "./immersive"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-quantum-computing" */ "./quantum"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-digital-twinning" */ "./digital"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-block" */ "./blockchain"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-cloud" */ "./cloud"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-robotics" */ "./robotics"),
    },
    {
        data: () => import(/* webpackChunkName: "service-page-cybersecurity" */ "./cybersecurity"),
    },
];
