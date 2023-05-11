/* global $ */
(async function () {
    'use strict';

    const mainPage = document.getElementsByClassName('mainPage');

    const userPage = document.createElement('div');
    userPage.setAttribute('class', 'userPage');

    const userPageTitle = document.createElement('h2');
    userPageTitle.setAttribute('class', 'userPageTitle');
    userPage.append(userPageTitle);

    const postPage = document.createElement('div');
    postPage.setAttribute('class', 'postPage');

    const postPageTitle = document.createElement('h2');
    postPageTitle.setAttribute('class', 'postPageTitle');
    postPage.append(postPageTitle);

    async function fetchUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            if (!response.ok) {
                throw new Error(response.status);
            }

            console.log(users);
            displayUsers(users);
        }
        catch (e) {
            console.error(e.messge);
        }
    }

    function displayUsers(users) {
        for (let i = 0; i < users.length; i++) {
            createUserBox(users[i]);
        }
    }

    function createUserBox(user) {
        let userBox = document.createElement('div');
        userBox.setAttribute('class', 'user');

        let name = document.createElement('h4');
        name.innerText = `${user.name}`;
        let website = document.createElement('h5');
        website.innerText = `${user.website}`;

        userBox.append(name, website);

        let companyDetails = document.createElement('p');
        let br = document.createElement('br');
        companyDetails.append(user.company.name);
        companyDetails.append(br);
        companyDetails.append(user.company.catchPhrase);

        userBox.append(companyDetails);

        userPage.append(userBox);

        userBox.addEventListener('click', async () => {
            const posts = await fetchPosts(user.id);
            userBox.remove();
        });

        mainPage[0].append(userPage);
    }

    async function fetchPosts(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const posts = await response.json();

            if (!response.ok) {
                throw new Error(response.status);
            }

            console.log(posts);
            displayPosts(posts);
        }
        catch (e) {
            console.error(e.message);
        }
    }

    function displayPosts(posts) {
        userPage.remove();
        for (let i = 0; i < posts.length; i++) {
            createPostBox(posts[i]);
        }
    }

    function createPostBox(post) {
        let postBox = document.createElement('div');
        postBox.setAttribute('class', 'post');

        let subject = document.createElement('h4');
        subject.setAttribute('class', 'subject');
        subject.innerText = `${post.title}`;

        let info = document.createElement('p');
        info.setAttribute('class', 'postContent');
        info.innerText = `${post.body}`;

        let button = document.createElement('button');
        button.setAttribute('class', 'show');
        button.innerText = 'Show Comments';

        postBox.append(subject, info, button);

        postPage.append(postBox);

        mainPage[0].append(postPage);

        let numClicks = 0;
        button.addEventListener('click', async () => {
            numClicks++;

            let commentsDiv = document.createElement('div');
            commentsDiv.setAttribute('class', 'commentsDiv');

            if (numClicks % 2 === 1) {
                const comments = await fetchComments(post.id);
                for (let i = 0; i < comments.length; i++) {
                    let commentBox = document.createElement('div');
                    commentBox.setAttribute('class', 'comment');

                    let name = document.createElement('h5');
                    name.setAttribute('class', 'name');
                    name.innerText = `${comments[i].name}`;

                    let email = document.createElement('h5');
                    email.setAttribute('class', 'email');
                    email.innerText = `${comments[i].email}`;

                    let text = document.createElement('p');
                    text.setAttribute('class', 'text');
                    text.innerText = `${comments[i].body}`;

                    commentBox.append(name, email, text);

                    commentsDiv.append(commentBox);
                }

                postBox.append(commentsDiv);

                button.innerText = 'Hide Comments';
                console.log(numClicks);
            }
            else {
                let elements = postBox.querySelectorAll(".commentsDiv");
                for(let i = 0; i < elements.length; i ++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
                button.innerText = 'Show Comments';
            }
        });


    }

    async function fetchComments(postId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const comments = await response.json();

            if (!response.ok) {
                throw new Error(response.status);
            }

            console.log(comments);
            return comments;
        }
        catch (e) {
            console.error(e.message);
        }
    }

    await fetchUsers();
})();