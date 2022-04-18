<template>
  <section>
      <div class="register">
          <h2>Registre-se</h2>
          <form>
              <input type="text" placeholder="Nome">
              <input type="text" placeholder="Sobrenome">
              <input type="text" placeholder="Email">
              <input type="text" placeholder="Senha">
              <input type="text" placeholder="Confirme sua senha">
          </form>
          <button class="btn">Registrar</button>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

h2{
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px 0;
    color: rgb(60, 60, 60);
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
}

.register{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
    padding: 10px;
    margin: 0 10px;
}

</style>