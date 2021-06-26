module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": ["dist/database/migrations/*.js"],
  "entities": ["dist/entities/*.js"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations"
  }
}
