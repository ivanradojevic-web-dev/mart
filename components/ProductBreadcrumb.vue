<template>
    <nav
        aria-label="Breadcrumb"
        class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
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
        <div class="flow-root">
            <NuxtLink to="/basket" class="group -m-2 flex items-center p-2">
                <ShoppingCartIcon
                    class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{
                    totalItemCount
                }}</span>
                <span class="sr-only">items in cart, view bag</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'

defineProps({
    title: String
})

const basketStore = useBasketStore()

const totalItemCount = computed(() => basketStore.itemCount)
</script>
