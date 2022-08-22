import { Param } from '@discord-nestjs/core';

export class NewTrademarkDto {
  @Param({ description: 'Common name for your trademark', required: true })
  name: string;

  @Param({ description: 'Word or phrase to trademark', required: true })
  phrase: string;
}
