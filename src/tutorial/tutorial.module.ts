import { Module } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { TutorialController } from './tutorial.controller';
import { Tutorial } from 'src/typeorm/entities/Tutorial';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Tutorial])],
  providers: [TutorialService],
  controllers: [TutorialController]
})
export class TutorialModule {}
