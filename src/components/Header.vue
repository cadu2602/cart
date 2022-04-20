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
    <div class="main" style="w-full ">
      <q-tabs
        class="bg-pink-12 text-white shadow-2"
      > produtos
      </q-tabs>
    </div>
    <div class="cart" style="w-full ">
      <q-tabs
        class="bg-blue-12 text-white shadow-2"
      > carrinho
      </q-tabs>
    </div>
  </div>
</template>


<style scoped>
.main {
  width: 50%;
  height: 100%;
  
}
.cart {
  margin-left: 50%;
  margin-top: -21px;
  width: 50%;
  height: 100%;

}
</style>