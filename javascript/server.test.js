import createServer from './server.js'
import {agent as supertest } from 'supertest'

describe('Hello World', () => {
    let server

    beforeAll(() => {
        server = createServer()
    })

    afterAll(async () => {
        server.close()
    })

    it('Should return Hello World', async () => {
        await supertest(server)
            .get('/')
            .expect(200)
            .then(response => expect(response.text).toBe("Hello World!"))
    })

})
