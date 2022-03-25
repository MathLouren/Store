<template>
  <section>
      <div class="container">
          <div class="produtos">
              <img src="../assets/roupa.webp" alt="">
              <img src="../assets/roupa2.webp" alt="">
              <img src="../assets/roupa3.webp" alt="">
              <img src="../assets/roupa4.webp" alt="">
              <img src="../assets/roupa5.webp" alt="">
              <img src="../assets/roupa6.webp" alt="">
          </div>
      </div>
  </section>
</template>

<script>

export default {
    data(){
        return{
            produtos:null
        };
    },
    methods: {
      
    },
    created(){
        this.getProdutos();
    }
}
</script>

<style scoped>

section{
    margin-bottom: 20px;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.produtos{
    display: flex;
    flex-wrap: wrap;
}

.produtos img{
    margin: 5px;
}

h1{
    font-size: 1.8rem;
}

button{
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background: none;
    border: 2px solid rgb(44, 44, 44);
    border-radius: 5px;
    transition: 0.3s;
}
button:hover{
    background-color: rgba(0, 0, 0, 0.1);
}

</style>