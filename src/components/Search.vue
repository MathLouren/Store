<template>
   <section>
       <section class="search_container">
          <div class="input_search">
              <input type="text">
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
    margin: 20px 0;
}

.input_search{
    display: flex;
    justify-content: center;
    margin: 0 11px 0 5px;
}
.input_search input{
    width: 100%;
    max-width: 700px;
    padding: 10px 5px;
    padding-left: -40px;
    outline: none;
    border: 2px solid rgb(126, 126, 126);
    transition: .4s;
    font-size: 1.1rem;
}
.input_search img{
    margin-left: -35px;
    cursor: pointer;
}
.input_search input:focus{
    border: 2px solid rgb(44, 44, 44);
}

</style>