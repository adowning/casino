import { Module } from "@nestjs/common";
import { ArcadeGameModuleBase } from "./base/arcadeGame.module.base";
import { ArcadeGameService } from "./arcadeGame.service";
import { ArcadeGameResolver } from "./arcadeGame.resolver";

@Module({
  imports: [ArcadeGameModuleBase],
  providers: [ArcadeGameService, ArcadeGameResolver],
  exports: [ArcadeGameService],
})
export class ArcadeGameModule {}
