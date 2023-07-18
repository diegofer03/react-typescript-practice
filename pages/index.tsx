import { Inter } from 'next/font/google'
import RandomFox from '@/components/RandomFox'
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import type { Props } from '@/components/RandomFox';

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
  const onLazyLoad: Props['onLazyLoad'] = (imageNode) => {
    console.log('image loaded '+ imageNode)
  }
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);
  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault()

    const newImage: IFoxImageItems = {
      id: `${Date.now()+1}`,
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`
    }

    setImages([
      newImage,
      ...images,
    ])
    
  } 
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>TypeScript Practice</h1>
      <button className='border border-white rounded-md w-40 mt-4 mb-4' onClick={handleClick}>Add Fox</button>
      {images.map((image) => 
        <div key={image.id} className='p-4'>
          <RandomFox width={'320'} src={image.url} onLazyLoad={onLazyLoad} className="rounded-md mx-auto bg-gray-300"/>
        </div>
      )
      }
    </main>
  )
}