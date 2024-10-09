import dotenv from "dotenv";

dotenv.config();


export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	MONGO_LOCALDB: process.env.MONGO_LOCALDB,
	PORT: process.env.PORT || 5000,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
	SESSION_SECRET:process.env.SESSION_SECRET,
	NODE_ENV: process.env.NODE_ENV,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID

};