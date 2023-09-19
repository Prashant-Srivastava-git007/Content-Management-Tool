document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.getElementById('blog-container');
    const newPostForm = document.getElementById('new-post-form');

    // Function to create a new blog post
    function createNewPost(title, description, imageFile) {
        const newArticle = document.createElement('article');
        newArticle.className = 'blog-post';

        const newImage = document.createElement('img');
        newImage.src = URL.createObjectURL(imageFile);
        newImage.alt = title;

        const newTitle = document.createElement('h2');
        newTitle.textContent = title;

        const newMeta = document.createElement('p');
        newMeta.className = 'post-meta';
        const currentDate = new Date().toLocaleDateString();
        newMeta.textContent = `Published on ${currentDate} by User`;

        const newContent = document.createElement('p');
        newContent.textContent = description;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = '#';
        readMoreLink.className = 'read-more';
        readMoreLink.textContent = 'Read More';

        newArticle.appendChild(newImage);
        newArticle.appendChild(newTitle);
        newArticle.appendChild(newMeta);
        newArticle.appendChild(newContent);
        newArticle.appendChild(readMoreLink);

        blogContainer.appendChild(newArticle);
    }

    // Event listener for form submission
    newPostForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const titleInput = document.getElementById('post-title');
        const descriptionInput = document.getElementById('post-description');
        const imageInput = document.getElementById('post-image');

        createNewPost(titleInput.value, descriptionInput.value, imageInput.files[0]);

        // Clear the form fields
        titleInput.value = '';
        descriptionInput.value = '';
        imageInput.value = '';
    });
});
