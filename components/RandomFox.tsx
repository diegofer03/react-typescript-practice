interface Props {
    image: string;
  }

// type Props = {
//     image: string;
//     alt: string;
//       // another prop
// };

function RandomFox({image}: Props): JSX.Element {
  return (
    <img width={'320'}
    src={image} className="rounded-md mx-auto bg-gray-300"/>
  )
}

export default RandomFox