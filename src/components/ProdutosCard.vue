<script setup>
const emit = defineEmits(['buy'])
  defineProps(
    {
      product: Object,
      default: {
        id: null,
        name: '',
        price: '',
        stock: '',
        
      }
    }
  )
  
</script>

<template>
  <div id="q-app"  >
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <router-link  :to="{ 
            name: 'Product',
            params: {
              id: product.id,
            }
          }"
        >
          <div >
          </div>
          <q-card-section>     
            <div class="q-mt-md q-gutter-md">
                <q-icon name="store" class="store-icon" />
                <div class="col text-h6 ellipsis">  
                  {{product.name}}  
                </div>
              <div class=" text-grey text-caption q-pt-md row no-wrap stock-produ">
                {{product.stock}}
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1 price-produ">
              ${{product.price}}
            </div>
            <div class="text-caption text-grey description-produ">
            </div>
          </q-card-section>
        </router-link>
        <q-separator></q-separator>
        <q-card-actions>
          <q-btn flat color="primary" @click="emit('buy')" >
            Add to cart
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div> 
</template>

<style>
  #q-app {
    min-height: 100vh;
    display: inline-block;
    
  }
  .store-icon {
    width: 80%;
  }
  .my-card {
    width: 100%;
    padding: 0%;
    margin-top: 30px;
    
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