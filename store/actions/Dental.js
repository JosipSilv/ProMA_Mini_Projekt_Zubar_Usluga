export const UNESI_PRIJAVU = 'UNESI_PRIJAVU';
export const OTKAZI_TERMIN_HANDLER = 'OTKAZI_TERMIN_HANDLER'
export const SIGN_UP_HANDLER = 'SIGN_UP_HANDLER'

export const unesiPrijavu = (o) => {
    return{
        type: UNESI_PRIJAVU,
        novaPrijava: o
    };
}

export const signUpHandler = (u,p) => {
    return{
        type: SIGN_UP_HANDLER,
        username: u,
        password: p
    };
}

export const otkaziTerminHandler = (id) => {
    return{
        type: OTKAZI_TERMIN_HANDLER,
        id: id
    };
}