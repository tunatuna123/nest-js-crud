import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './app.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProduct: createProduct) {
    return this.productsService.create(createProduct);
  }
}
