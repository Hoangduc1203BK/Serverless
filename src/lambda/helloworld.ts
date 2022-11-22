import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler : APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: any, callback: any) : Promise<APIGatewayProxyResult> => {
    try {
        // const requestBody = event.body;
        // const parseBody = JSON.parse(requestBody || '');

        const response = {
            statusCode : 200,
            body: `Hello`,
        }

        callback(null, JSON.stringify(response))
    } catch (error) {
        return {
            statusCode: 500,
            body: error
        }
    }
}