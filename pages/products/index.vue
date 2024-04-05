<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductBreadcrumb title="All" />
            <header>
                <h1 class="text-4xl font-bold tracking-tight text-center text-gray-900">Explore All Products</h1>
            </header>

            <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
            
            <!-- Display loading state -->
            <div v-if="pending" class="text-center">
                <p>Loading products...</p>
            </div>

            <!-- Display error state -->
            <div v-if="error" class="text-center">
                <p>An error occurred while fetching products.</p>
            </div>

            <!-- Display products once loaded -->
            <section
                v-if="!pending && !error"
                class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <div v-for="(product, index) in products" :key="index" class="group relative">
                    <div
                        class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
                    >
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                            :alt="product.description"
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <NuxtLink :to="`/products/${product.id}`">
                                    <span aria-hidden="true" class="" />
                                    {{ product.title }}
                                </NuxtLink>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">${{ product.price / 100 }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: products, error, pending } = await useFetch('/api/products')
</script>
