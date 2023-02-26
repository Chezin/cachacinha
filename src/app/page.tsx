import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className="aksjd">
     
      <div className="mt-10">
        <Image
          className="ml-"
          src="/cachacinha.svg"
          alt="cachacinha"
          width={600}
          height={600}
          priority
        />
        <Image
        className="ml-"
        src="/play.svg"
        alt="play"
        width={600}
        height={600}
        priority
      />
      </div>
</main>
  )}

