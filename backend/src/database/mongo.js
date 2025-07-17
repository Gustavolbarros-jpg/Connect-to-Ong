import { MongoClient } from 'mongodb'

export const Mongo = {
    async connect({ MongoConectionString, MongoDbName }) {
        try {
            const client = new MongoClient(MongoConectionString)
            await client.connect()
            const db = client.db(MongoDbName)
            this.client = client
            this.db = db
            return 'Connect to mongo!'
        } catch (error) {
            return { text: 'Error during mongo connection', error }
        }
    }
}
