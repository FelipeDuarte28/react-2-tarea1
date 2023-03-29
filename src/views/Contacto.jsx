import React from 'react'

const Contacto = () => {
    return (
        <div className="text-center m-5">

            <h1>Cuéntanos, ¿En qué te podemos ayudar?</h1>
            <form className="m-5">
                <div className="mb-3 px-5">
                    <label for="exampleInputEmail1" className="form-label">Correo:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 px-5">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripción:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto