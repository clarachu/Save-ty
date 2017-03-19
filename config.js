 var config = {}

 config.host = process.env.HOST || "[the URI value from the DocumentDB Keys blade on http://portal.azure.com]";
 config.authKey = process.env.AUTH_KEY || "[the PRIMARY KEY value from the DocumentDB Keys blade on http://portal.azure.com]";
 config.databaseId = "ToDoList";
 config.collectionId = "Items";

 module.exports = config;