import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import Address from './addresses.entity';
import Category from './categories.entity';
import Schedule from './schedules.entity';

@Entity('real_estate')
class RealEstate {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'boolean', default: false })
  sold: boolean

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string

  @Column({ type: 'integer' })
  size: number

  @CreateDateColumn({ type: 'date' })
  createdAt: Date

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category, (category) => category.realEstate)
  @JoinColumn()
  category: Category

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[]
}

export default RealEstate