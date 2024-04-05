import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        if (!body.orderItems || !Array.isArray(body.orderItems)) {
            return { status: 400, body: { error: 'Invalid order items data' } }
        }

        // Create the order
        const order = await prisma.order.create({
            data: {
                orderItems: {
                    createMany: {
                        data: body.orderItems.map((item) => ({
                            productId: item.productId,
                            quantity: item.quantity
                        }))
                    }
                }
            }
        })

        return { status: 200, body: { message: 'Order created successfully', order: order } }
    } catch (error) {
        console.error(error)
        return { status: 500, body: { error: 'Internal Server Error' } }
    }
})
