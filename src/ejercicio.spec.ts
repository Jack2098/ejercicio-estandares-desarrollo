import { hacerTorta } from "./ejercicio";

describe('@toMakeCackes', () => {

    
    it('if the friend is sick, return 0 cakes', () => {
        const response = hacerTorta(true);

        response.catch(err => expect(err).toBe('0 tortas'));
    });

    it('if the friend is not sick, return 5 cackes', () => {
        const response = hacerTorta(false);

        response.then(res => expect(res).toBe('5 tortas'));
    });
});