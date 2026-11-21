import { DataSource } from 'typeorm';
import appsettings from './appsettings.ts';
import { schema } from '../entities/index.entity.ts';

export const dbSource = new DataSource({
    type: 'postgres',
    url: appsettings.DB.DATABASE_URL,
    synchronize: true,
    logging: appsettings.app.ENV.includes('dev'),
    entities: [
        ...schema
    ],

});

export const dbInitialize = async (): Promise<DataSource> => {
    try {
        await dbSource.initialize();
        console.log(`DB initialized: ${dbSource.isInitialized ? 'successful': 'failed'}!`);
        return dbSource;
    } catch (error) {
        const err = error as NodeJS.ErrnoException;

        if (err.code === 'ECONNREFUSED') {
            console.error('PostgreSQL server is not running');
        } else if (err.message?.includes('password authentication failed')) {
            console.error('Invalid database credentials');
        } else {
            console.error('Database initialization failed:', err);
        }

        throw error;
    }
};