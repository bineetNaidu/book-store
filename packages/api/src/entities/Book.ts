import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  PrimaryColumn,
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

  @Field()
  @Column()
  avatar!: string;

  @ManyToOne(() => Author, (a) => a.id)
  author!: number;

  @PrimaryColumn()
  authorId: number;

  @Field()
  @Column({ type: 'varchar', length: 1000 })
  description!: string;

  @ManyToOne(() => Genre, (g) => g.id)
  genre!: Genre;

  @PrimaryColumn()
  genreId: number;

  @Field()
  @Column()
  rent_price!: number;

  @Field()
  @Column({ type: 'int', default: 0 })
  discount_price: number;

  @Field()
  @Column({ type: 'date', default: 'now()' })
  publish_date!: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
