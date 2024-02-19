import { PrismaService } from 'src/pristma.service';
import { Product } from './product.moduel';

export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProduct(): Promise<Product[]> {
    return this.prisma.products.findMany();
  }

  async getProduct(id: number): Promise<Product | null> {
    return this.prisma.products.findUnique({ where: { id: Number(id) } });
  }

  async createProduct(data: Product): Promise<Product> {
    return this.prisma.products.create({
      data,
    });
  }

  async updateProduct(id: number, data: Product): Promise<Product> {
    return this.prisma.products.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        quantity: data.quantity,
        price: data.price,
        image: data.image,
      },
    });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.products.delete({
      where: { id: Number(id) },
    });
  }
}
