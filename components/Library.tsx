'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/Hooks/useAuthModal';
import { useUser } from '@/Hooks/useUser';
import { use } from 'react';
import useUploadhModal from '@/Hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';



interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
    songs
}) => {

    const authModal = useAuthModal();
    const { user } = useUser();
    const uploadModa = useUploadhModal();

    const onCliclk = () => {
        if (!user) {
            return authModal.onOpen();
        }

        //Todo: Check for subscription
        return uploadModa.onOpen();
    };


    return (
        <div className="
        flex
        flex-col
        ">
            <div className="
            flex
            items-center
            justify-between
            px-5   
            pt-4
            ">
                <div className="
                inline-flex
                items-center
                gap-x-2
                ">
                    <TbPlaylist size={26} className='text-neutral-400' />
                    <p className='
                    text-neutral-400
                    font-medium
                    text-md
                    '>

                    </p>
                </div>
                <AiOutlinePlus
                    onClick={onCliclk}
                    size={20}
                    className='
                 text-natural-400
                 cursor-pointer 
                 hover:text-white
                 transition
                '
                />
            </div>
            <div className='
        flex
        flex-col
        gap-y-2
        mt-4
        px-3
        '>
                {songs.map((song) => (

                    <MediaItem
                    key={song.id}
                    data={song}
                    onClick={() => {}}
                    />
                ))}

            </div>
        </div>

    );
}

export default Library;