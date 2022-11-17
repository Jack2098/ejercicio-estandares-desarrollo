import { RegistryVehicle } from "./registry-vehicle";

describe('@RegistryVehicle', () => {
    it('Should return 400 in status when names does not exist', () => {
        const sust = new RegistryVehicle();
        const httpRequest = {
            body: {
                name: 'Toyota',
                model: 'Yaris',
                year: 2022,
            }
        };

        const httpResponse = sust.handle(httpRequest)

        expect(httpResponse.statusCode).toBe(400);
    })
});