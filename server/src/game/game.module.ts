import { Module } from "@nestjs/common";
import { GameModuleBase } from "./base/game.module.base";
import { GameService } from "./game.service";
import { GameResolver } from "./game.resolver";

@Module({
  imports: [GameModuleBase],
  providers: [GameService, GameResolver],
  exports: [GameService],
})
export class GameModule {}
