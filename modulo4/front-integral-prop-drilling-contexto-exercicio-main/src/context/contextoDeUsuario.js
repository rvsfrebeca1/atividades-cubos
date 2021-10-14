import { createContext } from 'react'
import useUserInfos from '../hooks/useUserInfos'


const ContextoDeUsuario = createContext({})

export function UsuarioProvider(props) {
    const infos = useUserInfos()

    return (
        <ContextoDeUsuario.Provider value={infos}>
            {props.children}
        </ContextoDeUsuario.Provider>
    )

}

export default ContextoDeUsuario
