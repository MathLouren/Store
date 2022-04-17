<template>
  <section>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
  </section>
</template>

<script>

export default {
    name:"Home",
    components:{
    }
}
</script>

<style scoped>

</style>