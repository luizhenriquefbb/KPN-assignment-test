export type TProduct = {
    id:string,
    name:string,
};

export type TUsers = {
    id:string,
    lastname:string,
    firstname:string,
    birth:string,
    gender:string,
    housenumber:string,
    zipcode:string,
    streetname:string,
    city:string,
    mobilenumber:string,
    email:string,
    products:TProduct[],
};