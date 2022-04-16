<template>
  <div id="app">
    <main>
      <Home />
    </main>
  </div>
</template>
<script>
import Home from "@/components/Home.vue"

export default{
  name:"App",
  components: {
    Home,
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Roboto', sans-serif;
 }

 #app{
   margin: auto;
 }

  button{
    background: orangered;
    border: none;
    padding: 10px 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover{
    transform: scale(1.1);
  }

  .v-enter,
  .v-leave-to{
    opacity: 0;
  }

  .v-enter{
    transform: translate3d(0, -20px, 0);
  }

  .v-leave-to{
    transform: translate3d(0, 20px, 0);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.3s;
  }

</style>
