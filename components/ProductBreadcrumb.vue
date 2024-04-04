<template>
    <nav aria-label="Breadcrumb" class="mx-auto mb-6 flex max-w-7xl items-center justify-between">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div class="flex items-center">
                    <NuxtLink to="/products" class="mr-4 text-sm font-medium text-gray-900">
                        All Products
                    </NuxtLink>
                    <svg viewBox="0 0 6 20" aria-hidden="true" class="h-5 w-auto text-gray-300">
                        <path
                            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </li>
            <li class="text-sm">
                <span aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                    {{ title }}
                </span>
            </li>
        </ol>
        <div class="flex items-center">
            <Menu as="div" class="relative ml-3">
                <div>
                    <MenuButton
                        class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">Open user menu</span>
                        <img
                            class="h-8 w-8 rounded-full bg-slate-600"
                            :src="user?.user_metadata?.avatar_url ?? ''"
                            :alt="user?.user_metadata?.full_name ?? ''"
                        />
                    </MenuButton>
                </div>
                <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <MenuItem v-slot="{ active }">
                            <a
                                href="#"
                                :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                ]"
                                >Your Profile</a
                            >
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                                v-if="user"
                                @click="logOut()"
                                type="button"
                                :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                ]"
                            >
                                Sign out
                            </button>
                            <NuxtLink
                                v-else
                                to="/login"
                                class="block px-4 py-2 text-sm text-gray-700"
                                >Login</NuxtLink
                            >
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>

            <NuxtLink to="/basket" class="group -m-2 flex w-24 items-center justify-end p-2">
                <ShoppingCartIcon
                    class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{
                    basketStore.itemCount
                }}</span>
                <span class="sr-only">items in cart, view bag</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

defineProps({
    title: String
})

const basketStore = useBasketStore()

const client = useSupabaseClient()
const user = useSupabaseUser()

const logOut = () => {
    client.auth.signOut()
}
</script>
