import dotenv from 'dotenv';
dotenv.config();

const appsettings = {
    app:{
        PORT: process.env.PORT || 3000,
        ENV: process.env.NODE_ENV || "development",
        headers:{
            "x-powered-by": "Java",
            "author": "onax",
            "version": "v1"
        },
        latencyThreshold: process.env.LATENCY_THRESHOLD ? parseInt(process.env.LATENCY_THRESHOLD) : 5000
    },
    DB:{
        DATABASE_URL: process.env.DATABASE_URL || "postgres://<usr>:<pwd>@localhost:<port>/<dbname>",
    }
};

export default appsettings;