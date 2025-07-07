import Image from 'next/image'

export default function ImageGallery() {
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
    <div className="flex flex-col gap-4">
      <p className="text-[48px] leading-14 -tracking-[0.96px] pb-10 font-medium md:pb-14">Photography</p>
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