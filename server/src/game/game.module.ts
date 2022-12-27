import { Module } from "@nestjs/common";
import { GameModuleBase } from "./base/game.module.base";
import { GameService } from "./game.service";

@Module({
  imports: [GameModuleBase],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
