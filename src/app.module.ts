import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
//데코레이터. 클래스에 함수 기능을 추가할 수 있다.
//클래스 위의 함수, 클래스를 위해 움직인다...
//아이스크림 위의 초콜릿 칩...!
//우리 친구하자..
export class AppModule {}
