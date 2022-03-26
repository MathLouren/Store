<template>
  <section>
      <div class="container">
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa2.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa3.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa4.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa5.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
          <div class="produto_container">
                <div class="produtos">
                    <img src="../assets/roupa6.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
      </div>
  </section>
</template>

<script>

export default {
    data(){
        return{
            produtos:null,
            preco: 1000,
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

h1{
    font-size: 1.8rem;
}

section{
    margin-bottom: 20px;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.produto_container{
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
    margin: 10px;
}

.produtos{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.produtos img{
    margin: 10px;
    cursor: pointer;
    height: 450px;
    transition: 0.3s;
}

.produto_info{
    margin-top: 5px;
    display: flex;
    justify-content: center;
}
.produto_info span{
    font-size: 1.1rem;
    color: rgb(44, 44, 44);
    font-weight: bold;
}

.add_cart{
    margin: 15px 0;
    display: flex;
    justify-content: center;
}

.cart{
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
}

.cart p{
    font-size: 1rem;
    color: #fff;
}

</style>