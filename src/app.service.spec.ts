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
    expect(service.getHello()).toBe(
        'Hello World desde los Poderosos programadores del tercer semestre!',
    );
});

it('getHello() debería retornar un string no vacío', () => {
    const result = service.getHello();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
});

});

