import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ArcadeGameResolverBase } from "./base/arcadeGame.resolver.base";
import { ArcadeGame } from "./base/ArcadeGame";
import { ArcadeGameService } from "./arcadeGame.service";

@graphql.Resolver(() => ArcadeGame)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ArcadeGameResolver extends ArcadeGameResolverBase {
  constructor(
    protected readonly service: ArcadeGameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
