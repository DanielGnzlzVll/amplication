import { Module, forwardRef } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { BasicStrategy } from "./basic.strategy";
import { PasswordService } from "./password.service";

@Module({
  imports: [forwardRef(() => UserModule), PassportModule],
  providers: [AuthService, BasicStrategy, PasswordService],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
