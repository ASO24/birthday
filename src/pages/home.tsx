import { useEffect, useState } from 'react'
import '../index.css'
import { faCalendar, faClock, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faPersonDress } from '@fortawesome/free-solid-svg-icons/faPersonDress'
import insertarAsistente from '../services/asistentes'
import type { Asistente } from '../schemas/asistentes'
import CardDetails from '../components/card-details'
import Header from '../components/header'
import Countdown from '../components/contador'
import InputForm from '../components/Input-form'
import RadioSiNo from '../components/select'
import Button from '../components/button'

function Home() {
  const [nombre, setNombre] = useState('')
  const [messaje, setmessaje] = useState('')
  const [asistencia, setAsistencia] = useState(false)
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (nombre != '' && messaje != '') {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  }, [nombre, messaje])

  const Send = async () => {
    const nuevo: Asistente = {
      nombre: nombre,
      confirmado: asistencia,
      mensaje: messaje
    }
    const res = await insertarAsistente(nuevo)
    if (res?.success) {
      alert('registrado!')
      setNombre('')
      setmessaje('')
      setAsistencia(false)
    }
  }
  return (
    <div className="flex min-h-screen w-full bg-[#F4EEE8] justify-center mt-10 px-4">
      <div className="flex flex-col bg-white w-full sm:w-2/3 sm:max-w-8xl rounded-2xl overflow-hidden mb-10">
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
              description='búho'
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
            <Countdown targetDate="2025-06-28T20:30:00" />
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
              value={messaje} />
            <Button text='Enviar respuesta'
              isDisable={disable}
              onCLick={Send} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
