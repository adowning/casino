import { Module } from "@nestjs/common";
import { FriendRelationshipModuleBase } from "./base/friendRelationship.module.base";
import { FriendRelationshipService } from "./friendRelationship.service";

@Module({
  imports: [FriendRelationshipModuleBase],
  providers: [FriendRelationshipService],
  exports: [FriendRelationshipService],
})
export class FriendRelationshipModule {}
