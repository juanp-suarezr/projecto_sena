<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            Dashboard
        </template>

        <!-- EMPRESA -->
        <div class="w-full">
            <div class="items-center px-4 py-8 m-auto mt-5">
                <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
                    <!-- categorias -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <ClipboardDocumentIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Categorias
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ categorias.length }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>categorias activas</p>
                            </div>
                        </div>
                    </div>
                    <!-- productos -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <ArchiveBoxIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Productos
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ productos.length }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Productos activas</p>
                            </div>
                        </div>
                    </div>
                    <!-- clientes -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <UserGroupIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Clientes
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ clientes.length }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Clientes registrados</p>
                            </div>
                        </div>
                    </div>
                    <!-- trafico -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <ClipboardDocumentCheckIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Trafico
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                10</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Visitas a la pagina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head } from '@inertiajs/vue3';
import { ref, watch, inject, onMounted, computed } from 'vue';
import {
    UserGroupIcon,
    ClipboardDocumentCheckIcon,
    ArchiveBoxIcon,
    ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    categorias: {
        type: Object,
        default: () => ({}),
    },
    productos: {
        type: Object,
        default: () => ({}),
    },
    clientes: {
        type: Object,
        default: () => ({}),
    },
    
});


</script>
