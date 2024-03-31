import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: [], // { id, quantity, price }
        subtotal: 0,
        shippingEstimate: 0,
        tax: 0,
        orderTotal: 0
    }),
    getters: {
        itemCount(state) {
            return state.items.reduce((total, item) => total + item.quantity, 0)
        }
    },
    actions: {
        calculateTotals() {
            this.subtotal = this.items.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            )
            this.shippingEstimate = this.subtotal * 0.05
            this.tax = this.subtotal * 0.18
            this.orderTotal = this.subtotal + this.shippingEstimate + this.tax
        },
        addToBasket(productId, price) {
            const itemIndex = this.items.findIndex((item) => item.id === productId)

            if (itemIndex !== -1) {
                this.items[itemIndex].quantity += 1
            } else {
                this.items.push({ id: productId, quantity: 1, price: price })
            }

            this.calculateTotals()
        }
    },
    persist: true
})
