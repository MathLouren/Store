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
}
.input_search input{
    width: 100%;
    max-width: 600px;
    padding: 10px 5px;
    outline: none;
    border: 2px solid rgb(126, 126, 126);
    transition: .4s;
    }
.input_search img{
    margin-left: -35px;
    cursor: pointer;
}
.input_search input:focus{
    border: 2px solid rgb(44, 44, 44);
}

</style>