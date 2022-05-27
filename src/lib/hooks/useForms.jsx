import USERS_FORMS from '@/lib/constants/users_forms';
import { useState } from 'react';

const useForms = () => {
   const [currentForm, setCurrentForm] = useState(USERS_FORMS.FILTERS);

   const setFilterForm = () => setCurrentForm(USERS_FORMS.FILTERS);
   const setCreateForm = () => setCurrentForm(USERS_FORMS.CREATE);
   const setDeleteForm = () => setCurrentForm(USERS_FORMS.DELETE);

   return { currentForm, setFilterForm, setCreateForm, setDeleteForm };
};

export default useForms;
