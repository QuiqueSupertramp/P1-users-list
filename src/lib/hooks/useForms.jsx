import USERS_FORMS from '@/lib/constants/users_forms';
import { useState } from 'react';

const useForms = () => {
   const [currentForm, setCurrentForm] = useState({
      form: USERS_FORMS.FILTERS,
   });

   const setFilterForm = () => setCurrentForm({ form: USERS_FORMS.FILTERS });
   const setCreateForm = () => setCurrentForm({ form: USERS_FORMS.CREATE });
   const setEditForm = user => setCurrentForm({ form: USERS_FORMS.EDIT, user });
   const setDeleteForm = user => setCurrentForm({ form: USERS_FORMS.DELETE, user });

   return {
      currentForm: currentForm.form,
      currentUser: currentForm.user,
      setFilterForm,
      setCreateForm,
      setDeleteForm,
      setEditForm,
   };
};

export default useForms;
