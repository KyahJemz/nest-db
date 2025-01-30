import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000).required(),

  ENVIRONMENT: Joi.string().required(),

  MSSQL: Joi.string().required(),
  MSSQL_HOST: Joi.string().required(),
  MSSQL_PORT: Joi.number().required(),
  MSSQL_USERNAME: Joi.string().required(),
  MSSQL_PASSWORD: Joi.string().required(),
  MSSQL_DATABASE: Joi.string().required(),

  MSSQL_SYNCHRONIZE: Joi.boolean().required(),
});
