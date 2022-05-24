import { URL_API } from '@/lib/constants/api';

const checkByUsername = async (username, signal) => {
   try {
      const res = await fetch(`${URL_API}?username=${username}`, { signal });

      if (res.ok === false) throw new Error();

      const data = await res.json();
      if (data.length) return 'El usuario ya existe';
      else return false;
   } catch (error) {
      if (error.name === 'AbortError') return;
      return 'Error al validar';
   }
};

export default checkByUsername;
