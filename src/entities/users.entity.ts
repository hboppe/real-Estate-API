import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entity";
import { hashSync } from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: 45 })
  name: string

  @Column({ type: 'varchar', length: 45 })
  email: string

  @Column({ type: 'boolean', default: false, nullable: true })
  admin: boolean 

  @Column({ type: 'varchar', length: 120 })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date | null

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[]

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 12)
  }
}

export default User