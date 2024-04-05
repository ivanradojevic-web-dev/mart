export function useProductsInBasket() {
    const basketStore = useBasketStore()

    const productsInBasket = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    async function fetchProductDetails() {
        isLoading.value = true
        error.value = null
        productsInBasket.value = []

        if (basketStore.items.length === 0) {
            isLoading.value = false
            return
        }

        try {
            const response = await $fetch('/api/basket', {
                method: 'POST',
                body: { items: basketStore.items }
            })
            productsInBasket.value = response
        } catch (err) {
            console.error(err)
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    return {
        productsInBasket,
        fetchProductDetails,
        isLoading,
        error
    }
}
