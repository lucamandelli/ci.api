import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLearningCiCd(): string {
    return 'Learning CI/CD!';
  }
}
