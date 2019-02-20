import {getPost} from 'api';

async function HelloWorld() {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const text = document.createTextNode('Hello World!');
    
    p.appendChild(text);
    document.body.appendChild(div);
    div.appendChild(p);

    const postId = 1;
    const post = await getPost(postId);

    const postTitle = post.title || 'Oops title was null!';
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode(postTitle);

    h1.appendChild(h1Text);
    div.appendChild(h1);
}

export default HelloWorld;