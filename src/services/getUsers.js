import { URL_API } from '@/lib/constants/api';

const getUsers = async signal => {
   try {
      const res = await fetch(URL_API, { signal });
      if (res.ok === false) throw new Error();

      const users = await res.json();
      return {
         users,
         status: { isOk: true, errorMessage: '', aborted: false },
      };
   } catch (error) {
      if (error.name === 'AbortError') return ABORT_ERROR;
      return FETCH_ERROR;
   }
};

const FETCH_ERROR = {
   users: undefined,
   status: {
      isOk: true,
      errorMessage: 'Error al cargar usuarios',
      aborted: false,
   },
};

const ABORT_ERROR = {
   users: undefined,
   status: {
      isOk: false,
      errorMessage: 'Petición abortada',
      aborted: true,
   },
};

export default getUsers;
