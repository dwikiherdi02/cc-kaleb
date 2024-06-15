import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTConst } from 'src/constants/constans';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWTConst.secret,
      signOptions: { expiresIn: JWTConst.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
