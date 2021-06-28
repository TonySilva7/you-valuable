console.log("Ambiente: " + process.env.NODE_ENV);

if (process.env.NODE_ENV === "Development") {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_LOCAL,
    "migrations": ["./src/database/migrations/*.ts"],
    "entities": ["./src/entities/*.ts"],
    "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migrations"
    }
  }
} else if (process.env.NODE_ENV === "Production") {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": ["./dist/database/migrations/*.js"],
    "entities": ["./dist/entities/*.js"],
    "ssl": true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    },
    "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migrations"
    }
  }
} else {
  console.log("Anywhere connected Database");
}
