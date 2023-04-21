export interface dog {
    name: string,
    color: string,
    barks: true,
    hasTail?: boolean
}

export interface cat {
    name: string,
    color: string,
    meows: true,
    hasTail: boolean
}

export interface bird {
    name: string,
    color: string,
    canFly: boolean
}

export interface pigeon extends bird {
    coos: true,
    canFly: true
}

export type anyAnimal = dog | cat | bird | pigeon
