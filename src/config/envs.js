import pkg from "env-var";
const { get } = pkg;

export const envs = {
  PORT: get("PORT").asPortNumber(),
  DB_URI: get("DB_URI").asString(),
  JWT_SECRET: get("JWT_SECRET").asString(),
};
