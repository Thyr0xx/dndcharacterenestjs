import { Trait } from "./traitsInterfaces"


 export interface Race{
    id:string
    name:string
    description:string
    move: number
    traits?: Trait
    subRaces?:SubRace[]
}

interface SubRace{
    id:string
    name:string
    description:string
    traits?:Trait
}

export type RaceList = Race[]