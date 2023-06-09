import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import RealEstate from './realState.entity';
import User from './users.entity';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn()
  id: number

  @Column('date')
  date: Date
  
  @Column('time')
  hour: string

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  @JoinColumn()
  realEstate: RealEstate

  @ManyToOne(() => User, (user) => user.schedules)
  @JoinColumn()
  user: User
}

export default Schedule