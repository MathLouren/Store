<template>
  <section>
      <div class="container">
          <div class="produtos" v-for="(produto, index) in produtos" :key="index">
              <h1>{{produto.nome}}</h1>
              <span>{{produto.preco}}</span>
              <button>Adicionar ao Carrinho</button>
          </div>
      </div>
  </section>
</template>

<script>
import {api} from "@/services.js"

export default {
    data(){
        return{
            produtos:null
        };
    },
    methods: {
        getProdutos(){
            api.get("/produto").then(r =>{
                this.produtos = r.data;
            });
        }
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
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid rgb(44, 44, 44);
    padding: 15px;
    border-radius: 2px;
    margin: 10px;
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