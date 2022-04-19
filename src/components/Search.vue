<template>
   <section>
       <section class="search_container">
          <div class="input_search">
              <input type="text" placeholder="Busque seu produto...">
              <img src="../assets/search.svg" alt="search">
          </div>
      </section>
   </section>
</template>

<script>
export default {
    name:"Search",
}
</script>

<style scoped>

section{
    margin: 10px 0;
}

.input_search{
    display: flex;
    justify-content: center;
    margin: 0 11px 0 5px;
}
.input_search input{
    width: 100%;
    max-width: 700px;
    padding: 10px 7px;
    padding-left: -90px;
    outline: none;
    transition: .4s;
    font-size: 1.1rem;
    transition: 0.2s;
}

.input_search img{
    z-index: 1000;
    margin-left: -35px;
    cursor: pointer;
}
</style>