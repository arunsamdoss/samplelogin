import resapi from './resapi'

export function getJsonApi() {
    return resapi({
        url: 'https://jsonkeeper.com/b/0Q99',
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
}
