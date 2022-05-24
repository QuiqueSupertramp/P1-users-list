import { URL_API } from '@/lib/constants/api';

const headers = newUser => {
   return {
      headers: {
         'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newUser),
   };
};

const createUser = async newUser => {
   try {
      const res = await fetch(URL_API, headers(newUser));
      if (!res.ok) throw new Error();
      return true;
   } catch (error) {
      return false;
   }
};

export default createUser;
