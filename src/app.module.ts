import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
