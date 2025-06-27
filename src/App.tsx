import CardDetails from './components/card-details'
import Header from './components/header'
import InputForm from './components/Input-form'
import './index.css'

function App() {

  return (
    <div className="min-h-screen w-screen bg-[#F4EEE8] flex justify-center mt-10">
       <div className="flex flex-col bg-white w-2/3  rounded-2xl overflow-hidden">
          <Header />
        <div className='flex flex-col p-5'>
          <p className='text-[#bd6725] font-bold text-3xl'>
            Detalles de la celebracion
          </p>
          <div className=" flex flex-wrap justify-center">
            <CardDetails
              title='Fecha'
              description='Sabado,28 de junio de 2025'
            />
            <CardDetails
              title='Hora'
              description='8:30'
            />
            <CardDetails
              title='Lugar'
              description='Valinor'
            />
            <CardDetails
              title='Festejado'
              description='Mariel Valle'
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
        <div className='flex flex-col p-5'>
          <h2 className='text-[#bd6725] font-bold text-3xl'>
            Confirma tu Asistencia
          </h2>
          <div>
            <InputForm
              title='Nombre completo'
              placeHolder='Tu nombre completo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
