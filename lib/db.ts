import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL!
const sql = postgres(connectionString)

export default sql;// src/types/profiles.ts

