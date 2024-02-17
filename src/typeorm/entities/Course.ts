import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './Category';
import { Tutorial } from './Tutorial';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;
  
  @Column({length:10000})
  description: string;

  @ManyToOne(() => Category, category => category.courses)
  category: Category;

  @OneToMany(() => Tutorial, tutorial => tutorial.course)
  tutorials: Tutorial[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
