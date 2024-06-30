<template>
    <Head title="Productos" />

    <AuthenticatedLayout>
        <template #header>
            Productos
        </template>

        <div class="inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-3 gap-4">
            <div>
                <select id="estado_users" name="estado" v-model="estado" @change="handleEnterKey"
                    class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                    <option selected value="">Filtrar por estado</option>
                    <option value="Activo">Activo</option>
                    <option value="Agotado">Agotado</option>
                    <option value="Bloqueado">Bloqueado</option>
                </select>
            </div>
            <div class="...">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" @keydown.enter="handleEnterKey" v-model="search" id="default-search"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
                        placeholder="Busqueda de usuarios" required>
                    <button type="submit" @click="handleEnterKey"
                        class="text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </div>

            <div class="text-right p-4">
                <PrimaryLink :href="route('productos.create')">
                    Agregar
                </PrimaryLink>
            </div>


        </div>
        <div class="flex flex-col overflow-x-auto">
            <div class="inline-block rounded-lg shadow">
                <div class="inline-block min-w-full py-2">
                    <div class="overflow-x-auto">
                        <table class="min-w-full whitespace-no-wrap ">
                            <thead>
                                <tr
                                    class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Nombre
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        SKU
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Categoría
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Cantidad
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Precio
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Talla
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Imagen
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Estado
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="prod in productos.data" :key="prod.id" class="text-gray-700">
                                    
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.nombre }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.sku }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.categoria.nombre }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.cantidad }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ formatNumber(prod.precio) }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.talla }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ prod.imagen != 'producto' ? 'SI' : 'NO' }}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <span v-if="prod.estado == 'Activo'"
                                            class="bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                                            {{ prod.estado }}
                                        </span>
                                        <span v-if="prod.estado == 'Bloqueado'"
                                            class="bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500">
                                            {{ prod.estado }}
                                        </span>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <SecondaryButton class="flex w-full justify-center" :href="route('productos.edit', prod.id)">
                                            Editar
                                        </SecondaryButton>
                                        <PrimaryButton class="flex mt-2 w-full justify-center" @click="mostrarImgModal(prod)">
                                            Imagen
                                        </PrimaryButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between">
            <pagination :links="productos.links" />
        </div>

        <!-- MODAL PROYECTO -->
        <Dialog v-model:visible="visible" modal position="center" header="Imagen producto" class="max-w-lg md:mx-6 h-full">
            <figure class="object-contain h-full">
                <img class="w-full object-contain mt-0" :src="getImageUrl(imagenURL)"
                    alt="imagen producto accesorios para mascotas" title="Taysu accesorios">
                <figcaption lang="es" class="hidden">Esta es una imagen de un producto de taysu accesorios
                </figcaption>
            </figure>
            
        </Dialog>

    </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import Pagination from '@/Components/Pagination.vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Avatar from 'primevue/avatar';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { EyeIcon} from '@heroicons/vue/24/solid'
import Dialog from 'primevue/dialog';

const props = defineProps({
    productos: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

// modal
const visible = ref(false);
//imagen url
const imagenURL = ref('');

// pass filters in search
let search = ref(props.filters.search);
let estado = ref(props.filters.estado ?? "");
const handleEnterKey = () => {
    router.get(
        "/productos",
        { search: search.value, estado: estado.value },
        {
            preserveState: true,
            replace: true,
        }
    );
};
const getInitials = function (name) {
    let parts = name.split(' ');
    let initials = '';
    let count = 0;

    for (var i = 0; i < parts.length && count < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0];
            count++;
        }
    }
    return initials;
};

//abrir modal de IMG
const mostrarImgModal = prod => {
    imagenURL.value = prod.imagen;
    visible.value = true;
    
};

//IMAGEN 
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/productos/${imageName}`;
};

watch(search, (value) => {
    console.log("Valor de búsqueda actualizado:", value)
});

const formatNumber = value => {
    // Utilizar el filtro toLocaleString con el formato colombiano
    return value.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
};

</script>
