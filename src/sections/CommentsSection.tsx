// Api
import { useEffect, useState } from 'react';
import { type GetCommentData, getCommentsApi, postCommentApi } from '../api';

// Components
import PurpleButton from '../components/buttons/PurpleButton';

// Hooks
import useDateHelper from '../helpers/dateHelper';

type AlertOptions = 'success' | 'error' | null;

const formInitialState = { name:'', comment:'' }

export default function CommentsSection () {

  useEffect(() => { startGetComments() }, []);

  const { getDMYDate } = useDateHelper();

  const [ formData, setFormData ] = useState(formInitialState);

  const [ savedComments, setSavedComments ] = useState<GetCommentData[]>([]);

  const [ shouldShowAlert, setShouldShowAlert ] = useState<AlertOptions>(null);
  
  const [ isFormLoading, setIsFormLoading ] = useState(false);

  const isFormInvalid = (formData.name === '' || formData.comment === '');

  // On Change
  function onChangeInput (e:React.ChangeEvent<HTMLInputElement>) {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  function onChangeTextArea (e:React.ChangeEvent<HTMLTextAreaElement>) {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  // Start
  async function startGetComments () { 
    
    const comments = await getCommentsApi();

    setSavedComments(comments.data);
    
  }

  async function startPostComment (e:React.FormEvent<HTMLFormElement>) {

    try {

      e.preventDefault();

      setIsFormLoading(true);

      await postCommentApi(getFormValue());

      setShouldShowAlert('success');

      setFormData(formInitialState);

      setTimeout(() => setShouldShowAlert(null), 3000);

      setIsFormLoading(false);

      startGetComments();

    } catch (error) {

      setShouldShowAlert('error');

      setTimeout(() => setShouldShowAlert(null), 3000);

      setIsFormLoading(false);

    }

  }

  // Get
  function getFormValue () {

    return {

      name:formData.name.toUpperCase(),

      comment:formData.comment,

      date:getDMYDate()

    }

  }

  return (

    <div className='bg-gray-100'>

      <div className='p-8 md:p-12 bg-gray-100 flex flex-col gap-4'>

        <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>

          <form className='flex flex-col gap-4' onSubmit={startPostComment}>

            <h2 className="text-2xl font-semibold text-gray-800">Comentarios</h2>

            { shouldShowAlert === 'success' && <SuccessAlert/> }

            { shouldShowAlert === 'error' && <ErrorAlert/> }

            <input 
              className="title border border-gray-300 py-2 px-3 outline-none" 
              placeholder="Nombre" 
              type="text"
              onChange={onChangeInput}
              name='name'
              value={formData.name}
              disabled={isFormLoading}
            />

            <textarea 
              className="description bg-white sec p-3 h-40 border border-gray-300 outline-none" 
              placeholder="Comentario"
              onChange={onChangeTextArea}
              name='comment'
              value={formData.comment}
              disabled={isFormLoading}
            />

            <div>
              <PurpleButton 
                type='submit'
                disabled={isFormLoading || isFormInvalid}
              >Enviar</PurpleButton>
            </div>

          </form>

          <div className='flex flex-col gap-4'>

            <h2 className="text-2xl font-semibold text-gray-800">Comentarios Pasados</h2>

            {savedComments.map((row, key) => <ComponentElement key={key} {...row}/> )}

          </div>

        </div>

      </div>

    </div>

  )
  
}

function ComponentElement (props:GetCommentData) {

  return (

    <div className='flex flex-col border border-gray-300 bg-white'>

      <div className='flex flex-col gap-2 p-4'>

        <div className='fle flex-col'>

          <h4 className='font-medium'>{props.name}</h4>

          <small className='text-gray-600'>{props.date}</small>

        </div>

        <p>{props.comment}</p>

      </div>

    </div>

  )

}

function SuccessAlert () {
  
  return (

    <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4' role='alert'>

      <p className='font-bold'>Tu comentario ha sido publicado</p>

      <p>Gracias por tu opinión</p>

    </div>

  )

}

function ErrorAlert () {
  
  return (

    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4' role='alert'>

      <p className='font-bold'>Tu comentario no ha sido publicado</p>

      <p>Por favor, contacta al administrador</p>

    </div>

  )

}