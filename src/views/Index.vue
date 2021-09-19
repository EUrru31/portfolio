<template>
    <div>
        <Header />
        <Home />
        <Apropos />
        <Projet />
        <Service />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import Apropos from "../components/Apropos.vue";
import Projet from "../components/Projet.vue";
import Service from "../components/Service.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Index",
    components: { Header, Home, Apropos, Projet, Service, Contact, Footer },
};
</script>

<style lang="css" scoped></style>
