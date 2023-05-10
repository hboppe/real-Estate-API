import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from './realState.entity';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 45, unique: true })
  name: string

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  realEstate: RealEstate[]
}

export default Category