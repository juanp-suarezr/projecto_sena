<template>

  <Head title="Productos" />

  <PageLayout>
    <div class="mx-auto p-4 flex">
      <!-- Filtros -->
      <div class="w-1/4 p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-2">Filtros</h2>
        <!-- Filtro por categoría -->
        <select v-model="selectedCategory" class="w-full border p-2 rounded mb-2">
          <option value="">Todas las categorías</option>
          <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nombre }}
          </option>
        </select>
        <!-- Filtro por rango de precios -->
        <div class="flex mb-2">
          <input type="number" v-model.number="minPrice" placeholder="Precio mínimo"
            class="w-1/2 border p-2 rounded mr-2">
          <input type="number" v-model.number="maxPrice" placeholder="Precio máximo" class="w-1/2 border p-2 rounded">
        </div>
        <!-- Filtro por tamaño -->
        <select v-model="selectedSize" class="w-full border p-2 rounded mb-2">
          <option value="">Todas las tallas</option>
          <option value="xs">Talla XS</option>
          <option value="s">Talla S</option>
          <option value="m">Talla M</option>
          <option value="l">Talla L</option>
        </select>
        <!-- Buscador por nombre -->
        <input type="text" @keydown.enter="handleEnterKey" v-model="search" placeholder="Buscar por nombre"
          class="w-full border p-2 rounded">

        <!-- button aplicar filtro -->
        <PrimaryButton class="flex mt-2 w-full justify-center" @click="handleEnterKey">
          Aplicar filtro
        </PrimaryButton>
      </div>

      <!-- Lista de productos -->
      <div class="w-3/4">

        <DataView :value="productos.data" layout="grid">

          <!-- en grid -->
          <template #grid="slotProps">
            <div class="grid grid-cols-12 gap-4 inline-flex">
              <div v-for="(item, index) in slotProps.items" :key="index"
                class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 p-2 flex flex-col mx-auto inline-flex">
                <div
                  class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col mx-auto">
                  <div class="bg-surface-50 flex justify-center rounded py-2 px-1">
                    <div class="relative mx-auto">
                      <!-- imagen -->
                      <img class="w-full rounded-md !h-[40vh]" :src="getImageUrl(item.imagen)" style="max-width: 300px"
                        :alt="item.nombre" />
                      <!-- tag categoria -->
                      <Tag :value="item.categoria.nombre" class="absolute bg-option1/60 text-base sm:text-xl text-white"
                        style="left: 4px; top: 4px"></Tag>
                    </div>
                  </div>
                  <div class="pt-6">
                    <div class="flex flex-row justify-between items-start gap-2">
                      <div>
                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm"> Talla {{ item.talla
                          }}</span>
                        <div class="text-lg font-bold mt-1">{{ item.nombre }}</div>
                      </div>
                      <div class="bg-surface-100 p-1" style="border-radius: 30px">
                        <div
                          class="bg-gray-200 shadow-xl rounded-full flex items-center gap-2 justify-center py-1 px-2">
                          <span class="text-surface-900 font-medium text-sm">{{ item.cantidad }} und</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-6 mt-6">
                      <span class="text-2xl font-semibold">{{ formatNumber(item.precio) }}</span>
                      <div class="flex gap-2">
                        <PrimaryButton class="whitespace-nowrap">
                          Comprar ya
                        </PrimaryButton>
                        <PrimaryButton
                          class="inline-flex !text-xl !p-2 flex justify-center items-center bg-white border border-gray-300 rounded-md font-semibold text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
                          <ShoppingCartIcon class="w-full text-gray-600" />
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>

      </div>

    </div>
  </PageLayout>
</template>

<script setup>
import bannerInit from '../../../public/assets/img/bannerInit.jpeg';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { ref, onMounted } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Carousel from 'primevue/carousel';
import DataView from 'primevue/dataview';
import { ShoppingCartIcon } from '@heroicons/vue/24/solid';
import Tag from 'primevue/tag';

const props = defineProps({
  productos: {
    type: Object,
    default: () => ({}),
  },
  categorias: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
});


//fin
//filter options
const selectedCategory = ref('');
const minPrice = ref(null);
const maxPrice = ref(null);
const selectedSize = ref('');
const search = ref('');

console.log(props);

const getImageUrl = (imageName) => {
  // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
  return `/storage/uploads/productos/${imageName}`;
};

const form = useForm({
  correo: '',
});


const handleEnterKey = () => {
  router.get(
    "/productos_cliente",
    {
      search: search.value,
      categoria: selectedCategory.value,
      talla: selectedSize.value,
      minPrice: minPrice.value,
      maxPrice: maxPrice.value
    },
    {
      preserveState: true,
      replace: true,
    }
  );
};

const formatNumber = value => {
  // Utilizar el filtro toLocaleString con el formato colombiano
  return value.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP'
  });
}





</script>
