import { Module } from "@nestjs/common";
import { RoomMessageModuleBase } from "./base/roomMessage.module.base";
import { RoomMessageService } from "./roomMessage.service";
import { RoomMessageResolver } from "./roomMessage.resolver";

@Module({
  imports: [RoomMessageModuleBase],
  providers: [RoomMessageService, RoomMessageResolver],
  exports: [RoomMessageService],
})
export class RoomMessageModule {}
