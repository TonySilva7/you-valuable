module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations"
  }
}
