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

    .content_right h1{
        font-size: 1.3rem;
        font-weight: 400;
    }
</style>