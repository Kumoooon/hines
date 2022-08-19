import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {//요있네
    return 'Hello World!';
  }
}
//또다른 클래스, 또 다른 데코레이터
