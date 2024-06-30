<template>
    <div :class="$page.props.showingMobileMenu ? 'block' : 'hidden'" @click="$page.props.showingMobileMenu = false"
        class="fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden"></div>

    <div :class="$page.props.showingMobileMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="overflow-y-auto fixed inset-y-0 left-0 z-30 w-64 bg-amber-500 transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex justify-center items-center mt-4">
            <div class="flex items-center justify-center">
                <img :src="imglogo_w" class="w-full p-6" alt="">

                <!-- <span class="mx-2 text-2xl font-semibold text-white">Administrador</span> -->
            </div>
        </div>

        <nav class="mt-6" x-data="{ isMultiLevelMenuOpen: false }">
            <SeparadorMenu>Menú</SeparadorMenu>
            <nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                <ChartPieIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Inicio</span>
            </nav-link>
            <nav-link :href="route('Welcome')">
                <ClipboardDocumentIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Pagina </span>
            </nav-link>
            <SeparadorMenu>Configuración</SeparadorMenu>
            <nav-link :href="route('categorias.index')" :active="route().current().includes('categorias')">
                <ClipboardDocumentIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Categorías </span>
            </nav-link>
            <nav-link :href="route('productos.index')" :active="route().current().includes('productos')">
                <ArchiveBoxIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Productos </span>
            </nav-link>
            <nav-link v-if="$page.props.user.permissions.includes('usuarios-listar')" :href="route('clientes.index')"
                :active="route().current().includes('clientes')">
                <UserGroupIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Clientes</span>
            </nav-link>
            <nav-link v-if="$page.props.user.permissions.includes('usuarios-listar')" :href="route('users.index')"
                :active="route().current().includes('users')">
                <UserCircleIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Usuarios</span>
            </nav-link>

            <nav-link class="flex items-center " v-if="$page.props.user.permissions.includes('rol-listar')"
                :href="route('roles.index')" :active="route().current().includes('roles')">
                <FingerPrintIcon class="h-6 w-6 text-gray-800" />
                <span class="mx-3">Roles</span>

            </nav-link>


            
        </nav>
    </div>
</template>

<script>
import NavLink from '@/Components/NavLink.vue';
import SeparadorMenu from "@/Components/SeparadorMenu.vue";
import { Link } from '@inertiajs/vue3';
import imglogo_w from '/public/assets/img/TAYSU LOGO REGISTRADO.png'
import { ref } from 'vue'
import { FingerPrintIcon, UserGroupIcon, ChartPieIcon, ClipboardDocumentIcon, BarsArrowDownIcon, ArchiveBoxIcon, UserCircleIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        NavLink,
        Link,
        FingerPrintIcon,
        UserGroupIcon,
        ChartPieIcon,
        ClipboardDocumentIcon,
        ArchiveBoxIcon,
        BarsArrowDownIcon,
        UserCircleIcon,
        SeparadorMenu
    },

    setup() {
        let showingTwoLevelMenu = ref(false)

        return {
            showingTwoLevelMenu,
            imglogo_w
        }
    },
}
</script>

<style scoped></style>
