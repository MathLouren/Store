<template>
  <header>
      <div class="header">
            <router-link to="/" class="logo">
                <img src="../assets/archive.svg" alt="logo da pagina">
                <span>STORE</span>
            </router-link>
      <div class="right_content">
          <div class="bag">
              <img src="../assets/shopping-bag.svg" alt="cart">
              <span>0</span>
          </div>
                <router-link class="login" to="/login">
                    <img src="../assets/user.svg" alt="login">
                </router-link>
      </div>
      </div>
  </header>
</template>

<script>

export default {
    name:"Header",
    data(){
        return{
            
        }
   }
}
</script>

<style scoped>
header{
    margin: auto;
    padding: 0 10px;
    border-bottom: 1px solid rgb(44, 44, 44);
}

.header{
    color: rgb(44, 44, 44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 60px;
    margin: 0 auto;
    max-width: 1400px;
}

.logo{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    width: 30%;
    text-decoration: none;
    color: #000;
}

.right_content{
    width: 30%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.bag{
    position: relative;
    padding: 9px;
    cursor: pointer;
}

.bag span{
    background: orangered;
    padding: 1px 5px;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: -20px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    border-radius: 50%;
}

.login {
    cursor: pointer;
}

@media (max-width: 400px){
  
    .logo{
        width: 50%;
    }

    .right_content{
        width: 50%;
    }

}
</style>