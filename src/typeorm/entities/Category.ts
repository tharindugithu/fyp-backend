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

  @Column({length:10000})
  description: string;

  @OneToMany(() => Course, course => course.category)
  courses: Course[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
