import { useEffect, useState } from 'react'
import CardDetails from './components/card-details'
import Header from './components/header'
import InputForm from './components/Input-form'
import './index.css'
import type { Asistente } from './schemas/asistentes'
import insertarAsistente from './services/asistentes'
import RadioSiNo from './components/select'
import Button from './components/button'
import { faCalendar, faClock, faLocation} from '@fortawesome/free-solid-svg-icons'
import { faPersonDress } from '@fortawesome/free-solid-svg-icons/faPersonDress'

function App() {
  const [nombre,setNombre]=useState('')
  const [messaje,setmessaje]=useState('')
  const [asistencia,setAsistencia]=useState(false)
  const [disable,setDisable]=useState(true)

  useEffect(()=>{
    if(nombre!='' && messaje!=''){
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  },[nombre,messaje])

  const Send= async ()=>{
    const nuevo: Asistente={
      nombre:nombre,
      confirmado:asistencia,
      mensaje:messaje
    }
    const res = await insertarAsistente(nuevo)
    if(res?.success){
      setNombre('')
      setmessaje('')
      setAsistencia(false)
    }
  }
  return (
    <div className="min-h-screen w-screen bg-[#F4EEE8] flex justify-center mt-10">
       <div className="flex flex-col bg-white w-2/3  rounded-2xl overflow-hidden mb-10">
          <Header />
        <div className='flex flex-col p-5'>
          <p className='text-[#bd6725] font-bold text-3xl'>
            Detalles de la celebracion
          </p>
          <div className=" flex flex-wrap justify-center">
            <CardDetails
              icon={faCalendar}
              title='Fecha'
              description='Sabado,28 de junio de 2025'
            />
            <CardDetails
              icon={faClock}
              title='Hora'
              description='8:30'
            />
            <CardDetails
              icon={faLocation}
              title='Lugar'
              description='Valinor'
            />
            <CardDetails
              icon={faPersonDress}
              title='Festejado'
              description='Mariel Valle,20 años'
            />
          </div>
        </div>
        <div className='flex flex-col p-5'>
          <h2 className='text-[#bd6725] font-bold text-3xl'>
            Cuenta regresiva
          </h2>
          <div className='flex justify-center'>
            <p className='text-red-300'>
              Proximamente
            </p>
          </div>
        </div>
        <div className='flex flex-col p-5 mb-5'>
          <h2 className='text-[#bd6725] font-bold text-3xl'>
            Confirma tu Asistencia
          </h2>
          <div>
            <InputForm
              title='Nombre completo'
              placeHolder='Tu nombre completo'
              onChange={setNombre}
              value={nombre}
            />
            <RadioSiNo
              name="asistencia"
              value={asistencia}
              onChange={setAsistencia}
            />
            <InputForm
            title='Mensaje'
            placeHolder='Deja un mensaje para la cumpleañera'
            onChange={setmessaje}
            value={messaje}/>
            <Button text='Enviar respuesta'
            isDisable={disable}
            onCLick={Send}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
