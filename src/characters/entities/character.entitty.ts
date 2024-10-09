import { Race } from "src/races/entities/race.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @ManyToOne(()=> Race, (race)=>race.characters)
    race: Race;
}