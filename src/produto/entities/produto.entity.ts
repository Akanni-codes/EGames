import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  imagem: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: false })
  valor: number;

  @IsNotEmpty()
  @Column({ type: 'bigint', nullable: false })
  quantidade: number;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  descricao: string;
}
