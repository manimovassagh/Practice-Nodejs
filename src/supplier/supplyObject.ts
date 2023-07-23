export interface Person {
    name: string;
    family: string;
}




export const getObjects: () => Person[] = (): Person[] => {
    const obj = [
        {
            name: 'Mani',
            family: 'Movassagh'

        }, {
            name: 'Mehdi',
            family: 'Rahmaniyan'
        },
        {
            name: 'Sara',
            family: 'Morattab'

        }
    ]
    return obj;
}