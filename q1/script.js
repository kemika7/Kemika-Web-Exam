const loadingDiv = document.getElementById('loading');
const commentsList = document.getElementById('comments-list');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            loadingDiv.style.display = 'none';

            data.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `
                    Post ID: ${comment.postId} <br>
                    ID: ${comment.id} <br>
                    Name: ${comment.name} <br>
                    Email: ${comment.email} <br>
                    Body: ${comment.body}
                `;
                commentsList.appendChild(li);
            });
        }, 2000);
    })
    .catch(error => {
        loadingDiv.textContent = 'Failed to load comments.';
        console.error('Error fetching comments:', error);
    });