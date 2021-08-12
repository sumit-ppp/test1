export enum HttpStatusCodes {
    badRequest = 400,
    notFound = 404,
    internalServerError = 500,
    unauthorized = 401,
    ok = 200
}
export enum ConnectionType {
    sender = 'SENDER_QUEUE_CONNECTION',
    reciever = 'RECEIVER_QUEUE_CONNECTION'
}