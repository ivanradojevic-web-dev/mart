<template>
    <div class="bg-white">
        <div class="pb-16 pt-6 sm:pb-24">
            <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <ProductBreadcrumb :title="productJSON?.title" />
                <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                    <div class="lg:col-span-5 lg:col-start-8">
                        <div class="flex justify-between">
                            <h1 class="text-xl font-medium text-gray-900">
                                {{ productJSON?.title }}
                            </h1>
                            <p class="text-xl font-medium text-gray-900">
                                ${{ productJSON.price / 100 }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <h2 class="sr-only">Reviews</h2>
                            <div class="flex items-center">
                                <p class="text-sm text-gray-700">
                                    {{ productJSON.rating }}
                                    <span class="sr-only"> out of 5 stars</span>
                                </p>
                                <div class="ml-1 flex items-center">
                                    <StarIcon
                                        v-for="rating in [0, 1, 2, 3, 4]"
                                        :key="rating"
                                        :class="[
                                            productJSON.rating > rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        ]"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
                                <div class="ml-4 flex">
                                    <a
                                        href="#"
                                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                        >See all {{ productJSON.reviews }} reviews</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
                    >
                        <h2 class="sr-only">Images</h2>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                            <img
                                v-for="image in product.images"
                                :key="image.id"
                                :src="image.imageSrc"
                                :alt="image.imageAlt"
                                :class="[
                                    image.primary
                                        ? 'lg:col-span-2 lg:row-span-2'
                                        : 'hidden lg:block',
                                    'rounded-lg'
                                ]"
                            />
                        </div>
                    </div>

                    <div class="mt-8 lg:col-span-5">
                        <form>
                            <div>
                                <h2 class="text-sm font-medium text-gray-900">Color</h2>

                                <!-- <RadioGroup v-model="selectedColor" class="mt-2">
                                    <RadioGroupLabel class="sr-only"
                                        >Choose a color</RadioGroupLabel
                                    >
                                    <div class="flex items-center space-x-3">
                                        <RadioGroupOption
                                            as="template"
                                            v-for="color in product.colors"
                                            :key="color.name"
                                            :value="color"
                                            v-slot="{ active, checked }"
                                        >
                                            <div
                                                :class="[
                                                    color.selectedColor,
                                                    active && checked ? 'ring ring-offset-1' : '',
                                                    !active && checked ? 'ring-2' : '',
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                ]"
                                            >
                                                <RadioGroupLabel as="span" class="sr-only">{{
                                                    color.name
                                                }}</RadioGroupLabel>
                                                <span
                                                    aria-hidden="true"
                                                    :class="[
                                                        color.bgColor,
                                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                    ]"
                                                />
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup> -->
                            </div>

                            <div class="mt-8">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-sm font-medium text-gray-900">Size</h2>
                                    <a
                                        href="#"
                                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                        >See sizing chart</a
                                    >
                                </div>

                                <!-- <RadioGroup v-model="selectedSize" class="mt-2">
                                    <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                                    <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        <RadioGroupOption
                                            as="template"
                                            v-for="size in product.sizes"
                                            :key="size.name"
                                            :value="size"
                                            :disabled="!size.inStock"
                                            v-slot="{ active, checked }"
                                        >
                                            <div
                                                :class="[
                                                    size.inStock
                                                        ? 'cursor-pointer focus:outline-none'
                                                        : 'cursor-not-allowed opacity-25',
                                                    active
                                                        ? 'ring-2 ring-indigo-500 ring-offset-2'
                                                        : '',
                                                    checked
                                                        ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                                                        : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                                                    'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1'
                                                ]"
                                            >
                                                <RadioGroupLabel as="span">{{
                                                    size.name
                                                }}</RadioGroupLabel>
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup> -->
                            </div>

                            <button
                                type="submit"
                                @click.prevent="handleAddToCart"
                                class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to cart
                            </button>
                        </form>

                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">Description</h2>

                            <div
                                class="prose prose-sm mt-4 text-gray-500"
                                v-html="productJSON.description"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CurrencyDollarIcon, GlobeAmericasIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'

const product = {
    name: 'Basic Tee',
    price: '$35',
    rating: 3.9,
    reviewCount: 512,
    href: '#',
    images: [
        {
            id: 1,
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
            imageAlt: "Back of women's Basic Tee in black.",
            primary: true
        },
        {
            id: 2,
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
            imageAlt: "Side profile of women's Basic Tee in black.",
            primary: false
        },
        {
            id: 3,
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
            imageAlt: "Front of women's Basic Tee in black.",
            primary: false
        }
    ],
    colors: [
        { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
        { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' }
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: false }
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
        'Only the best materials',
        'Ethically and locally made',
        'Pre-washed and pre-shrunk',
        'Machine wash cold with similar colors'
    ]
}

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])

const route = useRoute()

const { data: productJSON, error } = await useFetch(`/api/product/${route.params.id}`, {
    key: route.params.id
})

if (error.value) {
    console.error('Error fetching product:', error.value)
}

const basketStore = useBasketStore()

const handleAddToCart = () => {
    basketStore.addToBasket(productJSON.value.id, productJSON.value.price)
}
</script>
