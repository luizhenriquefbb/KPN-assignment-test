export type TProduct = {
    id:number,
    name:string,
};

export type TUser = {
    id:number,
    lastname:string,
    firstname: string,
    birth: string,
    gender: {
        id: number,
        name: string
    },
    housenumber: string,
    zipcode: string,
    streetname: string,
    city: string,
    mobilenumber:string,
    email:string,
    products:TProduct[],
};