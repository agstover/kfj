import { ReactPhotoCollage } from 'react-photo-collage'


export default function Collage({photos, title}) {
    const photoData = photos.map(photo => ({src:photo}))
    const setting = {
        width: '600px',
        height: ['250px', '170px'],
        layout: [1, 4],
        photos: photoData,
        showNumOfRemainingPhotos: true
    }
    return (
        <div className='flex flex-col justify-center mb-12 flex-grow text-center'>
            <h1 className={'text-3xl uppercase mb-2'}>{title}</h1>
            <div className={'self-center'}>
            <ReactPhotoCollage {...setting} />       
            </div>     
        </div>
    )
}