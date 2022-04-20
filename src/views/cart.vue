<script setup>
import { ref } from 'vue'
import { computed } from '@vue/reactivity';
import HeaderRocket from '@/components/Header.vue'

  const price = 25
  const carrinho =  ref([])
  const relogio = ref([1,2,3,4,5,6,7,8,9,0])


  function buy() {
    if(carrinho.value.length < 10) {
      carrinho.value.push(relogio.value.pop())
    } else {
      return carrinho.value.length
    }
  }

  function refund() {
    if(relogio.value.length < 10) {
      relogio.value.push(carrinho.value.pop())
    } else {
      return relogio.value.length
    }
  }

  const soma = computed(() => {
    if(carrinho.value.length <= 10) {
      return carrinho.value.length * price
    } else {
      return price * 10
    }
  })
</script>

<template>
  <header-rocket   />
  <div class="geral">
    <div id="card" @click="buy" >
      estoque: {{relogio.length}}
    </div>
    <div id="cart" @click="refund"> 
      quantidade no carrinho: {{carrinho.length}}
    </div>
    <div id="total"   >
      total: {{soma}}
    </div>
  </div>
</template>

<style>
.geral {
  padding: 5px;
  display: flex;
  justify-content: center;
}
#card {
  width: 10%;
  border: 5px solid red;
}
#cart {
  width: 15%;
  margin-left: 15%;
  border: 5px solid purple;
}
#total {
  width: 10%;
  border: 5px solid blue;
}

</style>