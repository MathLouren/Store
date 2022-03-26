<template>
  <section>
      <div class="container">
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>1000</span>
                </div>
          </div>
           <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa2.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>1000</span>
                </div>
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
    justify-content: center;
    flex-wrap: wrap;
}

.produtos img{
    margin: 15px;
    cursor: pointer;
    height: 450px;
    transition: 0.3s;
}

.produtos img:hover{
    transform: scale(1.1);
}

.produto_info{
    margin: 15px 10px;
    display: flex;
    justify-content: center;
}
.produto_info span{
    font-size: 1.2rem;
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