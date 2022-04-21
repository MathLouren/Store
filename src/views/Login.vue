<template>
    <transition mode="out-in">
        <div>
            <section class="container_login">
                    <div class="login">
                        <h2>Login</h2>
                        <form>
                            <input type="text" name="login" placeholder="Email" v-model="$v.email.$model">
                            <p v-if="$v.email.$error" class="error">Campo inválido</p>
                            <input type="text" name="password" placeholder="Senha" v-model="$v.password.$model">
                            <p v-if="$v.password.$error" class="error">Campo inválido</p>
                            <p class="esqueceu">Esqueceu sua senha?</p>
                        </form>
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
import { required , email } from "vuelidate/lib/validators";

export default {
    name:"login",
    data(){
        return{
            email:"",
            password:""
        }
    },
    components:{
    },
    validations:{
        email: { required , email },
        password: { required }
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
    box-shadow: 0 4px 8px rgba(41, 42, 44, 0.5);
    padding: 10px;
    margin: 0 10px;
}

.esqueceu{
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin: 10px 0;
}
.esqueceu:hover{
    text-decoration: underline;
    color: rgb(94, 94, 94);
}

.error{
    width: 100%;
    text-align: start;
    color: red;
    margin: 5px 0;
    font-size: 0.9rem;
}
.error:hover{
    text-decoration: none;
}

</style>