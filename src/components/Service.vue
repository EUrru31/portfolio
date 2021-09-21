<template>
    <div>
        <hr />
        <div class="banniere">
            <p>Une idée, un projet n'hésitez pas à demander un devis</p>
            <h2>Je suis disponible en freelance</h2>
        </div>
        <hr id="service" />
        <div class="services">
            <div class="servicesText">
                <h2>Mes Services</h2>
                <p>
                    Développeur/intégrateur freelance sur Toulouse, faites
                    appelle à moi pour l'intégration ou la création de votre
                    site. Tous les sites que je développe sont clé en main,
                    c’est-à-dire qu’il vous appartient complètement, ainsi que
                    le serveur.
                </p>
            </div>
            <div class="servicesList">
                <div class="service">
                    <h3>Intégration de maquette</h3>
                    <p>
                        Intégration de vos maquettes avec HTML / CSS /
                        Javascript.
                    </p>
                </div>
                <div class="service">
                    <h3>Site web responsive</h3>
                    <p>
                        Création de votre site, selon vos besoins et vos envies.
                        Je peux réaliser un site web adapté aux mobiles et
                        tablettes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Service",
};
</script>

<style lang="css" scoped>
.banniere {
    background-color: rgb(4, 152, 252);
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.services {
    text-align: center;
    margin-top: -60px;
}
.service {
    background-color: rgb(20, 20, 20);
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
}
@media screen and (min-width: 1025px) {
    .banniere {
        background-image: url("../assets/banniere1.jpg");
        height: 400px;
        overflow: hidden;
        text-align: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 60px;
        padding-top: 7%;
        font-size: 1.5rem;
    }
    img {
        width: 80%;
    }
    .servicesList {
        display: flex;
        flex-direction: row;
    }
    .service {
        width: 50%;
    }
}
</style>
