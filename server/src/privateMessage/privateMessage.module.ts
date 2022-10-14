import { Module } from "@nestjs/common";
import { PrivateMessageModuleBase } from "./base/privateMessage.module.base";
import { PrivateMessageService } from "./privateMessage.service";
import { PrivateMessageResolver } from "./privateMessage.resolver";

@Module({
  imports: [PrivateMessageModuleBase],
  providers: [PrivateMessageService, PrivateMessageResolver],
  exports: [PrivateMessageService],
})
export class PrivateMessageModule {}
