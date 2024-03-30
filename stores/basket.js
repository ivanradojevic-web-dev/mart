export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: []
    }),
    getters: {
        itemCount(state) {
            return state.items.reduce((total, item) => total + item.quantity, 0)
        }
    },
    actions: {
        addToBasket(productId) {
            const itemIndex = this.items.findIndex((item) => item.id === productId)

            if (itemIndex !== -1) {
                const item = this.items[itemIndex]
                const updatedItem = { ...item, quantity: item.quantity + 1 }
                this.items.splice(itemIndex, 1, updatedItem)
            } else {
                this.items.push({ id: productId, quantity: 1 })
            }
        }
    }
})
