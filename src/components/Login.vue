<template>
  <section class="container_login">
          <div class="login">
              <h2>Entrar</h2>
              <form>
                  <label for="login">Login</label>
                  <input type="text" name="login">
                  <label for="password">Senha</label>
                  <input type="text" name="password">
              </form>
          </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.container_login{
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.login{
    width: 400px;
    height: 500px;
}

</style>