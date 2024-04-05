export function useCreateOrder() {
    const responseMessage = ref('')
    const errorMessage = ref('')

    async function submitOrder(orderDetails) {
        responseMessage.value = ''
        errorMessage.value = ''

        try {
            const responseData = await $fetch('/api/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: orderDetails
            })

            responseMessage.value = responseData.message
        } catch (error) {
            console.error(error)
            errorMessage.value = `Failed to submit order: ${error.message}`
        }
    }

    return {
        submitOrder,
        responseMessage,
        errorMessage
    }
}
