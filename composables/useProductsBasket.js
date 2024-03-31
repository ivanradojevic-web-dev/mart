export function useProductsBasket() {
    const basketStore = useBasketStore()
    const productsInBasket = ref([])
    const isLoading = ref(false)

    async function fetchProductDetails() {
        if (basketStore.items.length === 0) {
            productsInBasket.value = []
            return // Exit the function early if there are no items to fetch details for
        }

        isLoading.value = true
        try {
            const response = await fetch('/api/basket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ items: basketStore.items })
            })

            if (!response.ok) {
                throw new Error('Failed to fetch product cart')
            }

            productsInBasket.value = await response.json()
        } catch (error) {
            console.error(error.message)
        } finally {
            isLoading.value = false
        }
    }

    return {
        productsInBasket,
        fetchProductDetails,
        isLoading
    }
}
