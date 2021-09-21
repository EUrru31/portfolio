<template>
    <div class="container">
        <Header />

        <div class="cv">
            <img src="../assets/CV.png" alt="photo Groupomania" />
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "CV",
    components: { Header, Footer },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="css" scoped>
.cv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
}
</style>
