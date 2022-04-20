<script setup>
import { ref } from 'vue'
import ProdutosCard from '@/components/ProdutosCard.vue'
import HeaderRocket from '@/components/Header.vue'


const carrinho =  ref([])
const products = [
    {
      id: 1,
      name: 'Airdots',
      price: '25.00',
      description: 'Fone de ouvido bluetooth',
      stock: '25 unidades',
      img: 'src/assets/produtos-img/airdots.jpg'
    },
    {
      id: 2,
      name: 'SmartWatch',
      price: '32.00',
      description: 'Galaxy watch 3 LTE',
      stock: '40 unidades',
      img: 'src/assets/produtos-img/smartwatch.jpg'
    },
    // {
    //   id: 3,
    //   name: 'SSD 256GB',
    //   price: '50.00',
    //   description: 'SSD de 256GB da Kingston',
    //   stock: '25 unidades',
    //   img: 'src/assets/produtos-img/ssd.png'
    // },
]

  function add(id) {
    carrinho.value.push(id)
    return carrinho
  }

</script>

<template>
  <header-rocket :logo="logo" :alt="alt" :carrinho="carrinho" />
  <div id="card" v-for="product in products" :key="product.id" >
    <produtos-card :product="product" @buy="add(product)" />
  </div>
  {{carrinho}}
</template>

<style>
  #q-app {
    min-height: 100vh;
    display: inline-block;
    
  }
  #card {
    display: inline-block;
  }
  .cart-card {
    width: 20%;
    padding: 30px;
  }

  .stock-produ {
    align-items: center;
    padding: 5px;
  }
  .price-produ {
    width: 40%;
    padding: 0%;
  }
</style>