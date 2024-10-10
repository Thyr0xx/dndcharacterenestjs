import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    //store ID of race
    @Column()
    raceId: string

    //store ID subrace (optionnal)
    @Column({nullable: true})
    subRaceId?: string

    //store ID player character classes
    @Column('simple-json')
    classIds: string[]

    //store character level
    @Column()
    level: number

    //store ID of spell
    @Column('simple-json')
    spellIds?: string[]
}