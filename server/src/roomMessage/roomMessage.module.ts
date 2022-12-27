import { Module } from "@nestjs/common";
import { RoomMessageModuleBase } from "./base/roomMessage.module.base";
import { RoomMessageService } from "./roomMessage.service";

@Module({
  imports: [RoomMessageModuleBase],
  providers: [RoomMessageService],
  exports: [RoomMessageService],
})
export class RoomMessageModule {}
