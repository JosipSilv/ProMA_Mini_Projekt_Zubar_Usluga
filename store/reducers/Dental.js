import { Alert } from "react-native";
import usluge from "../../data/PopisUsluga"
import { UNESI_PRIJAVU, SIGN_UP_HANDLER, OTKAZI_TERMIN_HANDLER } from "../actions/Dental"

const pocetnoStanje = {
    prijave: [],
    usluge: usluge,
    korisnickiRacuni: []
}

const dentalReducer = (state = pocetnoStanje, action) => {
    switch (action.type) {
        case UNESI_PRIJAVU:
            const niz = [...state.prijave];
            niz.push(action.novaPrijava);
            return { ...state, prijave: niz }

        case SIGN_UP_HANDLER:
            const racuni = [...state.korisnickiRacuni];
            racuni.push({
                username: action.username,
                password: action.password
            })
            return {...state, korisnickiRacuni: racuni}

            case OTKAZI_TERMIN_HANDLER:
                const prijave = state.prijave.filter(pr => pr.key !== action.id);
                return {...state, prijave: prijave}

        default:
            return state;
    }
}

export default dentalReducer