import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import useForms from '@/lib/hooks/useForms';

const UsersFormsProvider = ({ children, reloadUsers, resetFilters }) => {
   const { currentForm, currentUser, setFilterForm, setCreateForm, setDeleteForm, setEditForm } =
      useForms();

   const onSuccess = () => {
      setFilterForm();
      reloadUsers();
      resetFilters();
   };

   return (
      <UsersFormsContext.Provider
         value={{
            currentForm,
            currentUser,
            setFilterForm,
            setCreateForm,
            setDeleteForm,
            setEditForm,
            onSuccess,
         }}>
         {children}
      </UsersFormsContext.Provider>
   );
};

export default UsersFormsProvider;
