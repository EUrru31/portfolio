<template>
    <div class="presentation">
        <div id="apropos" class="separation">
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
        </div>
        <div class="presentationPage">
            <div class="presentationPhoto">
                <img src="../assets/moi.jpg" alt="photo Etienne Urru" />
            </div>
            <div class="presentationText">
                <h2>Présentation</h2>
                <p>
                    Bonjour, je suis Etienne Urru
                </p>
                <p>
                    Ayant travaillé 14 ans dans le domaine de la logistique,
                    j'ai pu acquérir différentes compétences comme le respect de
                    la hierarchie, le sérieux dans le travail ainsi que
                    l'organisation.
                </p>
                <p>
                    Il y a un an, j'ai pris la décision de commencer ma
                    reconversion professionnelle. Je me suis donc lancé dans un
                    projet qui me tenait à coeur depuis plusieurs années, le
                    développement web. Suite a cette décision, je me suis formé
                    en tant que développeur web fullstack.
                </p>
                <p>
                    Ayant désormais obtenu mon diplôme, je m'épanouis dans cette
                    nouvelle vocation et je continue dans cette voie avec envie
                    et détermination.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Apropos",
};
</script>

<style lang="css" scoped>
.presentation {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
}

.presentationPhoto {
    display: none;
}
.presentationText {
    margin-top: 40px;
    font-size: 1.3rem;
}
@media screen and (min-width: 1025px) {
    .presentationPhoto {
        display: block;
        margin-left: 150px;
    }
    .presentationPage {
        display: flex;
        flex-direction: row;
        margin-bottom: 100px;
        margin-top: 100px;
    }
    .presentationText {
        width: 50%;
        margin-left: auto;
        margin-right: 150px;
    }
}
</style>
