import { User } from '../entities/User';
import {
  Mutation,
  Resolver,
  Query,
  Arg,
  ObjectType,
  Field,
  InputType,
} from 'type-graphql';
import argon2 from 'argon2';

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
export class UserPasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') { email, username, password }: UserPasswordInput
  ): Promise<UserResponse> {
    const existingUser = await User.findOne({
      where: {
        email,
        username,
      },
    });
    if (existingUser) {
      return {
        errors: [
          {
            field: 'email',
            message: 'Email already exists',
          },
          {
            field: 'username',
            message: 'Username already exists',
          },
        ],
      };
    }
    const user = await User.create({
      email,
      username,
      password,
    }).save();
    return {
      user,
    };
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  async user(@Arg('id') id: number): Promise<User | null> {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    return user || null;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: 'Username does not exist',
          },
        ],
      };
    }
    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Incorrect password',
          },
        ],
      };
    }
    return { user };
  }
}
