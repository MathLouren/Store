<template>
    <transition mode="out-in">
        <div>
            <section class="container_login">
                    <div class="login">
                        <h2>Login</h2>
                        <form>
                            <input type="text" name="login" placeholder="Login">
                            <input type="text" name="password" placeholder="Senha">
                        </form>
                        <p>Esqueceu sua senha?</p>
                        <button class="btn">Entrar</button>
                            <router-link class="btn" to="/register">
                                Novo ? Crie sua conta
                            </router-link>
                    </div>
            </section>
        </div>
    </transition>
</template>

<script>
export default {
    name:"login",
    components:{
    }
}
</script>

<style scoped>

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px 0;
    color: rgb(60, 60, 60);
}

.container_login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
}

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
    padding: 10px;
    margin: 0 10px;
}

p{
    display: block;
    text-align: start;
    cursor: pointer;
    margin: 10px 0 5px 0;
}
p:hover{
    text-decoration: underline;
}

</style>