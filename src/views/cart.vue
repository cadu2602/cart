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
    <div id="card"  >
      Estoque: {{relogio.length}}
      <q-btn color="yellow-9" label="Adicionar" @click="buy"/>
    </div>
    <div id="cart" > 
      Quantidade no carrinho: {{carrinho.length}}
      <q-btn class="btn" color="purple-10" label="Remover" @click="refund"/>
    </div>
    <div id="total"   >
      Total: {{soma}}
    </div>
  </div>
</template>

<style>
.geral {
  padding: 5px;
  display: flex;
  justify-content: center;
  font-size: 30px;
}
#card {
  width: 10%;
  border: 5px solid yellow;
}
#cart {
  width: 20%;
  margin-left: 25%;
  border: 5px solid purple;
}
#total {
  width: 10%;
  border: 5px solid aqua;
}
</style>