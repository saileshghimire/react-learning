import { atom, selector } from "recoil";


export const countAtom = atom({
    key:"countKey",
    default:0
});

export const evenSelector = selector({
    key:"evenselector",
    get:({get}) => {
        const count = get(countAtom);
        return(count % 2==0);
    }
})