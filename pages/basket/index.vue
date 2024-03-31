<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <ProductBreadcrumb title="Shopping Cart" />
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
            </h1>
            <section class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                <div v-if="isLoading" class="full flex justify-center lg:col-span-7">
                    <div class="loader"></div>
                </div>

                <div
                    v-else-if="productsInBasket.length > 0"
                    aria-labelledby="cart-heading"
                    class="lg:col-span-7"
                >
                    <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

                    <ul
                        role="list"
                        class="divide-y divide-gray-200 border-b border-t border-gray-200"
                    >
                        <li
                            v-for="(product, productIdx) in productsInBasket"
                            :key="product.id"
                            class="flex py-6 sm:py-10"
                        >
                            <div class="flex-shrink-0">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                                    alt="Product image"
                                    class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                <div
                                    class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                                >
                                    <div>
                                        <div class="flex justify-between">
                                            <h3 class="text-sm">
                                                <a
                                                    :href="product.href"
                                                    class="font-medium text-gray-700 hover:text-gray-800"
                                                    >{{ product.title }}</a
                                                >
                                            </h3>
                                        </div>
                                        <div class="mt-1 flex text-sm">
                                            <p class="text-gray-500">{{ product.color }}</p>
                                            <p
                                                v-if="product.size"
                                                class="ml-4 border-l border-gray-200 pl-4 text-gray-500"
                                            >
                                                {{ product.size }}
                                            </p>
                                        </div>
                                        <p class="mt-1 text-sm font-medium text-gray-900">
                                            ${{ product.price / 100 }}
                                            <!-- Assuming the price is in cents -->
                                        </p>
                                    </div>

                                    <div class="mt-4 sm:mt-0 sm:pr-9">
                                        <span>Quantity: </span>
                                        <span>
                                            {{ product.quantity }}
                                        </span>

                                        <div class="absolute right-0 top-0">
                                            <button
                                                type="button"
                                                @click="removeProduct(product.id)"
                                                class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span class="sr-only">Remove</span>
                                                <svg
                                                    class="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <p class="mt-4 flex space-x-2 text-sm text-gray-700">
                                    <span class="flex items-center">
                                        <svg
                                            class="h-5 w-5 flex-shrink-0 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span>In stock</span>
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-else class="lg:col-span-7">
                    <p>Your basket is empty.</p>
                </div>

                <form
                    aria-labelledby="summary-heading"
                    class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >
                    <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
                        Order summary
                    </h2>

                    <dl class="mt-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <dt class="text-sm text-gray-600">Subtotal</dt>
                            <dd class="text-sm font-medium text-gray-900">
                                ${{ (basketStore.subtotal / 100).toFixed(2) }}
                            </dd>
                        </div>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 pt-4"
                        >
                            <dt class="flex items-center text-sm text-gray-600">
                                <span>Shipping estimate</span>
                                <a
                                    href="#"
                                    class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only"
                                        >Learn more about how shipping is calculated</span
                                    >
                                    <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd class="text-sm font-medium text-gray-900">
                                ${{ (basketStore.shippingEstimate / 100).toFixed(2) }}
                            </dd>
                        </div>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 pt-4"
                        >
                            <dt class="flex text-sm text-gray-600">
                                <span>Tax estimate</span>
                                <a
                                    href="#"
                                    class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only"
                                        >Learn more about how tax is calculated</span
                                    >
                                    <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd class="text-sm font-medium text-gray-900">
                                ${{ (basketStore.tax / 100).toFixed(2) }}
                            </dd>
                        </div>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 pt-4"
                        >
                            <dt class="text-base font-medium text-gray-900">Order total</dt>
                            <dd class="text-base font-medium text-gray-900">
                                ${{ (basketStore.orderTotal / 100).toFixed(2) }}
                            </dd>
                        </div>
                    </dl>

                    <div class="mt-6">
                        <button
                            type="submit"
                            class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            Checkout
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'

const basketStore = useBasketStore()

const { productsInBasket, fetchProductDetails, isLoading } = useProductsBasket()

onMounted(() => {
    fetchProductDetails()
})

const removeProduct = async (productId) => {
    basketStore.removeProduct(productId)

    await fetchProductDetails()
}
</script>

<style scoped>
.loader {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgb(79 70 229 / var(--tw-bg-opacity)); /* Updated background color */
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
}

@keyframes l3 {
    to {
        transform: rotate(1turn);
    }
}
</style>
