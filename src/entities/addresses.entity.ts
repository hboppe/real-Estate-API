import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realState.entity";

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column({ type: 'varchar', length: 45 })
  street: string

  @Column({ type: 'varchar', length: 8 })
  zipCode: string

  @Column({ type: 'varchar', length: 7, nullable: true })
  number: string | null

  @Column({ type: 'varchar', length: 20 })
  city: string

  @Column({ type: 'varchar', length: 2 })
  state: string

  @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
  realEstate: RealEstate

  @BeforeInsert()
  @BeforeUpdate()
  stateToUpperCase() {
    this.state = this.state.toUpperCase()
  }

  @BeforeInsert()
  @BeforeUpdate()
  capitalizeName() {
    const splitedName = this.city.split(' ')
    const capitalizedNameArray = splitedName.map(name => {
      const capitalizedName = name[0].toUpperCase() + name.substring(1, name.length)

      return capitalizedName
    })

    this.city = capitalizedNameArray.join(' ')
  }
}

export default Address