export interface Enum {
    value: number
    name: string
}

export interface Reward {
    pokemon: Enum
    form: Enum
    total: number
    shinies: number
}

export interface TeamPokemon {
    pokemon: Enum
    form: Enum
    total: number
    shinies: number
    slot: number
}

export interface Character {
    character: Enum
    rewards: Reward[]
    team: TeamPokemon[]
}

export interface ApiResponse {
    total: number
    since: number
    characters: Character[]
}