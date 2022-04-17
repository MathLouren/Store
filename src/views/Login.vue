<template>
    <transition mode="out-in">
    <div>
        <header>
            <Logo />
        </header>
        <section class="container_login">
                <div class="login">
                    <h2>Login</h2>
                    <form>
                        <input type="text" name="login" placeholder="Login">
                        <input type="text" name="password" placeholder="Senha">
                    </form>
                    <p>Esqueceu sua senha?</p>
                    <button>Entrar</button>
                    <button>Novo ? Crie sua conta</button>
                </div>
        </section>
    </div>
    </transition>
</template>

<script>
import Logo from "@/components/Logo.vue"
export default {
    name:"login",
    components:{
        Logo
    }
}
</script>

<style scoped>

header{
    max-width: 1400px;
    margin: auto;
    height: 60px;
    padding: 10px 0;
}

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
}

button{
    margin: 10px 0;
    background-color: rgb(60, 60, 60);
    color: #fff;
    font-size: 1rem;
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
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