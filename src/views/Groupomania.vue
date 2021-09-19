<template>
    <div class="container">
        <Header />

        <div class="groupomania">
            <img src="../assets/groupomania.png" alt="photo Groupomania" />
            <div>
                <h1>Groupomania</h1>
                <p>
                    Projet 7 du parcours Développeur Web OpenClassrooms
                </p>
                <p>
                    L'objectif du projet est de construire un réseau social
                    interne pour les employés de Groupomania. Le but de cet
                    outil est de faciliter les interactions entre collègues. Le
                    département RH de Groupomania a laissé libre cours à son
                    imagination pour les fonctionnalités du réseau et a imaginé
                    plusieurs briques pour favoriser les échanges entre
                    collègues.
                </p>

                <h3>Technologies Utilisées</h3>

                <p>
                    Vue.JS, MySQL, Node.JS
                </p>
                <div class="lien">
                    <a
                        href="https://github.com/EUrru31/Groupomania-VueJS-NodeJS--Mysql-Openclassrooms"
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
    name: "Groupomania",
    components: { Header, Footer },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="css" scoped>
.groupomania {
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
</style>
