//Promisified version of setTimeout

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => {
  console.log("Promise resolved and returned");
});

// By using async

async function test() {
  console.log("waiting ...");

  await delay(5000);
  console.log("response after 5sec");
}
test();

// Promisified version for fetch

async function fetchJson(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// Usage example:
fetchJson("https://api.example.com/data")
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//using async

async function getData() {
  try {
    const data = await fetchJson("https://api.example.com/data");
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
