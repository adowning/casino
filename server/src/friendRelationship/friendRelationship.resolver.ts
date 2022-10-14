import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FriendRelationshipResolverBase } from "./base/friendRelationship.resolver.base";
import { FriendRelationship } from "./base/FriendRelationship";
import { FriendRelationshipService } from "./friendRelationship.service";

@graphql.Resolver(() => FriendRelationship)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FriendRelationshipResolver extends FriendRelationshipResolverBase {
  constructor(
    protected readonly service: FriendRelationshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
