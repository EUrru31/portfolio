<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
#app {
    overflow-x: hidden;
}
body {
    font-family: "Poppins", sans-serif;
    background-color: black;
    color: white;
}
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
hr {
    width: 3%;
    height: 10px;
    margin-top: 60px;
    margin-bottom: 100px;
    background-color: grey;
    border-radius: 10px;
    border: none;
}
.separation p {
    margin: auto;
    display: flex;
    justify-content: center;
    color: rgb(4, 152, 252);
}
h2 {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
}
h3 {
    font-size: 2.5rem;
}
h4 {
    font-size: 2rem;
}
</style>
