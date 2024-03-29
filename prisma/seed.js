import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Elegant Summer Dress",
        price: 4999,
        rating: "4.5",
        reviews: 124,
        color: "Sky Blue",
        size: "M",
        description: "A perfect summer dress with breathable fabric and a flattering cut. Ideal for both day and night events.",
      },
    });

    await prisma.products.create({
      data: {
        title: "Casual Linen Trousers",
        price: 3599,
        rating: "4.7",
        reviews: 98,
        color: "Beige",
        size: "L",
        description: "Comfortable and stylish, these linen trousers are a must-have for any casual wardrobe.",
      },
    });

    await prisma.products.create({
      data: {
        title: "Chic Blazer",
        price: 7599,
        rating: "4.9",
        reviews: 73,
        color: "Navy Blue",
        size: "S",
        description: "A versatile piece that can elevate any outfit, perfect for office wear or evening outs.",
      },
    });

    await prisma.products.create({
      data: {
        title: "Bohemian Maxi Skirt",
        price: 4299,
        rating: "4.6",
        reviews: 89,
        color: "Multicolor",
        size: "M",
        description: "Flowy and colorful, this maxi skirt brings a touch of bohemian style to your wardrobe.",
      },
    });

    await prisma.products.create({
      data: {
        title: "Classic Trench Coat",
        price: 9999,
        rating: "4.8",
        reviews: 115,
        color: "Camel",
        size: "M",
        description: "A timeless trench coat that offers both style and protection against the elements.",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
