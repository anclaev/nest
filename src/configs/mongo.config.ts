import { ConfigService } from '@nestjs/config';
import { MongooseOptions } from 'mongoose';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (config: ConfigService): string =>
  'mongodb://' +
  config.get('MONGO_LOGIN') +
  ':' +
  config.get('MONGO_PASSWORD') +
  '@' +
  config.get('MONGO_HOST') +
  ':' +
  config.get('MONGO_PORT') +
  '/' +
  config.get('MONGO_AUTHDATABASE');

const getMongoOptions = (): MongooseOptions => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
