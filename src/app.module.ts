import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatesModule } from './plates/plates.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from './data-source';
import { InstructionsModule } from './instructions/instructions.module';
import { CategoriesService } from './categories/categories.service';
import { OpenaiModule } from './openai/openai.module';
import { ImagesPlatesModule } from './images-plates/images-plates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PlatesModule,
    IngredientsModule,
    CategoriesModule,
    TypeOrmModule.forRoot(DataSource),
    InstructionsModule,
    OpenaiModule,
    ImagesPlatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly categoryService: CategoriesService) {}

  async onModuleInit(): Promise<void> {
    await this.categoryService.createInitialCategories();
  }
}
