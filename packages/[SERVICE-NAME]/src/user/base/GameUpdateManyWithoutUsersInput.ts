/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class GameUpdateManyWithoutUsersInput {
  @Field(() => [GameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GameWhereUniqueInput],
  })
  connect?: Array<GameWhereUniqueInput>;

  @Field(() => [GameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GameWhereUniqueInput],
  })
  disconnect?: Array<GameWhereUniqueInput>;

  @Field(() => [GameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GameWhereUniqueInput],
  })
  set?: Array<GameWhereUniqueInput>;
}
export { GameUpdateManyWithoutUsersInput };
