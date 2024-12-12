import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Get('findone')
  async chamarFindOne(): Promise<Usuario> {
    return this.usuarioService.findOne();
  }

}