const request = require('request');
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('please provide the breed');
  return;
}

args[0] = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

request(args[0], (error, response, body) => {
  if (error !== null) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);

  try {
    console.log(data[0].description);
  } catch (error) {
    console.log("There was an error with the query, check for typos.");
    console.log(error.message);
  }
});