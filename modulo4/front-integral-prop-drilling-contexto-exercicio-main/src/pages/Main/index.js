import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import './styles.css';
import { UsuarioProvider } from '../../context/contextoDeUsuario'
import useConsumer from '../../hooks/useConsumer'
export default function Main() {
  const { handleDeleteUser } = useConsumer()



  return (
    <UsuarioProvider>
      <div className="container-main">


        <UsersRegister />

        <UsersList />
      </div>

    </UsuarioProvider>
  );
}
