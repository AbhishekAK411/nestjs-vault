import { Module, Get, Controller } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get('/asdf')
    getRootRoute() {
        return 'test';
    }
}

@Module({
    controllers: [AppController],
})
class AppModule {

}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();