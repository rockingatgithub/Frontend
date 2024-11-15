// This is to load page data dynamically

// Here ordering is important.
export default [
    {
        data: () => import(/* webpackChunkName: "product-page-rakshak" */ "./rakshak"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-sangrah" */ "./sangrah"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-chaalak" */ "./chaalak"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-pehchaan" */ "./pehchaan"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-garud" */ "./garud"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-sugan" */ "./sugam"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-eklavya" */ "./eklavya"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-swyam" */ "./swayam"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-ayshmaan" */ "./ayushmaan"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-netra" */ "./netra"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-covid-19" */ "./covid_19"),
    },
    {
        data: () => import(/* webpackChunkName: "product-page-samvaad" */ "./samvaad"),
    },
];
