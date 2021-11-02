function Story({ img, username }) {
    return (
        <div className='flex flex-col items-center'>
            <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
                src={img}
            />
            <p className='text-xs w-14 truncate textp-center'>{username}</p>
        </div>
    )
}

export default Story
