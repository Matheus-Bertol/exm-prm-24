import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('onibus')
export class Onibus {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  @Column({ length: 50, nullable: false })
  motorista: string;

  @Column({ length: 50, nullable: false })
  destino: string;

  @Column({ length: 50, nullable: false })
  origem: string;

  @Column({ type: 'int', nullable: false })
  assentos: number;

}