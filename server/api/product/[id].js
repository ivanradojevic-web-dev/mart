import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const productId = event.context.params.id

    const id = parseInt(productId, 10)

    if (isNaN(id)) {
        return createError({ statusCode: 400, statusMessage: 'Invalid product ID' })
    }

    const showProduct = await prisma.product.findUnique({
        where: {
            id: id
        }
    })

    if (!showProduct) {
        return createError({ statusCode: 404, statusMessage: 'Product not found' })
    }

    return showProduct
})
