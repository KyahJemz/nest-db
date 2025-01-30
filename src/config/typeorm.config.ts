import { config as dotenvConfig } from 'dotenv';

import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import {
  MSSQL,
  MSSQL_DATABASE,
  MSSQL_HOST,
  MSSQL_PASSWORD,
  MSSQL_PORT,
  MSSQL_SYNCHRONIZE,
  MSSQL_USERNAME,
  TYPEORM_OPTIONS,
} from './config.constant';

dotenvConfig({ path: `.env.${process.env.STAGE}.${process.env.ENV}` });
const configService = new ConfigService();

export const typeormOpts: TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> =
  {
    type: MSSQL as any,
    host: configService.get(MSSQL_HOST),
    port: +configService.get(MSSQL_PORT),
    username: configService.get(MSSQL_USERNAME),
    password: configService.get(MSSQL_PASSWORD) as string,
    database: configService.get(MSSQL_DATABASE) as string,
    options: {
      encrypt: false,
    },
    synchronize: configService.get(MSSQL_SYNCHRONIZE),
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    logging: true,
  };

export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) =>
    configService.get(TYPEORM_OPTIONS),
};

export default registerAs(TYPEORM_OPTIONS, () => typeormOpts);
