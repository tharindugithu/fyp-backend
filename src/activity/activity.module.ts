import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from 'src/typeorm/entities/Activity';
import { Tutorial } from 'src/typeorm/entities/Tutorial';

@Module({
  imports:[TypeOrmModule.forFeature([Activity,Tutorial])],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
