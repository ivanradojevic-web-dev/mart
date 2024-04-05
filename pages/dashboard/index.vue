<template>
    <form @submit.prevent="onSubmit" class="bg-gray-900 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="space-y-12">
            <div class="border-b border-white/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-white">Product Information</h2>
                <NuxtLink to="/products" class="mr-4 text-sm font-medium text-white">
                    Product Page
                </NuxtLink>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <!-- Title -->
                    <div class="col-span-full">
                        <label for="title" class="block text-sm font-medium leading-6 text-white">Title</label>
                        <div class="mt-2">
                            <input v-model="title" type="text" name="title" id="title" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                            <span class="text-red-500">{{ errors.title }}</span>
                        </div>
                    </div>

                    <!-- Price -->
                    <div class="sm:col-span-2">
                        <label for="price" class="block text-sm font-medium leading-6 text-white">Price</label>
                        <div class="mt-2">
                            <input v-model="price" type="text" name="price" id="price" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6s" />
                            <span class="text-red-500">{{ errors.price }}</span>
                        </div>
                    </div>

                    <!-- Rating -->
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="rating" class="block text-sm font-medium leading-6 text-white">Rating</label>
                        <div class="mt-2">
                            <input v-model="rating" type="text" name="rating" id="rating" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                            <span class="text-red-500">{{ errors.rating }}</span>
                        </div>
                    </div>

                    <!-- Reviews -->
                    <div class="sm:col-span-2">
                        <label for="reviews" class="block text-sm font-medium leading-6 text-white">Reviews</label>
                        <div class="mt-2">
                            <input v-model="reviews" type="text" name="reviews" id="reviews" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                            <span class="text-red-500">{{ errors.reviews }}</span>
                        </div>
                    </div>

                    <!-- Color -->
                    <div class="sm:col-span-3 sm:col-start-1">
                        <label for="color" class="block text-sm font-medium leading-6 text-white">Color</label>
                        <div class="mt-2">
                            <select v-model="color" name="color" id="color" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <option value="">Select a color</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                            </select>
                            <span class="text-red-500">{{ errors.color }}</span>
                        </div>
                    </div>

                    <!-- Size -->
                    <div class="sm:col-span-3">
                        <label for="size" class="block text-sm font-medium leading-6 text-white">Size</label>
                        <div class="mt-2">
                            <select v-model="size" name="size" id="size" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <option value="">Select a size</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                            <span class="text-red-500">{{ errors.size }}</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="col-span-full">
                        <label for="description" class="block text-sm font-medium leading-6 text-white">Description</label>
                        <div class="mt-2">
                            <textarea v-model="description" name="description" id="description" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"></textarea>
                            <span class="text-red-500">{{ errors.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-white">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>

            <div v-if="responseMessage" class="text-white">{{ responseMessage }}</div>
            <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
        </div>
    </form>
</template>

<script setup>
// Dashboard guard
definePageMeta({ middleware: "dashboard" })

// Validation product fields
import { storeProductRequest } from '@/request/storeProductRequest'

const { handleSubmit, errors, title, price, rating, reviews, color, size, description } = storeProductRequest();

// Submit product to API
const { submitProduct, responseMessage, errorMessage } = useProductSubmission();

const onSubmit = handleSubmit(async (values) => {
  await submitProduct(values);
});
</script>
