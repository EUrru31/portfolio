<template>
    <div>
        <div class="container">
            <p>Copyright © {{ year }} - Etienne URRU. All Rights Reserved</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    props: {
        year: {
            type: Number,
            default: new Date().getFullYear(),
        },
    },
};
</script>

<style lang="css" scoped>
.container {
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}
</style>
