import { URL_API } from '@/lib/constants/api';

const FETCH_ERROR = {
   user: undefined,
   status: {
      isOk: false,
      errorMessage: 'Error al cargar usuarios',
      aborted: false,
   },
};

const ABORT_ERROR = {
   user: undefined,
   status: {
      isOk: true,
      errorMessage: 'Petición abortada',
      aborted: true,
   },
};

const findByUsername = async (username, signal) => {
   try {
      const res = await fetch(`${URL_API}?username=${username}`, { signal });

      if (res.ok === false) throw new Error();

      const data = await res.json();
      return {
         user: data[0],
         status: {
            isOk: true,
            errorMessage: '',
            aborted: false,
         },
      };
   } catch (error) {
      if (error.name === 'AbortError') return ABORT_ERROR;
      return FETCH_ERROR;
   }
};

export default findByUsername;
