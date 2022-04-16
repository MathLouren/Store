<template>
  <section class="container_login">
      <transition mode="out-in">
          <div class="login">
              <h2>Entrar</h2>
              <form>
                  <label for="login">Login</label>
                  <input type="text" name="login">
                  <label for="password">Senha</label>
                  <input type="text" name="password">
              </form>
          </div>
      </transition>
  </section>
</template>

<script>
export default {
    name:"login"
}
</script>

<style scoped>

.container_login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
}

.login{
    width: 400px;
    height: 500px;
    background-color: #fff;
}

</style>