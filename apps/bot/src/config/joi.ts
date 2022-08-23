import * as Joi from 'joi';

export default () =>
  Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
    PORT: Joi.number().default(3000),
    DISCORD_TOKEN: Joi.string(),
    SLASH_COMMANDS_GUILD_ID: Joi.string(),
  });
