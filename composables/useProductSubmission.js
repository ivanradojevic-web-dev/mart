export function useProductSubmission() {
    const responseMessage = ref('');
    const errorMessage = ref('');

    async function submitProduct(values) {
        responseMessage.value = '';
        errorMessage.value = '';

        try {
            const response = await fetch('/api/admin/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error(`Failed to submit product: ${response.statusText}`);
            }

            const responseData = await response.json();

            responseMessage.value = responseData.body.message;
        } catch (error) {
            console.error(error.message);
            errorMessage.value = error.message;
        }
    }

    return {
        submitProduct,
        responseMessage,
        errorMessage
    };
}
