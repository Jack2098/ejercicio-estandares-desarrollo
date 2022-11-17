/* eslint-disable newline-before-return */
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { hacerTorta } from './src/ejercicio';

export async function handler(event: APIGatewayProxyEvent) {
    try {
        const result = await hacerTorta(true);
        return {
            statusCode: 200,
            body: JSON.stringify({result})
        };
    } catch (e) {
        return {
            stateCode: 400,
            body: JSON.stringify({result: e})
        };
    }
}