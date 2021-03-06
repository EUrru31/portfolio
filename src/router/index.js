import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Reservia from "@/components/Reservia.vue";
import Ohmyfood from "@/components/Ohmyfood.vue";
import Piquante from "@/components/Piquante.vue";
import Groupomania from "@/components/Groupomania.vue";
import Orinoco from "@/components/Orinoco.vue";
import CV from "@/components/CV.vue";

const routes = [
    {
        name: "Index",
        path: "/",
        component: Index,
        meta: {
            title: "Etienne Urru",
            description: "Page de présentation d'Etienne Urru, Portfolio",
        },
    },
    {
        name: "Reservia",
        path: "/#Reservia",
        component: Reservia,
        meta: {
            title: "Etienne Urru Reservia",
            description:
                "Page de présentation du projet Reservia d'OpenClassRoom fait par Etienne Urru",
        },
    },
    {
        name: "Ohmyfood",
        path: "/#Ohmyfood",
        component: Ohmyfood,
        meta: {
            title: "Etienne Urru Ohmyfood",
            description:
                "Page de présentation du projet Ohmyfood d'OpenClassRoom fait par Etienne Urru",
        },
    },
    {
        name: "Piquante",
        path: "/#Piquante",
        component: Piquante,
        meta: {
            title: "Etienne Urru Piquante",
            description:
                "Page de présentation du projet Piquante d'OpenClassRoom fait par Etienne Urru",
        },
    },
    {
        name: "Orinoco",
        path: "/#Orinoco",
        component: Orinoco,
        meta: {
            title: "Etienne Urru Orinoco",
            description:
                "Page de présentation du projet Orinoco d'OpenClassRoom fait par Etienne Urru",
        },
    },
    {
        name: "Groupomania",
        path: "/#Groupomania",
        component: Groupomania,
        meta: {
            title: "Etienne Urru Groupomania",
            description:
                "Page de présentation du projet Groupomania d'OpenClassRoom fait par Etienne Urru",
        },
    },
    {
        name: "CV",
        path: "/#CV",
        component: CV,
        meta: {
            title: "Etienne Urru CV",
            description: "CV Etienne Urru",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes= Routes,
    mode= 'hash'
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
