export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: []
    }),
    actions: {
        addToBasket(productId) {
            this.items.push({ id: productId, quantity: 1 })
        }
    }
})
