<template>
   <div class="center_content">
          <div class="input_search">
              <input type="text">
              <img src="../assets/search.svg" alt="search">
          </div>
      </div>
</template>

<script>
export default {
    name:"Buscar",
}
</script>

<style scoped>
.center_content{
    width: 1000px;
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 0 5px;
}

.center_content img,
.right_content img{
    height: 27px;
}

.input_search{
    width: 100%;
    display: flex;
    align-items: center;
}

.input_search img{
    margin-left: -34px;
    cursor: pointer;
}

.input_search input{
    width: 100%;
    max-width: 600px;
    padding: 10px 7px;
    outline: none;
    border: 2px solid rgb(44, 44, 44);
    padding-right: 45px;
}
</style>