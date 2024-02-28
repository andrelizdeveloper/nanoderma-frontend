// Modules
import { useState } from 'react';

// Components
import WhiteButton from '../components/buttons/WhiteButton';

export default function CasosSection () {

  const [ isShowingPhotos, setIsShowingPhotos ] = useState(false);

  const toggleShowPhotos = () => setIsShowingPhotos(!isShowingPhotos);

  return (

    <section className="p-8 md:p-12 bg-gray-800 flex flex-col gap-4">

      <div className="flex justify-between items-center">

        <h2 className="text-white text-2xl font-semibold">Casos de Éxito</h2>

        <WhiteButton onClick={toggleShowPhotos} label={(isShowingPhotos) ? 'Ocultar Fotos' : 'Mostrar Fotos'} />

      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12">

        {casosExitoList.map((caso, key) => (

          <div className="flex flex-col gap-4" key={key}>

            <div>

              <h3 className="text-white">{caso.subtitle}</h3>

              <h2 className="text-white text-xl font-semibold">{caso.title}</h2>

              <p className="text-white">{caso.description}</p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">

              {caso.images.map((img, key) => <img src={img} style={{ filter:(isShowingPhotos) ? '' : 'blur(5px)' }} key={key}/>)}

            </div>

          </div>

        ))}

      </div>

    </section>

  )
  
}


const casosExitoList:CasoExitoData[] = [

  {
    title: 'Caso de Éxito 1',
    subtitle: 'Subtítulo 1',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id quibusdam voluptatum quisquam tempore cum culpa! Odit, 
      sed doloremque nemo quisquam debitis, doloribus quidem eaque, dicta quia enim molestias error.
    `,
    images: [
      '/images/casos/caso-1/img3.jpg',
      '/images/casos/caso-1/img1.jpg',
      '/images/casos/caso-1/img4.jpg',
      '/images/casos/caso-1/img2.jpg',
    ]
  },

  {
    title: 'Caso de Éxito 2',
    subtitle: 'Subtítulo 2',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id quibusdam voluptatum quisquam tempore cum culpa! Odit, 
      sed doloremque nemo quisquam debitis, doloribus quidem eaque, dicta quia enim molestias error.
    `,
    images: [
      '/images/casos/caso-2/img1.jpg',
      '/images/casos/caso-2/img2.jpg',
      '/images/casos/caso-2/img3.jpg',
      '/images/casos/caso-2/img4.jpg',
    ]
  },

  {
    title: 'Caso de Éxito 3',
    subtitle: 'Subtítulo 3',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id quibusdam voluptatum quisquam tempore cum culpa! Odit, 
      sed doloremque nemo quisquam debitis, doloribus quidem eaque, dicta quia enim molestias error.
    `,
    images: [
      '/images/casos/caso-3/img4.jpg',
      '/images/casos/caso-3/img1.jpg',
      '/images/casos/caso-3/img3.jpg',
      '/images/casos/caso-3/img2.jpg',
    ]
  },

];

type CasoExitoData = {
  title:string;
  subtitle:string;
  description:string;
  images:string[];
}