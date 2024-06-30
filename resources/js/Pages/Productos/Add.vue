<template>

    <Head title="Agregar Producto" />

    <AuthenticatedLayout>
        <template #header>
            Nuevo producto
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl w-full">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nuevo producto
                </h3>
                <div class="text-right">
                    <SecondaryButton :href="route('productos.index')">
                        Regresar
                    </SecondaryButton>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
                    <!-- nombre -->
                    <div>
                        <InputLabel for="nombre" value="Nombre" />
                        <TextInput id="nombre" type="text" class="mt-1 block w-full" v-model="form.nombre" required
                            autofocus autocomplete="nombre" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>
                    <!-- SKU -->
                    <div>
                        <InputLabel for="sku" value="SKU" />
                        <TextInput id="sku" type="text" class="mt-1 block w-full" v-model="form.sku" required
                            autocomplete="sku" />
                        <InputError class="mt-2" :message="form.errors.sku" />
                    </div>
                    <!-- cantidad -->
                    <div>
                        <InputLabel for="cantidad" value="cantidad" />
                        <TextInput id="cantidad" type="number" class="mt-1 block w-full" v-model="form.cantidad"
                            required autocomplete="cantidad" />
                        <InputError class="mt-2" :message="form.errors.cantidad" />
                    </div>
                    <!-- precio -->
                    <div>
                        <InputLabel for="precio" value="Precio" />
                        <TextInput id="precio" type="number" class="mt-1 block w-full" v-model="form.precio" required
                            autocomplete="precio" />
                        <InputError class="mt-2" :message="form.errors.precio" />
                    </div>

                    <div class="col-span-2 w-full sm:flex grid gap-4">
                        <!-- talla -->
                        <div>
                            <InputLabel for="talla" value="Talla" />
                            <select id="talla" name="talla" v-model="form.talla"
                                class="block w-full px-4 py-2 mt-1 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                <option selected disabled value="">seleccionar talla</option>
                                <option value="XS">Talla XS</option>
                                <option value="S">Talla S</option>
                                <option value="M">Talla M</option>
                                <option value="L">Talla L</option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.talla" />
                        </div>
                        <!-- categoria -->
                        <div>
                            <InputLabel for="categoria" value="Categoría" />
                            <select id="categoria" name="categoria" v-model="form.categoria_id"
                                class="block w-full px-4 py-2 mt-1 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                <option selected disabled value="">seleccionar categoria</option>
                                <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{categoria.nombre}}</option>
                                
                            </select>
                            <InputError class="mt-2" :message="form.errors.categoria" />
                        </div>
                        <!-- estado -->
                        <div>
                            <InputLabel for="estado" value="Estado" />
                            <select id="estado" name="estado" v-model="form.estado"
                                class="block w-full px-4 py-2 mt-1 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                                <option selected disabled value="">seleccionar estado</option>
                                <option value="Activo">Activo</option>
                                <option value="Agotado">Agotado</option>
                                <option value="Bloqueado">Bloqueado</option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.estado" />
                        </div>
                    </div>
                    <!-- DETALLES -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Información adicional sobre el producto (max 300
                            caracteres)
                        </p>
                        <Textarea v-model="form.detalles" variant="filled" autoResize rows="5" class="mt-1 block w-full"
                            required autocomplete="detalles" />
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras }">
                            {{ palabrasEnTestimonio }} caracteres <span v-if="isMaxPalabras">Limite de caracteres
                                superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.detalles" />
                    </div>


                    <!-- imagen -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Imagen de referencia del producto
                        </p>
                        <div class="border-2 border-gray-300 rounded-md p-2">
                            <TextInput id="imagen" type="file" required class="mt-1 !border-0" accept="image/*"
                                @input="onAdvancedUpload($event.target.files[0])" :maxFileSize="2e+6" />
                            <InputError class="mt-2" :message="form.errors.imagen" />


                            <div class="flex justify-center">

                                <img v-if="imageUrl" :src="imageUrl" alt="form.nombre" class="w-2/6 h-auto" />
                                <PhotoIcon v-else class="w-1/6 text-gray-300" />

                            </div>
                        </div>




                    </div>


                    <div>
                        <div class="mt-4 flex flex-col items-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Registrar producto
                            </PrimaryButton>

                        </div>
                    </div>

                </form>

            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import SecondaryButton from "@/Components/SecondaryButton.vue";
import MultiSelect from 'primevue/multiselect';
import { PhotoIcon } from "@heroicons/vue/24/solid";
import Textarea from 'primevue/textarea';
import { inject, ref, computed, watch } from 'vue';

const swal = inject('$swal');

//variable de imagen
const imageUrl = ref(null);
//max palabras
const isMaxPalabras = ref(false);

const props = defineProps({
    categorias: {
        type: Object,
        default: () => ({}),
    }
});

console.log(props.categorias);

const form = useForm({
    nombre: '',
    sku: '',
    detalles: '',
    precio: '',
    cantidad: '',
    talla: '',
    categoria_id: '',
    estado: '',
    imagen: '',

});

// Limite palabras
const palabrasEnTestimonio = computed(() => {
    const palabras = form.detalles.trim();
    const result = palabras.length;

    if (result >= 300) {
        isMaxPalabras.value = true;
    } else {
        isMaxPalabras.value = false;
    }

    return result;
});

watch(palabrasEnTestimonio, () => {
    form.detalles = form.detalles.trim(); // Asegúrate de que no haya espacios al principio o al final
});



//fin


//cuando suba la img
const onAdvancedUpload = (ev) => {
    form.imagen = ev;
    console.log(form.imagen);

    if (!form.imagen) return;

    //reader para mostrar el doc cargado
    const reader = new FileReader();
    reader.onload = () => {
        imageUrl.value = reader.result;
    };
    reader.readAsDataURL(form.imagen);

};

const submit = () => {
    form.post(route('productos.store'), {
        onSuccess: function () {

            swal({
                title: "Registro Guardado",
                text: "El producto se ha almacenado exitosamente",
                icon: "success"
            })
        }
    });
};

const formatNumber = value => {
    // Utilizar el filtro toLocaleString con el formato colombiano
    return value.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
};

</script>