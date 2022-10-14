import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RoomMessageResolverBase } from "./base/roomMessage.resolver.base";
import { RoomMessage } from "./base/RoomMessage";
import { RoomMessageService } from "./roomMessage.service";

@graphql.Resolver(() => RoomMessage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RoomMessageResolver extends RoomMessageResolverBase {
  constructor(
    protected readonly service: RoomMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
