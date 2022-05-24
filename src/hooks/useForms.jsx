import USERS_FORMS from '@/lib/constants/users_forms';
import { useState } from 'react';

const useForms = () => {
   const [currentForm, setCurrentForm] = useState(USERS_FORMS.FILTERS);

   const setFilterForm = () => setCurrentForm(USERS_FORMS.FILTERS);
   const setCreateForm = () => setCurrentForm(USERS_FORMS.CREATE);

   return { currentForm, setFilterForm, setCreateForm };
};

export default useForms;
