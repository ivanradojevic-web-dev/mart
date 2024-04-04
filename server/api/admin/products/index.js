import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        console.log('body rating', body.rating);

        // Convert string values to integers
        const price = parseInt(body.price, 10);
        const reviews = parseInt(body.reviews, 10);

        if (isNaN(price) || isNaN(reviews)) {
            return { status: 400, body: { error: 'Invalid input data' } };
        }
        
        const product = await prisma.product.create({
            data: {
                title: body.title,
                price: price,
                rating: body.rating,
                reviews: reviews,
                color: body.color,
                size: body.size,
                description: body.description,
                
            }
        });

        return { status: 200, body: { message: 'Product created successfully' } };

    } catch (error) {
        console.error(error);
        return { status: 500, body: { error: 'Internal Server Error' } };
    }
});
