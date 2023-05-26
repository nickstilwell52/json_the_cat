const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv.slice(2);
if (breedName.length !== 1) {
  console.log('please provide the breed');
  return;
}

breedName = breedName[0];

fetchBreedDescription(breedName, (error, data) => {
  if (error !== null) {
    console.log('error:', error);
    return;
  }
  try {
    const desc = JSON.parse(data);
    console.log(desc[0].description);
  } catch (error) {
    console.log('ERROR: There was a problem with the query, ' +
                `check for typos.\n${error.message}`);
  }
});