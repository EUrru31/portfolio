<template>
    <div>
        <div id="projet" class="separation">
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
        </div>
        <div class="projets">
            <div class="projetTitle">
                <h2>Mes projets</h2>
                <p>
                    Voici la liste des projets sur lesquels j'ai eu la chance de
                    travailler.
                </p>
            </div>
            <div class="projetsList">
                <div class="projet">
                    <a href="/Reservia"
                        ><img src="../assets/Reservia.png" alt="photo Réservia"
                    /></a>
                </div>

                <div class="projet">
                    <a href="/Ohmyfood"
                        ><img src="../assets/ohmyfood.png" alt="photo ohmyfood"
                    /></a>
                </div>

                <div class="projet">
                    <a href="/Orinoco"
                        ><img src="../assets/orinoco.jpg" alt="photo Orinoco"
                    /></a>
                </div>

                <div class="projet">
                    <a href="/Piquante"
                        ><img src="../assets/piquante.jpg" alt="photo Piquante"
                    /></a>
                </div>

                <div class="projet">
                    <a href="/Groupomania"
                        ><img
                            src="../assets/groupomania.png"
                            alt="photo Groupomania"
                    /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projet",
};
</script>

<style lang="css" scoped>
.projet {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f0f0f0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
}
.projetTitle {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-top: 40px;
}
img {
    width: 380px;
    height: 300px;
    border-radius: 5px;
}

h2 {
    font-size: 1.8rem;
}
@media screen and (min-width: 1025px) {
    .projetsList {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 40px;
    }
    .projet {
        width: 350px;
        margin: 30px;
    }
}
</style>
