import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ItemsModule, ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
