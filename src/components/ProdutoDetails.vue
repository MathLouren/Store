<template>
  <section>
      <div class="container_produtosDetails">
          <div class="slides_fotos">
            <div class="slides_left">
                <div class="slide">
                </div>
                <div class="slide">
                </div>
                <div class="slide">
                </div>
            </div>
            <div class="slide_right">
                
            </div>
          </div>
          <div class="content_right">
              <h1>Nome do Item</h1>
              <div class="descricao_item">
                  <p>SHEIN SXY Corte Fora Simples sexy Vestido</p>
              </div>
              <div class="preco_item">
                  <p>15,99</p>
              </div>
              <div class="quantidade_item">
                  <span><img src="../assets/minus.svg" alt=""></span>
                  <p>1</p>
                  <span><img src="../assets/plus.svg" alt=""></span>
              </div>
              <div class="tamanhos_itens">
                  <span>M</span>
                  <span>G</span>
                  <span>M</span>
                  <span>M</span>
              </div>
              <div class="add_cart">
                  <button class="add_btn">Adicionar ao Carrinho</button>
                  <button class="fechar">Fechar produto</button>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    section{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        width: 100%;
        height: 100%;
    }

    .container_produtosDetails{
        height: 500px;
        width: 900px;
        background-color: #fff;
        display: flex;
    }

    .slide{
        width: 70px;
        height: 70px;
        border: 1px solid rgb(40,40,40);
        margin: 10px 5px;
    }

    .slide:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .slides_fotos{
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px;
        padding: 10px;
    }

    .slide_right{
        height: 400px;
        width: 300px;
        border: 1px solid rgb(40,40,40);
        display: flex;
    }
    .slide_right:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .content_right{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content_right h1{
        font-size: 1.8rem;
        font-weight: 400;
        margin: 50px 0 10px 0;
    }

    .descricao_item p{
        font-size: 0.9rem;
        margin: 10px 0;
    }

    .preco_item p{
        font-size: 1.2rem;
        margin: 10px 0;
    }

    .quantidade_item{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0 20px 0;
    }

    .quantidade_item span{
        cursor: pointer;
        padding: 2px 10px;
        background-color: rgb(238, 238, 238);
        border-radius: 20%;
        display: flex;
        align-items: center;
    }

    .quantidade_item p{
        font-size: 1.2rem;
    }

    .tamanhos_itens{
        margin: 20px 0;
    }

    .tamanhos_itens span{
        padding: 10px 13px;
        background-color: rgb(75, 75, 75);
        color: #fff;
        border-radius: 50%;
        margin: 10px 5px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 1.2rem;
    }
    .tamanhos_itens span:hover{
        background-color: rgba(0, 0, 0, 0.6);
    }

    .add_cart{
        display: flex;
        gap: 15px;
    }

    .add_cart button{
        color: #fff;
        margin: 20px 0;
        font-size: 1.1rem;
    }

    .add_btn{
        background-color: rgb(40,40,40);
    }

    .fechar{
        background-color: rgb(255, 21, 21);
    }

</style>