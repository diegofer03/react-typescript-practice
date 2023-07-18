import React ,{ useEffect, useRef, useState } from "react";

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    onLazyLoad?: (node: HTMLImageElement) => void
  }

// type Props = {
//     image: string;
//     alt: string;
//       // another prop
// };

function RandomFox({src , onLazyLoad, ...imgProps}: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null)
  const [currentSrc, setSrc] = useState<string>('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')
  const onLazyRef = useRef(onLazyLoad)
  useEffect(()=>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=> {
        if (!entry.isIntersecting || !node.current) return
        setSrc(currentSrc)
        if(typeof onLazyRef.current === 'function') onLazyRef.current(node.current)
      })
    })
    if(node.current) observer.observe(node.current)

    return () => {
      observer.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <img ref={node}
    src={src} {...imgProps}/>
  )
}

export default RandomFox
