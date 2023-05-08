import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entity";

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: 45 })
  name: string

  @Column({ type: 'boolean', default: 'false' })
  admin: boolean

  @Column({ type: 'varchar', length: 120 })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[]
}

export default User