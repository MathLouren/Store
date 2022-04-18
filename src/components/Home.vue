<template>
  <div>
    <header>
      <Header />
    </header>
    <section>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
  </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
    name:"Home",
    components:{
      Header
    }
}
</script>

<style scoped>
  section{
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
</style>