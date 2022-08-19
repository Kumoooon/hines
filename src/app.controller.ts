import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//컨트롤러 - url가져오기, 함수 실행하기
export class AppController {
  constructor(private readonly appService: AppService) {}//!!!여기!!!!

  @Get()
  getHello(): string {//또 데코레이터?! 그 안에는 문자열을 리턴하는 gethello()...!
    return this.appService.getHello();// 이걸 리턴하는데, this.appService.getHello는  !!!에 있다.
  }
  @Get('/hello')//get method...?
  sayHello():string{
    return 'ho lalala'
  }
}
