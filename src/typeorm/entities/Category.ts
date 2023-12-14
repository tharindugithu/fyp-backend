import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Course } from './Course';


@Entity({ name: 'categories' })
export class Category{
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @OneToMany(() => Course, course => course.category)
  courses: Course[];

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // createdAt: Date;
}
