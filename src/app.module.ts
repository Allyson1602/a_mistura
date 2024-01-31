import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatesModule } from './plates/plates.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from './data-source';
import { InstructionsModule } from './instructions/instructions.module';
import { OpenaiModule } from './openai/openai.module';
import { ImagesPlatesModule } from './images-plates/images-plates.module';
import { IngredientPlatesModule } from './ingredient-plates/ingredient-plates.module';
import { BardAiModule } from './bard-ai/bard-ai.module';
import { CorsMiddleware } from './middleware/cors';
import { AuthorizationMiddleware } from './middleware/authorization';

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
    IngredientPlatesModule,
    BardAiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
    consumer.apply(AuthorizationMiddleware).forRoutes('*');
  }
}
