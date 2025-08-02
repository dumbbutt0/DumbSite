// Get URL param like ?post=erc1271
const params = new URLSearchParams(window.location.search);
const post = params.get('post');

if (!post) {
  document.getElementById('blog-content').innerText = 'No blog post specified.';
} else {
  fetch(`/blogs/${post}.md`)
    .then(res => {
      if (!res.ok) throw new Error('Blog not found');
      return res.text();
    })
    .then(markdown => {
      document.getElementById('blog-content').innerHTML = marked.parse(markdown);
    })
    .catch(err => {
      document.getElementById('blog-content').innerText = 'Error loading blog post.';
      console.error(err);
    });
}
