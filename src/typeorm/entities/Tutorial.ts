import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Course } from './Course';
import { Activity } from './Activity';

@Entity({ name: 'tutorials' })
export class Tutorial {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  tuto_url: string;

  @ManyToOne(() => Course, course => course.tutorials)
  course: Course;

  @OneToMany(() => Activity, activity => activity.tutorial)
  activities: Activity[];
}
