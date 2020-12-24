import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { User } from "./User";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(args: { where: { username: string } }): Promise<User> {
    return this.prisma.user.findOne(args);
  }
}
