import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

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

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
