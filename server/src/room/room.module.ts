import { Module } from "@nestjs/common";
import { RoomModuleBase } from "./base/room.module.base";
import { RoomService } from "./room.service";
import { RoomResolver } from "./room.resolver";

@Module({
  imports: [RoomModuleBase],
  providers: [RoomService, RoomResolver],
  exports: [RoomService],
})
export class RoomModule {}
