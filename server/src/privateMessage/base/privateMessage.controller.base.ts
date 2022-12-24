/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PrivateMessageService } from "../privateMessage.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PrivateMessageCreateInput } from "./PrivateMessageCreateInput";
import { PrivateMessageWhereInput } from "./PrivateMessageWhereInput";
import { PrivateMessageWhereUniqueInput } from "./PrivateMessageWhereUniqueInput";
import { PrivateMessageFindManyArgs } from "./PrivateMessageFindManyArgs";
import { PrivateMessageUpdateInput } from "./PrivateMessageUpdateInput";
import { PrivateMessage } from "./PrivateMessage";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PrivateMessageControllerBase {
  constructor(
    protected readonly service: PrivateMessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PrivateMessage",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrivateMessage })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PrivateMessageCreateInput
  ): Promise<PrivateMessage> {
    return await this.service.create({
      data: {
        ...data,

        receiver: data.receiver
          ? {
              connect: data.receiver,
            }
          : undefined,

        sender: data.sender
          ? {
              connect: data.sender,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        receiver: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PrivateMessage",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [PrivateMessage] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PrivateMessageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<PrivateMessage[]> {
    const args = plainToClass(PrivateMessageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        receiver: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PrivateMessage",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PrivateMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PrivateMessageWhereUniqueInput
  ): Promise<PrivateMessage | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        receiver: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PrivateMessage",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PrivateMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PrivateMessageWhereUniqueInput,
    @common.Body() data: PrivateMessageUpdateInput
  ): Promise<PrivateMessage | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          receiver: data.receiver
            ? {
                connect: data.receiver,
              }
            : undefined,

          sender: data.sender
            ? {
                connect: data.sender,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          receiver: {
            select: {
              id: true,
            },
          },

          sender: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "PrivateMessage",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PrivateMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PrivateMessageWhereUniqueInput
  ): Promise<PrivateMessage | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          receiver: {
            select: {
              id: true,
            },
          },

          sender: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}