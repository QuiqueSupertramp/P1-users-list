import { URL_API } from '@/lib/constants/api';

const createUser = async newUser => {
   try {
      const res = await fetch(URL_API, headers(newUser));
      return res.ok;
   } catch {
      return false;
   }
};

const headers = newUser => {
   return {
      headers: {
         'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newUser),
   };
};

export default createUser;
