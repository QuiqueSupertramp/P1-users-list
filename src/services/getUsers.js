import { URL_API } from '@/lib/constants/api';

const FETCH_ERROR = {
   usersList: [],
   status: {
      ok: false,
      loading: false,
      errorMessage: 'Error al cargar usuarios',
   },
};

const getUsers = async () => {
   try {
      const res = await fetch(URL_API);
      if (res.ok === false) throw new Error();

      const data = await res.json();
      return {
         usersList: data,
         status: { ok: true, loading: false, errorMessage: '' },
      };
   } catch (error) {
      return FETCH_ERROR;
   }
};

export default getUsers;
