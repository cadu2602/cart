<script setup>
import { ref } from 'vue'
import { computed } from '@vue/reactivity';
import HeaderRocket from '@/components/Header.vue'

  const priceRelogio = 25
  const priceCamiseta = 50
  const relogioQtd =  ref([])
  const camisetaQtd =  ref([])
  const relogio = ref([1,2,3,4,5,6,7,8,9,0])
  const camiseta = ref([1,2,3,4,5,6,7,8,9,0])


  function buyClock() {
    if(relogioQtd.value.length < 10) {
      relogioQtd.value.push(relogio.value.pop())
    } else {
      return relogioQtd.value.length
    }
  }
  function buyShirt() {
    if(camisetaQtd.value.length < 10) {
      camisetaQtd.value.push(camiseta.value.pop())
    } else {
      return camisetaQtd.value.length
    }
  }

  function refundClock() {
    if(relogio.value.length < 10) {
      relogio.value.push(relogioQtd.value.pop())
    } else {
      return relogio.value.length
    }
  }
  function refundShirt() {
    if(camiseta.value.length < 10) {
      camiseta.value.push(camisetaQtd.value.pop())
    } else {
      return camiseta.value.length
    }
  }

  const somaClock = computed(() => {
    if(camisetaQtd.value.length <= 10) {
      return relogioQtd.value.length * priceRelogio
    } else {
      return priceRelogio * 10
    }
  })
  const somaShirt = computed(() => {
    if(camisetaQtd.value.length <= 10) {
      return camisetaQtd.value.length * priceCamiseta
    } else {
      return priceCamiseta * 10
    }
  })
  const total = computed(() => {
    return somaShirt.value + somaClock.value
  })
</script>

<template>
  <header-rocket />
  <div class="geral">
    <div id="card">
      <q-icon name="watch" color="cyan-7" class=" product text-purple q-gutter-md" />
      <q-btn color="cyan-7" label="Adicionar" @click="buyClock" />
    </div>
    <div id="card">
      <q-icon name="checkroom" color="yellow-9" class=" product text-purple q-gutter-md" />
      <q-btn color="yellow-9" label="Adicionar" @click="buyShirt" />
    </div>
    <div id="relogio"> 
      Relogio(quantidade): {{relogioQtd.length}} <br />
      <q-btn class="btn" color="cyan-9" label="Remover" @click="refundClock" /> <br />
      Valores dos relogios: {{somaClock}}
    </div>
    <div id="camiseta"> 
      Camiseta(quantidade): {{camisetaQtd.length}} <br />
      <q-btn class="btn" color="yellow-9" label="Remover" @click="refundShirt" /> <br />
      Valores das camisetas: {{somaShirt}}
    </div>
    <div id="total">
      Total: {{total}}
    </div>
  </div>
</template>

<style>
.geral {
  padding: 5px;
  display: flex;
  font-size: 30px;
}
#card {
  width: 10%;
  margin-left: 10%;
  font-size: 70px;
  height: 0%;
}
#relogio {
  width: 20%;
  height: 0%;
  margin-left: 10%;
}
#camiseta {
  width: 20%;
  height: 0%;
  margin-left: 7%;
}
#total {
  width: 13%;
  margin-top: 300px;
  margin-left: -540px;
  font-size: 50px;
}
.btn {
  margin-left: 2%;
}
</style>