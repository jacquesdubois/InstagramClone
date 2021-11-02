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
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
