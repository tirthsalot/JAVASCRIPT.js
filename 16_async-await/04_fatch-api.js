
async function api() {

    const x1 = await fetch("https://jsonplaceholder.typicode.com/posts");

    const x2 = await x1.json();

}

const getData = fetch("https://jsonplaceholder.typicode.com/posts")

getData.then((response) => {
    return response.json();
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

//example

async function fetchApi() {
	
    const a = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	
    const api = await a.json();

	console.log(api);
}

fetchApi();



