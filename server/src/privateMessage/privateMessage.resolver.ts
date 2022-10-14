import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PrivateMessageResolverBase } from "./base/privateMessage.resolver.base";
import { PrivateMessage } from "./base/PrivateMessage";
import { PrivateMessageService } from "./privateMessage.service";

@graphql.Resolver(() => PrivateMessage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PrivateMessageResolver extends PrivateMessageResolverBase {
  constructor(
    protected readonly service: PrivateMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
