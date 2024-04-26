import React from 'react'
 
const dashboard = () => {
  return (
    <div className = 'contenedor-general d-flex text-center'>
        <div className = 'sidebar '>
            <ul>
                <li>Login</li>
                <li>Opcion 1</li>
                <li>Opcion 2</li>
            </ul>

        </div>
        <div className = 'panel blockquote'>
          Bievenido al DashBoard
        </div>
    </div>
    
  )
}

export default dashboard