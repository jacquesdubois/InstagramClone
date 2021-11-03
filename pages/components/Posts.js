import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Post from './Post';

const posts =[
    {
        id: '123',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'http://links.papareact.com/3ke',
        caption: 'Sample pic for my build!!!'
    },
    {
        id: '456',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'http://links.papareact.com/3ke',
        caption: 'Sample pic for my build!!!'
    },
    {
        id: '789',
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'http://links.papareact.com/3ke',
        caption: 'Sample pic for my build!!!'
    },
]

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => onSnapshot(
            query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        ),
        [db]
    );

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    )
}

export default Posts
