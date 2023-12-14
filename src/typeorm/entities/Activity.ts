import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tutorial } from './Tutorial';

@Entity({ name: 'activities' })
export class Activity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column('simple-array') // Assuming answers are stored as a simple array of strings
  answers: string[];

  @ManyToOne(() => Tutorial, tutorial => tutorial.activities)
  tutorial: Tutorial;
}
