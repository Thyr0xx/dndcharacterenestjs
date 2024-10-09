import { Character } from "src/characters/entities/character.entitty";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(()=> Character, (character)=> character.race)
    characters: Character[]
}