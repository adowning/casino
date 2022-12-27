import { Module } from "@nestjs/common";
import { RoomModuleBase } from "./base/room.module.base";
import { RoomService } from "./room.service";

@Module({
  imports: [RoomModuleBase],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
