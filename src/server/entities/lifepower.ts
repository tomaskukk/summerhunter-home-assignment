import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Lifepower {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  healthpoints: number;

  @Field()
  @Column()
  mana: number;
}
