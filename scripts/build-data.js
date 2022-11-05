/*
We used to fetch JSON data by making HTTP requests to data from another domain (https://bestofjs-static-api.vercel.app)
To speed up requests and avoid network errors when the domain is black-listed, we copy the JSON files in the app.
*/
const fs = require("fs-extra");
const fetch = require("node-fetch");
const path = require("path");

async function main() {
  console.log("=== Fetch JSON files ===");
  await buildJsonFile("projects.json");
  await buildJsonFile("hof.json");
  console.log("=== Data build process OK ===");
}

async function buildJsonFile(filename) {
  const rootURL = "https://bestofjs-static-api.vercel.app";
  const url = rootURL + `/` + filename;
  console.log(`Fetching data from ${url}`);
  const data = await fetch(url).then((res) => res.json());
  const filepath = path.join(process.cwd(), "public", "data", filename);
  console.log("Copy", filepath);
  await fs.outputJSON(filepath, data);
}

main();
