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

  input{
    border: 1px solid rgb(141, 141, 141);
    padding: 10px;
    outline: none;
    width: 350px;
    max-width: 100%;
    margin: 5px 0;
    font-size: 1rem;
    transition: 0.2s;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
  }
  input:focus{
    border-color: rgb(60, 60, 60);
  }

  .btn{
    margin: 10px 0;
    background-color: rgb(60, 60, 60);
    color: #fff;
    font-size: 1.1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.4);
    text-decoration: none;
    padding: 10px 20px;
    transition: 0.3s;
}
.btn:hover{
    transform: scale(1.1);
  }

</style>
