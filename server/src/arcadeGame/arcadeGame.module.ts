import { Module } from "@nestjs/common";
import { ArcadeGameModuleBase } from "./base/arcadeGame.module.base";
import { ArcadeGameService } from "./arcadeGame.service";

@Module({
  imports: [ArcadeGameModuleBase],
  providers: [ArcadeGameService],
  exports: [ArcadeGameService],
})
export class ArcadeGameModule {}
