const LoadPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();

    const posts = data.posts; 
    console.log(posts);
    DisplayAllposts(posts); 
};

const DisplayAllposts = (posts) => {
    const PostsContainer = document.getElementById('Posts-Container');
    PostsContainer.textContent = '';

  
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
                               
                            </div>

                            <button class="btn "><img src="images/Vector (7).png" alt=""></button>
                        </div>
                    </div>
        `;
        PostsContainer.appendChild(postCard);

    });
};

LoadPosts();


const latestPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();

    const posts = data; 
    console.log(posts);
    DisplayLatestPosts(posts); 
};



const DisplayLatestPosts = (posts) => {
    const PostsContainer = document.getElementById('latest-post-container');
    PostsContainer.textContent = '';

    posts.forEach((post) => {
        const postCard = document.createElement('div');
        postCard.classList = 'card w-96 bg-base-100 shadow-xl';
        postCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${post.cover_image}" alt="Cover Image" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h6>${post.author.posted_date}</h6>
                <div class="card-title">
                    <p>${post.title}</p>
                </div>
                <p>${post.description}</p>
                <div class="flex flex-row gap-4">
                    <div class="avatar indicator">
                        <span class="indicator-item badge badge-secondary"></span>
                        <div class="w-20 h-20 rounded-lg">
                            <img alt="Profile Image" src="${post.profile_image}" />
                        </div>
                    </div>
                    <div>
                        <h6 class="font-bold">${post.author.name}</h6>
                        <p>${post.author.designation || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        `;
        PostsContainer.appendChild(postCard);
    });
};

latestPost(); 
