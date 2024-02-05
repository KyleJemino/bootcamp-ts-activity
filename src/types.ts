export type Pet = {
    name: string,
    age?: number,
    owner?: string,
}

export type Pets = {
    pets: Pet[]
}

export type Button = {
    buttonText: string,
    state: boolean,
    setState: (state: boolean) => void
}