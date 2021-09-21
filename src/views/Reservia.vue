<template>
    <div class="container">
        <Header />

        <div class="reservia">
            <img src="../assets/Reservia.png" alt="photo Réservia" />
            <div>
                <h1 class="reservia__title">Réservia</h1>
                <p>
                    Projet 2 du parcours Développeur Web OpenClassrooms
                </p>
                <p>
                    L'objectif du projet est d'intégrer le prototype d'un site
                    proposant aux usagers de trouver des hébergements et des
                    activités dans la ville de leur choix.
                </p>
                <p>
                    Un design basé sur les principes du Material Design nous est
                    proposé.
                </p>

                <h3>Technologies Utilisées</h3>

                <p>
                    HTML, CSS
                </p>
                <div class="lien">
                    <a
                        href="https://eurru31.github.io/Reservia-HTML-CSS-OpenClassrooms/"
                        target="_blank"
                        >Lien vers le site</a
                    >
                    <a
                        href="https://github.com/EUrru31/Reservia-HTML-CSS-OpenClassrooms"
                        target="_blank"
                        >Lien vers le Github</a
                    >
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Reservia",
    components: { Header, Footer },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="css" scoped>
.reservia {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 50px;
    text-align: center;
}
img {
    width: 100%;
    border-radius: 5px;
    margin-top: 50px;
}
.lien {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
}
a {
    background-color: rgb(4, 152, 252);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 20px;
    text-decoration: none;
}
@media screen and (min-width: 1025px) {
    .reservia {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 75vh;
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 90px;
    }
    img {
        height: 95%;
        width: auto;
        margin-right: 60px;
    }
    .container {
        overflow-y: hidden;
    }
}
</style>
