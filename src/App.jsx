import UsersList from './components/UsersList/UsersList';
import { UsersProvider } from './context/usersContext';

function App() {
   return (
      <>
         <UsersProvider>
            <h1>Lista de usuarios</h1>
            <main>
               <UsersList />
            </main>
         </UsersProvider>
      </>
   );
}

export default App;
