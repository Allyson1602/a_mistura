Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@nestjs/core');
const app_module_1 = require('./app.module');
const helmet_1 = require('helmet');
const common_1 = require('@nestjs/common');
async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  app.enableCors({ origin: ['http://localhost:5173'] });
  app.use((0, helmet_1.default)());
  app.useGlobalPipes(new common_1.ValidationPipe());
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
//# sourceMappingURL=main.js.map
