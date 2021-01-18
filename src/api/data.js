import resapi from './resapi'

export function getJsonApi() {
    return resapi({
        url: 'http://localhost/api/users/',
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
}
