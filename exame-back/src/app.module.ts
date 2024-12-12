import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { OnibusModule } from './categories/category-module';
//import { MovieModule } from './movies/movie-module';
//import { GenreModule } from './genres/genre-module';
import {OnibusModule} from './onibus/onibus-module';
import {UsuarioModule} from './usuarios/usuarios-module';
import {AssentoModule} from '.assentos/assentos-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AssentoModule,
    OnibusModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
