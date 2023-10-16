import Chance from "chance";
const chance = new Chance();

export const fakeUserData = () => {
    return {
        name: chance.name(),
        country: chance.country({ full: true }),
    };
}
