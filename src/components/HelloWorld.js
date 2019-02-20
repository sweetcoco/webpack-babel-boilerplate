import {getPost} from 'api';

async function HelloWorld() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('Hello Webpack-Babel-Boilerplate!');
    
    div.className = 'main';
    h1.appendChild(h1Text);
    document.body.appendChild(div);
    div.appendChild(h1);

    const postId = 1;
    const post = await getPost(postId);

    const postTitle = post.title || 'Oops title was null!';
    const p = document.createElement('p');
    const pText = document.createTextNode(postTitle);

    p.appendChild(pText);
    div.appendChild(p);
}

export default HelloWorld;