import { ReactPhotoCollage } from 'react-photo-collage'

export default function Collage({photos, title}) {
    const photoData = photos.map(photo => ({source:photo}))
    const setting = {
        width: '100%',
        height: ['250px', '170px'],
        layout: [1, 4],
        photos: photoData,
        showNumOfRemainingPhotos: true
    }
    return (
        <div className='flex flex-col justify-center mb-12 w-full flex-grow text-center'>
            <h1 className={'text-3xl uppercase mb-2'}>{title}</h1>
            <div className={'self-center max-w-6xl w-full'}>
            <ReactPhotoCollage {...setting} />       
            </div>     
        </div>
    )
}