<template>
        <router-link to="/" class="logo">
            <img src="../assets/archive.svg" alt="logo da pagina">
            <span>STORE</span>
        </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    text-decoration: none;
}

span{
    font-size: 1.2rem;
    font-weight: 500;
    width: 30%;
    text-decoration: none;
    color: #000;
}

</style>