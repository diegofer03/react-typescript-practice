import { Inter } from 'next/font/google'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react';

interface ImageItems {
  id: string,
  url: string
}

const inter = Inter({ subsets: ['latin'] })

const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  // otra forma de hacerlo
  // const [images, setImages] = useState<string[]>([
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  // ])
  // const date = new Date()
  const [images, setImages] = useState<Array<ImageItems>>([
    {id: `${Date.now()}`, url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: `${Date.now()}`, url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: `${Date.now()}`, url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: `${Date.now()}`, url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
  ]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello world</h1>
      {images.map((image) => 
        <div key={image.id} className='p-4'>
          <RandomFox image={image.url}/>
        </div>
      )
      }
    </main>
  )
}
