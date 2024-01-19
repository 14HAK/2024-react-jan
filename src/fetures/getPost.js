
export async function getPostData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts ');
  const data = await res.json();
  return data;
}
