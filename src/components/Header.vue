<template>
    <div class="container">
        <nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li>
                        <a href="/">Accueil</a>
                    </li>

                    <li>
                        <a href="/#apropos">Présentation</a>
                    </li>

                    <li>
                        <a href="/#projet">Projets</a>
                    </li>

                    <li>
                        <a href="/#service">Services</a>
                    </li>

                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="containerLogo">
                <img src="../assets/logo.png" alt="logo" class="logo" />
            </div>
            <div class="menuDesktop">
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>

                    <li>
                        <a href="/#apropos">Présentation</a>
                    </li>

                    <li>
                        <a href="/#projet">Projets</a>
                    </li>

                    <li>
                        <a href="/#service">Services</a>
                    </li>

                    <li>
                        <a href="/#contact" class="contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style lang="css" scoped>
body {
    margin: 0;
    padding: 0;
}
.containerLogo {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
}
.logo {
    width: 30%;
}
a {
    text-decoration: none;
    color: #ffffff;
    opacity: 1;
    font-size: 1.5em;
    font-weight: 400;
    transition: 200ms;
}
a:hover {
    opacity: 0.5;
}
ul {
    padding-top: 25px;
    list-style-type: none;
    display: unset;
}

nav {
    background-color: #000000;
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 70px;
    top: 0;
}

#menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
}

#menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
}

#menuToggle span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: rgb(4, 152, 252);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: white;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    position: absolute;
    width: 110%;
    height: 330px;
    box-shadow: 0 0 10px #85888c;
    margin: -50px 0 0 -50px;
    padding-left: 50px;
    padding-top: 80px;
    background-color: rgb(4, 152, 252);
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
    padding: 10px 20px;
    transition-delay: 2s;
}

#menuToggle input:checked ~ ul {
    transform: none;
}
.menuDesktop {
    display: none;
}
@media screen and (min-width: 581px) and (max-width: 1024px) {
    .logo {
        width: 25%;
    }
    nav {
        height: 110px;
    }
    #menu {
        width: 35%;
        border-radius: 15px;
    }
}
@media screen and (min-width: 1025px) {
    nav {
        height: 110px;
        display: flex;
        flex-direction: row;
    }
    .containerLogo {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .logo {
        width: 250px;
    }
    #menuToggle {
        display: none;
    }
    .menuDesktop {
        display: block;
        align-items: center;
    }
    .menuDesktop ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .menuDesktop li {
        margin-right: 40px;
        margin-left: 40px;
    }
    .contact {
        background-color: rgb(4, 152, 252);
        border-radius: 5px;
        padding: 10px;
    }
}
</style>
