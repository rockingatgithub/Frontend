import Vue from "vue";
import VueRouter from "vue-router";

import * as ROUTES from "@/scripts/constants/routes";

Vue.use(VueRouter);

const routes = [
    {
        path: ROUTES.HOME,
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home/Home.vue"),
    },
    {
        path: ROUTES.ABOUT_US,
        name: "About Us",
        component: () => import(/* webpackChunkName: "about" */ "../views/About/About.vue"),
    },
    {
        path: ROUTES.CONTACT_US,
        name: "Contact Us",
        component: () => import(/* webpackChunkName: "contact" */ "../views/Contact/Contact.vue"),
    },
    {
        path: ROUTES.CAREER,
        name: "Career",
        component: () => import(/* webpackChunkName: "career" */ "../views/Career/Career.vue"),
    },
    {
        path: `${ROUTES.CAREER}/:id`,
        name: "Career",
        component: () => import(/* webpackChunkName: "career-page" */ "../views/Career/CareerPage.vue"),
    },
    {
        path: ROUTES.INDUSTRIES,
        name: "Industries",
        component: () => import(/* webpackChunkName: "industry" */ "../views/Industries/Industries.vue"),
    },
    {
        path: `${ROUTES.INDUSTRIES}/:id`,
        name: "Offering",
        component: () => import(/* webpackChunkName: "offering" */ "../views/Industries/Offering.vue"),
    },
    {
        path: ROUTES.SERVICES,
        name: "Services",
        component: () => import(/* webpackChunkName: "services" */ "../views/ServicesAndSolutions/ServicesAndSolutions.vue"),
    },
    {
        path: `${ROUTES.SERVICES}/:id`,
        name: "ServicesPage",
        component: () => import(/* webpackChunkName: "services-page" */ "../views/ServicesAndSolutions/ServicesPage.vue"),
    },
    {
        path: ROUTES.PRODUCTS,
        name: "Products",
        component: () => import(/* webpackChunkName: "products" */ "../views/Products/Products.vue"),
    },
    {
        path: `${ROUTES.PRODUCTS}/:id`,
        name: "ProductPage",
        component: () => import(/* webpackChunkName: "product-page" */ "../views/Products/ProductPage.vue"),
    },

    {
        path: "*",
        name: "PageNotFound",
        component: () => import(/* webpackChunkName: "page-not-found" */ "../views/PageNotFound.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
