import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('deberia estar definido', () => {
    expect(service).toBeDefined();
  });

  it('getHello() debería retornar el mensaje esperado', () => {
    expect(service.getHello()).toEqual(
      {
        service: "post-api service",
        message: "Online"  
        }
      
    );
});

it('getHello() debería retornar un objeto', () => {
    const result = service.getHello();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
});

});

