import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'motitips' })
export class Motitip {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  description: string;
}
