import Image from 'next/image'

export default function StyleguideGallery() {
  const imageGalllery = [
    {
      title: 'Image 1',
      image: '/images/image-grid-1.png',
    },
    {
      title: 'Image 2',
      image: '/images/image-grid-2.png',
    },
    {
      title: 'Image 3',
      image: '/images/image-grid-3.png',
    },
    {
      title: 'Image 4',
      image: '/images/image-grid-4.png',
    },
    {
      title: 'Image 5',
      image: '/images/image-grid-5.png',
    }
  ]

  return (
    <div className="flex flex-col gap-8 mt-12">
      <h2 className="h2 mt-12 mb-6 uppercase">Photography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[9px]">
        {imageGalllery.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={image.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  )
}