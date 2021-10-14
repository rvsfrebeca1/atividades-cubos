import { useContext } from 'react'
import contextoDeUsuario from '../context/contextoDeUsuario'


export default function useCosumer() {
    return useContext(contextoDeUsuario)
}