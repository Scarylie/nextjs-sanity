import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <h1>Hero</h1>
      <Image src="/image1.jpg" alt="me" width="64" height="64" />
    </div>
  )
}
