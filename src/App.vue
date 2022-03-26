<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <Main />
    </main>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"

export default{
  name:"App",
  components: {
    Header,
    Main,
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

  main{
  max-width: 1400px;
  margin: auto;
  }

  button{
    background: orangered;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: 0.3s;
  }
  button:hover{
    transform: scale(1.1);
  }

</style>
