<template>
  <section>
      <transition mode="out-in" v-if="ProdutoDetalhesModal">
          <div class="container">
          <div class="produto_container" v-for="(produto, index) in produtos" :key="index">
              <div class="produto_nome">
                  <h1>{{produto.nome}}</h1>
              </div>
                <div class="produtos">
                    <img src="../assets/roupa.webp" alt="">
                </div>
                <div class="produto_info">
                    <span>{{produto.preco | numeroPreco}}</span>
                </div>
                <div class="add_cart">
                    <button class="cart" @click="oi(index)">
                        <p>Adicionar ao Carrinho</p>
                        <img src="../assets/shopping-cart.svg" alt="">
                    </button>
                </div>
          </div>
      </div>
      </transition>
      <transition mode="out-it" v-else>
        <ProdutoDetalhes/>
      </transition>
  </section>
</template>

<script>
import { api } from "@/services.js"
import ProdutoDetalhes from "@/components/ProdutoDetails.vue"

export default {
    data(){
        return{
            produtos:null,
            ProdutoDetalhesModal:true
        };
    },
    components:{
        ProdutoDetalhes,
    },
    methods: {
      getProdutos(){
          api.get("produtos").then( r =>{
              this.produtos = r.data;
              console.log(this.produtos)
          })
      }
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
    margin: auto;
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

.produto_nome h1{
    margin: 15px 0 5px 0;
    font-size: 1.4rem;
    text-align: center;
    color: rgb(44, 44, 44);
    font-weight: 500;
}

.produtos img{
    margin: 10px;
    cursor: pointer;
    height: 400px;
    transition: 0.3s;
}

.produto_info{
    margin-top: 5px;
    display: flex;
    justify-content: center;
}
.produto_info span{
    font-size: 1.3rem;
    color: rgb(44, 44, 44);
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