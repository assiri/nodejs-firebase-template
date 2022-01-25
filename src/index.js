const db = require("./db");

async function main() {
  const _campaignsRef = await db.collection("campaigns").get();
  console.log("Hello, World :)");
}

main();
