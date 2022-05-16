import { URL_API } from '@/lib/constants/api';

const FETCH_ERROR = {
   users: undefined,
   status: {
      isOk: false,
      errorMessage: 'Error al cargar usuarios',
   },
};

const getUsers = async signal => {
   try {
      const res = await fetch(URL_API, { signal });
      if (res.ok === false) throw new Error();

      const data = await res.json();
      return {
         users: data,
         status: { isOk: true, errorMessage: '' },
      };
   } catch (error) {
      if (error.name === 'AbortError') return;
      return FETCH_ERROR;
   }
};

export default getUsers;
