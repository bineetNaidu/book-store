import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Author } from './Author';
import { Genre } from './Genre';

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name!: string;

  @ManyToOne(() => Author, (a) => a.id)
  author!: string;

  @Field()
  @Column()
  description!: string;

  @ManyToOne(() => Genre, (g) => g.id)
  genre!: Genre;

  @Field()
  @Column()
  rent_price!: number;

  @Field()
  @Column({ type: 'int', default: 0 })
  discount_price: number;

  @Field()
  @Column({ type: 'date', default: 'now()' })
  publish_date!: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
