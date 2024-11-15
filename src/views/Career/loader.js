// This is to load page data dynamically

// Here ordering is important.
export default [
    {
        data: () => import(/* webpackChunkName: "career-hardware-design-engineer" */ "./0"),
    },
    {
        data: () => import(/* webpackChunkName: "career-java-developer" */ "./1"),
    },
    {
        data: () => import(/* webpackChunkName: "sales-executive" */ "./2"),
    },
];
