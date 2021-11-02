import faker from 'faker';
import { useState, useEffect } from 'react';
import Story from './Story';
import { useSession } from 'next-auth/react';
import { PlusIcon } from '@heroicons/react/solid';


function Stories() {
    const { data: session } = useSession();

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);

    }, []);

    return (
        <div className='flex space-x-4 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-100'>
            {session && (
                <div className='relative'>
                    <Story
                        key='me'
                        img={session.user.image}
                        username={session.user.username}
                    />
                    <PlusIcon className='absolute bottom-4 -right-1 text-xs w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white'/>
                </div>
            )}

            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
