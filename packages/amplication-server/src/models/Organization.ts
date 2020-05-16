import { Field, ObjectType } from '@nestjs/graphql';
import { User, App } from './';

@ObjectType({
  isAbstract: true,
  description: undefined
})
export class Organization {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  updatedAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  defaultTimeZone!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  address!: string;

  @Field(_type => App)
  apps?: App[] | null;

  @Field(_type => User)
  users?: User[] | null;
}