import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  database: {
    url: process.env.DATABASE_URL,
  },
}));
