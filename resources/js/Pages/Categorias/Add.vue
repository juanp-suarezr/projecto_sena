<template>
    <Head title="Agregar categoría" />

    <AuthenticatedLayout>
        <template #header>
            Nueva categoría
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl w-full">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nueva categoría
                </h3>
                <div class="text-right">
                    <SecondaryButton :href="route('categorias.index')">
                        Regresar
                    </SecondaryButton>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
                    <!-- nombre -->
                    <div>
                        <InputLabel for="nombre" value="Nombre" />
                        <TextInput id="nombre" type="text" class="mt-1 block w-full" v-model="form.nombre" required autofocus
                            autocomplete="nombre" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>
                    <!-- keyword -->
                    <div>
                        <InputLabel for="keyword" value="Keyword" />
                        <TextInput id="keyword" type="text" class="mt-1 block w-full" v-model="form.keyword" required
                            autocomplete="keyword" />
                        <InputError class="mt-2" :message="form.errors.keyword" />
                    </div>
                    <!-- descripción -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Información adicional sobre el evento (max 255
                            caracteres)
                        </p>
                        <Textarea v-model="form.descripcion" variant="filled" autoResize rows="5"
                            class="mt-1 block w-full" required autocomplete="descripcion" />
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras }">
                            {{ palabrasEnTestimonio }} caracteres <span v-if="isMaxPalabras">Limite de caracteres
                                superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.descripcion" />
                    </div>

                    <!-- imagen -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Imagen de referencia del evento
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
                                Registrar Categoría
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
    roles: {
        type: Object,
        default: () => ({}),
    }
});

const form = useForm({
    nombre: '',
    keyword: '',
    descripcion: '',
    imagen: '',
    
});

// Limite palabras
const palabrasEnTestimonio = computed(() => {
    const palabras = form.descripcion.trim();
    const result = palabras.length;

    if (result >= 300) {
        isMaxPalabras.value = true;
    } else {
        isMaxPalabras.value = false;
    }

    return result;
});

watch(palabrasEnTestimonio, () => {
    form.descripcion = form.descripcion.trim(); // Asegúrate de que no haya espacios al principio o al final
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
    form.post(route('categorias.store'), {
        onSuccess: function () {
            
            swal({
                title: "Registro Guardado",
                text: "La categoría se ha almacenado exitosamente",
                icon: "success"
            })
        }
    });
};
</script>