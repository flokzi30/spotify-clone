'use client';

import { Song } from "@/types";
import SongItem from "./SongItem";
import useOnPlay from "@/Hooks/useOnPlay";

interface PageContentProps {
    songs : Song[]
}
const PageContent: React.FC <PageContentProps> = ({

    songs
}) => {
    const onPlay = useOnPlay(songs);

    if(songs.length === 0) {
        return (
            <div>
                No songs availabe to play
            </div>
        )
    }
    return (  

        <div className="
        grid 
        grid=cols-2
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
        gap-4
        mt-4
        ">
                {songs.map((item) => (
                    <SongItem
                    key={item.id}
                    onClick={onPlay}
                    data={item}
                    />
                ))}
        </div>
    );
}
 
export default PageContent;