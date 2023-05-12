import app from './app'
import { AppDataSource } from './data-source'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

AppDataSource.initialize()
    .then(() => {
        console.log('Database is running')
        app.listen(PORT, () => {
            console.log('Server is running')
        })
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })
