const sleep = ms => new Promise (r => setTimeout(r, ms))
// promise request for information that promises a response -> will sit and wait for response -> needs async

//// Asynchronous JS, async/await

// function sendInvites() {}
// function planCatering() {}
// sendInvites()
// planCatering()

async function run() {
  console.log('Start code')
  
  await sleep(2000) 
  // await waits for promise to resolve before moving on
  // sitting and waiting for all the responses or data or whatever was requested to come in before moving on 
  console.log('Halfway done')
  await sleep(2000)
  
  console.log('Finished code')
}

// run()

async function fetchData() {
  // fetch api built in JS to communicate with APIS
  // using jsonapi.org for testing

  // use try/catch blocks because fetching data can go wrong 
  try {
    const res = await fetch('https://dummyjson.com/products/1') 
    // GET request requests info
    // POST to send info
    // fetch is a promise => use await
    // res for response => object beings sent over data request
    
    const data = await res.json()
    
    console.log(data)
  } catch(err) {
    console.log(err.message)
  }
}

fetchData()


//// HTTP requests / APIs