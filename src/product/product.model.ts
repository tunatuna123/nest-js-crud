import { Prisma } from '@prisma/client';

export class Product implements Prisma.productCreateInput {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image?: string | null | undefined;
}