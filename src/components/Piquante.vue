<template>
    <div class="container">
        <Header />

        <div class="piquante">
            <img src="../assets/piquante.jpg" alt="photo Sopeckocko" />
            <div>
                <h1>SoPeckocko</h1>
                <p>
                    Projet 6 du parcours Développeur Web OpenClassrooms
                </p>
                <p>
                    L'objectif du projet est de construire une API sécurisée
                    pour une application d'avis gastronomique.
                </p>

                <h3>Technologies Utilisées</h3>

                <p>
                    Node.JS, Express, MongoDB
                </p>
                <div class="lien">
                    <a
                        href="https://github.com/EUrru31/-So-Pekocko--NodeJS-MongoDB-OpenClassrooms"
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "Piquante",
    components: { Header, Footer },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="css" scoped>
.piquante {
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
    .piquante {
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
