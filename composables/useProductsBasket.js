export function useProductsBasket() {
    const basketStore = useBasketStore()
    const productsInBasket = ref([])

    const fetchProductDetails = async () => {
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
        }
    }

    return {
        productsInBasket,
        fetchProductDetails
    }
}
