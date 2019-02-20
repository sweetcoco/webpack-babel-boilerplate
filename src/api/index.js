export async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await response.json();

    return json;
}