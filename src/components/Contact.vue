<template>
    <div class="pageContact">
        <div id="contact" class="separation">
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
            <p>I</p>
        </div>

        <div class="contact">
            <div>
                <h3>Demander un devis</h3>
                <p>
                    Si vous souhaitez me contacter afin de réaliser vos projets:
                </p>

                <div class="contactInformation">
                    <i class="fas fa-mobile-alt"></i>
                    <div class="infos">
                        <p class="infosTitle">Téléphone</p>
                        <p>07 83 01 88 11</p>
                    </div>
                </div>
                <div class="contactInformation">
                    <i class="fas fa-at"></i>
                    <div class="infos">
                        <p class="infosTitle">Email:</p>
                        <p>etienne.urru@cdev.fr</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="reseau">
                    <h4>Réseaux</h4>
                    <p>Retrouver moi également sur les réseaux:</p>
                    <div class="reseauList">
                        <a
                            href="mailto=etienne.urru@conceptdev-web.fr"
                            target="_blank"
                            ><i class="fas fa-envelope-square"></i
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/etienneurru"
                            target="_blank"
                            ><i class="fab fa-linkedin"></i
                        ></a>
                        <a href="https://github.com/EUrru31" target="_blank"
                            ><i class="fab fa-github-square"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style lang="css" scoped>
.contact {
    text-align: center;
    font-size: 1.3rem;
}
.contactInformation {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.infos {
    margin-left: 40px;
}
a {
    font-size: 4em;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
}

@media screen and (min-width: 1025px) {
    .contact {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 70px;
        margin-bottom: 70px;
    }
}
</style>
