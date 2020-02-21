import { Lifepower } from "./lifepower";
import { Attribute } from "./attribute";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn
} from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";
import { Lazy } from "../helpers";
import { Skill } from "../entities/skill";
import { TElement } from "../types/element";

@Entity()
@ObjectType()
export class Hero {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  backStory: string;

  @Field()
  @Column()
  resistance: TElement;

  @Field()
  @Column()
  weakness: TElement;

  @Field(type => [Skill])
  @ManyToMany(type => Skill, { lazy: true, cascade: ["insert"] })
  @JoinTable()
  skills: Lazy<Skill[]>;

  @Field(type => Attribute)
  @OneToOne(type => Attribute, { lazy: true, cascade: ["insert"] })
  @JoinColumn()
  attributes: Lazy<Attribute>;

  @Field(type => Lifepower)
  @OneToOne(type => Lifepower, { lazy: true, cascade: ["insert"] })
  @JoinColumn()
  lifepowers: Lazy<Lifepower>;
}
