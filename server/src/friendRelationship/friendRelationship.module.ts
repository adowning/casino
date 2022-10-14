import { Module } from "@nestjs/common";
import { FriendRelationshipModuleBase } from "./base/friendRelationship.module.base";
import { FriendRelationshipService } from "./friendRelationship.service";
import { FriendRelationshipResolver } from "./friendRelationship.resolver";

@Module({
  imports: [FriendRelationshipModuleBase],
  providers: [FriendRelationshipService, FriendRelationshipResolver],
  exports: [FriendRelationshipService],
})
export class FriendRelationshipModule {}
