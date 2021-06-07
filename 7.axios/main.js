// AXIOS GLOBALS 
// Adding this property in all headers 
axios.defaults.headers.common['X-Auth-Token'] = 'someJWT';

// GET REQUEST
function getTodos() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }

  // }).then(res => showOutput(res)).catch(err => console.log(err));
  axios
  .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {timeout: 5000})
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

// POST REQUEST 
async function addTodo() {
  try{
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', 
    {title: 'New Todo', complete: false});
    showOutput(res);
  }catch(err){
    console.log(err);
  }
}

// PUT/PATCH REQUEST
async function updateTodo() {
  try{
    const res = await axios.put('https://jsonplaceholder.typicode.com/todos/1', 
    {title: 'Updated Todo', complete: true});
    showOutput(res);
  }catch(err){
    console.log(err);
  }
}

// DELETE REQUEST
async function removeTodo() {
  try{
    const res = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
    showOutput(res);
  }catch(err){
    console.log(err);
  }
}

// SIMULTANEOUS DATA
async function getData() {
  try{
    const res = await axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')     
    ]);
    // axios.spread((todos, posts) => showOutput(posts));
    const [todos, posts] = res;
    console.log(todos);
    console.log(posts);
    showOutput(posts);
  }catch(err){
    console.log(err);
  }
}

// CUSTOM HEADERS
async function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'sometoken'
    }
  };

  const data = {
    title: 'New Todo', 
    complete: false
  };

  try{
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', data, config);
    showOutput(res);
  }catch(err){
    console.log(err);
  }
}

// TRANSFORMING REQUESTS & RESPONSES
async function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World', 
      complete: false
    },
    //transform data title to upper case
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase(); 
      return data;
    })
  };

  try {
    const res = await axios(options);
    showOutput(res);
  } catch (err) {
    console.log(err);
  }
}

// ERROR HANDLING
async function errorHandling() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todoss', {
      validateStatus: (status) => status < 500 //Reject only if the status is greater or equal to 500
    });
    showOutput(res);
  } catch (err) {
    if(err.response){
      //Server responded with a status other than 200 range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      if(err.response.status === 404){
        alert('Error: Page Not Found');
      }
    }else if(err.request){
      //Request was made but no response
      console.error(err.request);
    }else{
      console.error(err.message);
    }
  }
}

// CANCEL TOKEN
async function cancelToken() {
  const source = axios.CancelToken.source();

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {cancelToken: source.token});
    showOutput(res);
  } catch (thrown) {
    if(axios.isCancel(thrown)){
      console.log('Request canceled', thrown.message);
    }else{
      console.log(thrown);
    }  
  }

  if(true){
    source.cancel('Request canceled');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
  return config;
}, err => Promise.reject(err));

// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
