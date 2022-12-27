import { Module } from "@nestjs/common";
import { PrivateMessageModuleBase } from "./base/privateMessage.module.base";
import { PrivateMessageService } from "./privateMessage.service";

@Module({
  imports: [PrivateMessageModuleBase],
  providers: [PrivateMessageService],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}
