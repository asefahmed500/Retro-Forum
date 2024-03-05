const LoadPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();

    const posts = data.posts; // Corrected variable name to 'posts'
    console.log(posts);
    DisplayAllposts(posts); // Pass the correct variable to the function
};

const DisplayAllposts = (posts) => {
    const PostsContainer = document.getElementById('Posts-Container');
    PostsContainer.textContent = '';

    // Use the correct variable name, which is 'posts' instead of 'post'
    posts.forEach((post) => {
        const postCard = document.createElement('div');
        postCard.classList = 'card w-[772px] bg-base-100 shadow-xl';
        postCard.innerHTML = `
        <div class="card-body flex flex-row gap-8 ">
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary"></span>
                        <div class="grid w-32 h-32 bg-base-300 place-items-center">
                        <img alt="Tailwind CSS examples" src=" ${post.image}" />
                        </div>

                    </div>

                    <div class="space-y-4">
                        <div class="flex flex-row gap-4">
                            <h6># Music</h6>
                            <h6>Author : Awlad Hossain</h6>
                        </div>
                        <h2 class="card-title">${post.title}</h2>
                        <p>${post.description}</p>

                        <div class="card-actions justify-between">
                            <div class="flex flex-row gap-4">
                                <img src="images/vector (8).png" alt=""> <span>${post.view_count}</span>
                                <img src="images/vector (5).png" alt=""> <span>${post.comment_count}</span>
                                <img src="images/vector (6).png" alt=""> <span>${post.posted_time}</span>
                                <!-- Add more fields from the 'post' object as needed -->
                            </div>

                            <button class="btn "><img src="images/Vector (7).png" alt=""></button>
                        </div>
                    </div>
        `;
        PostsContainer.appendChild(postCard);

    });
};

LoadPosts();
