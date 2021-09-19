<template>
    <div class="home" id="home">
        <div class="homeText">
            <div class="homeBulle">
                <p class="homeName">
                    Je suis Etienne Urru
                </p>
            </div>
            <h1>Développeur web fullstack</h1>
            <p class="homeLangage">Vue JS, Node JS, Javascript, PHP</p>

            <div class="homeBtn">
                <a src="" class="homeButton">Mon CV</a>
                <a href="#projet" class="homeButton">Portfolio</a>
            </div>
        </div>
        <div class="homePhoto">
            <img src="../assets/moi.jpg" alt="photo Etienne Urru" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style lang="css" scoped>
img {
    width: 250px;
    height: 300px;
    margin-bottom: 40px;
}
.home {
    padding-top: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.homeText {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.homeBulle {
    background-color: rgb(4, 152, 252);
    border: none;
    border-radius: 5px;
}
.homeBtn {
    height: 100px;
    padding: 40px;
}
.homeButton {
    background-color: rgb(4, 152, 252);
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    margin-top: 50px;
    text-align: center;
    color: white;
    text-decoration: none;
}
</style>
