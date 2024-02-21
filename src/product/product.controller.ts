import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProduct(): Promise<Product[]> {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product | null> {
    return this.productService.getProduct(id);
  }

  @Post()
  async createProduct(@Body() postData: Product): Promise<Product> {
    return this.productService.createProduct(postData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<Product> {
    return this.productService.deleteProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Body() postData: Product,
    @Param('id') id: number,
  ): Promise<Product> {
    return this.productService.updateProduct(id, postData);
  }
}
