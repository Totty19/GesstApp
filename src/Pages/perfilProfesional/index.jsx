import ofice from '../../Assets/oficeBlack.png'
import estrella from '../../Assets/estrella.png'
import per6 from '../../Assets/per6.png'
import flecha from '../../Assets/Flecha.png'
import add from '../../Assets/add-circle.png'
import List from '../../Assets/List.png'
import { useState } from 'react'


const PerfilProf = () =>{
    const [show, setShow] = useState()
    return (
        <>
            <header className='headProf'>
                <img src={ofice} alt="" className='imgHead' />
                <div className='perProf'>
                    <img src={per6} alt="" />
                    <h2>Hattie McKenzie</h2>
                    <div>
                        <h5>Abogado</h5>
                        <img src={estrella} alt="" className='estrella'/>
                        <h5>4.8</h5>
                    </div>
                </div>
            </header>
            <main className='mainProf'>
                <div className='mainP'>
                    <button onClick={() => setShow(!show)}>Servicios <img src={flecha} alt="" /> </button>
                    {show && <Buton/>}
                    <button>Número de Contacto <img src={flecha} alt="" /></button>
                </div>
                <div className='mainP'>
                    <button>Correo <img src={flecha} alt="" /></button>
                    <button>Contraseña <img src={flecha} alt="" /></button>
                    <button>Ubicación <img src={flecha} alt="" /></button>
                    <button>Especialidad <img src={flecha} alt="" /></button>
                    <button>Rango de Trabajo <img src={flecha} alt="" /></button>
                </div>
            </main>
        </>
    )
}

const Buton = () =>{
    const [show8, setShow8] = useState()
    return(
        <div className='ServBtn'>
            <button onClick={() => setShow8(!show8)}>Agregar Servicios <img src={add} alt="" /></button>
            <button>Mis Servicios <img src={List} alt="" /></button>
            {show8 && <Servicio/>}
        </div>
    )
}

const Servicio = () => {
    const [show8, setShow8] = useState()
    return(
        <div className='ContServis'>
            <div className='servisTit'>
                <h2>Nuevo Servicio</h2>
                <h5>Indicar el servicio a promocionar en nuestra plataforma indicando la ubicación.</h5>
            </div>
            <form method="get" className='formServis'>
                <label htmlFor="">Nombre del Servicio*
                    <input type="text" required placeholder='Ej: Apostilla'/>
                </label>
                <label htmlFor="">Ubicacion*
                    <input type="text" required placeholder='Ej: Montevideo'/>
                </label>
                <label htmlFor="">Dirección 'opcional'
                    <input type="text"placeholder='Ej: Artigas'/>
                </label>
                <div className='ContBtn'>
                    <input type="reset" value='Cancelar' className='red'/>
                    <input type="submit" value='Confirmar' className='submit'/>
                </div>
            </form>
        </div>
    )
}




export { PerfilProf }