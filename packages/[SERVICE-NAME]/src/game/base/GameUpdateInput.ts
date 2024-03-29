/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumGameGameType } from "./EnumGameGameType";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutGamesInput } from "./UserUpdateManyWithoutGamesInput";
import { Type } from "class-transformer";
@InputType()
class GameUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumGameGameType,
  })
  @IsEnum(EnumGameGameType)
  @IsOptional()
  @Field(() => EnumGameGameType, {
    nullable: true,
  })
  gameType?: "Arcade" | "Slots" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutGamesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutGamesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutGamesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutGamesInput;
}
export { GameUpdateInput };
