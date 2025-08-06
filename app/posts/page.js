export default async function PostsPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts = await res.json();
  
    return (
      <div>
        <h1>List of Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }