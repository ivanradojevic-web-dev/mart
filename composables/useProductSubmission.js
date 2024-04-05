export function useProductSubmission() {
    const responseMessage = ref('')
    const errorMessage = ref('')

    async function submitProduct(values) {
        responseMessage.value = ''
        errorMessage.value = ''

        try {
            const responseData = await $fetch('/api/admin/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: values
            })

            responseMessage.value = responseData.body.message
        } catch (error) {
            console.error(error)
            errorMessage.value = `Failed to submit product: ${error.message}`
        }
    }

    return {
        submitProduct,
        responseMessage,
        errorMessage
    }
}
