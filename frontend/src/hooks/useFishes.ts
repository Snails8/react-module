import { useEffect, useState } from 'react';

export interface Fish {
    /**
     * 
     * @type {number}
     * @memberof Fish
     */
    id: number;

    /**
     * 
     * @type {string}
     * @memberof Fish
     */
    name: string;

        /**
     * 
     * @type {string}
     * @memberof Fish
     */
    email: string;
}

export const useFishes = () => {
    const [fishes, setFishes] = useState<Fish[]>([]);

    useEffect(() => {
        fetch('http://localhost:7001/api/v1/fishes',{
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            setFishes(data)
        },
        (error) => {
            console.log(error);
            const errData = {
            }
        })
    }, [])

    return {
        fishes: fishes
    }
}