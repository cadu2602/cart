<script setup>
  defineProps({
    logo: {
      default: "src/assets/rocket.png",
      type: String
    },
    alt: {
      default: "Rocket shopping",
      type: String
    },
    carrinho: {
      type: Number,
      default: 0
    }
  })
</script>

<template>
  <div class="">
    <div class="main" >
      <q-tabs
        class="bg-pink-12 text-white shadow-2"
      >  Produtos
      </q-tabs>
    </div>
    <div class="cart" >
      <q-tabs
        class="bg-blue-12 text-white shadow-2"
      > Carrinho
      </q-tabs>
    </div>
  </div>
</template>


<style scoped>
.main {
  width: 45%;
  padding: 5px;
  font-size: 20px;
}
.cart {
  margin-left: 45%;
  margin-top: -40px;
  padding: 5px;
  width: 55%;
  font-size: 20px;


}
</style>