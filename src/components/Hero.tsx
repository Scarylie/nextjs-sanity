import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative text-white">
      <Image
        className="h-auto w-full object-cover overflow-hidden aspect-9/16 sm:aspect-video"
        src="/image1.jpg"
        alt="me"
        sizes="100vw"
        width={800}
        height={450}
        style={{
          width: '100%',
          height: 'auto',
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 px-4 lg:px-0">
        <div className="flex flex-col">
          <p className="text-2xl">OVERLINE</p>
          <h1 className="text-6xl">WELCOME TO MAYA</h1>
          <p>
            Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con ipsum.
            Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}
