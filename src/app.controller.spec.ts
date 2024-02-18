import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './app.controller';
import { ProductsService } from './app.service';

describe('AppController', () => {
  let productController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productController.getHello()).toBe('Hello World!');
    });
  });
});
