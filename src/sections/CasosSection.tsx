// Modules
import { useState } from 'react';

// Components
import PurpleButton from '../components/buttons/PurpleButton';

export default function CasosSection () {

  const [ isShowingPhotos, setIsShowingPhotos ] = useState(false);

  const toggleShowPhotos = () => setIsShowingPhotos(!isShowingPhotos);

  return (

    <>

      <div id="casos-exito-title"/>

      <section className="p-8 md:p-12 bg-gray-800 flex flex-col gap-4">

        <div className="flex justify-between items-center">

          <h2 className="text-white text-2xl font-semibold">Casos de Éxito</h2>

          <PurpleButton onClick={toggleShowPhotos}>
            {(isShowingPhotos) ? 'Ocultar Fotos' : 'Mostrar Fotos'}
          </PurpleButton>

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

                {caso.images.map((img, key) => <img src={img} className='aspect-square' style={{ filter:(isShowingPhotos) ? '' : 'blur(5px)' }} key={key}/>)}

              </div>

            </div>

          ))}

        </div>

      </section>

    </>

  )
  
}


const casosExitoList:CasoExitoData[] = [

  {
    title: 'Cáncer de Piel en Cara',
    subtitle: 'Veracruz, Ver.',
    description: `
      Másculino, 76 años. Diabético e hipertenso. Recibió injerto. Evolución 2 meses. Inició 05/10/2023. Finalizó 05/12/2023.
    `,
    images: [
      '/images/casos/caso-1/img5.jpg',
      '/images/casos/caso-1/img3.jpg',
      '/images/casos/caso-1/img1.jpg',
      '/images/casos/caso-1/img4.jpg',
      '/images/casos/caso-1/img2.jpg',
    ]
  },

  {
    title: 'Hérida por Infección por E. Cloacae y E. Coli',
    subtitle: 'Veracruz, Ver.',
    description: `
      Femenino, 12 años. Inició 28/05/2022. Finalizó 21/07/2022.
    `,
    images: [
      '/images/casos/caso-2/img2.jpeg',
      '/images/casos/caso-2/img1.jpeg',
      '/images/casos/caso-2/img3.jpeg',
      '/images/casos/caso-2/img6.jpeg',
      '/images/casos/caso-2/img5.jpeg',
      '/images/casos/caso-2/img4.jpeg',
    ]
  },

  {
    title: 'Pie Diabético',
    subtitle: 'Soledad de Doblado, Ver.',
    description: `
      Masculino, 44 años. Evolución Diabetes Mellitus 10 años. Inició 10/09/2022. Finalizó 31/10/2022.
    `,
    images: [
      '/images/casos/caso-3/img4.jpeg',
      '/images/casos/caso-3/img1.jpeg',
      '/images/casos/caso-3/img5.jpeg',
      '/images/casos/caso-3/img3.jpeg',
      '/images/casos/caso-3/img6.jpeg',
      '/images/casos/caso-3/img2.jpeg',
    ]
  },

  {
    title: 'Pie Diabético',
    subtitle: 'Veracruz, Ver.',
    description: `
      Masculino, 48 años. Evolución Diabetes Mellitus 12 años. Inició 04/05/2022. Finalizó 20/02/2023.
    `,
    images: [
      '/images/casos/caso-4/img5.jpeg',
      '/images/casos/caso-4/img1.jpeg',
      '/images/casos/caso-4/img2.jpeg',
      '/images/casos/caso-4/img6.jpeg',
      '/images/casos/caso-4/img4.jpeg',
      '/images/casos/caso-4/img7.jpeg',
    ]
  },

  {
    title: 'Quemadura de 2do Grado con Leña de Fogón',
    subtitle: 'Jamapa, Ver.',
    description: `
      Femenino, 82 años. Inició 07/08/2022. Finalizó 25/09/2022.
    `,
    images: [
      '/images/casos/caso-5/img7.jpeg',
      '/images/casos/caso-5/img6.jpeg',
      '/images/casos/caso-5/img5.jpeg',
      '/images/casos/caso-5/img3.jpeg',
      '/images/casos/caso-5/img2.jpeg',
      '/images/casos/caso-5/img4.jpeg',
    ]
  },

];

type CasoExitoData = {
  title:string;
  subtitle:string;
  description:string;
  images:string[];
}