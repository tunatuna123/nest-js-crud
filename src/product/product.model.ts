import { Prisma } from "@prisma/client";

export class Product implements Prisma.productsCreateInput {
    id: number;
    name: string;
    quantity: string;
    price: number;
    image?: string | null | undefined;
}