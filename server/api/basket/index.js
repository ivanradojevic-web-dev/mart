import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const requestBody = await readBody(event)
    const items = requestBody.items

    let productsInBasket = await prisma.product.findMany({
        where: {
            id: {
                in: items.map((item) => item.id)
            }
        }
    })

    if (productsInBasket.length === 0) {
        return createError({ statusCode: 404, statusMessage: 'No products found' })
    }

    productsInBasket = productsInBasket.map((product) => {
        const item = items.find((i) => i.id === product.id)
        return {
            ...product,
            quantity: item ? item.quantity : 0
        }
    })

    return productsInBasket
})
