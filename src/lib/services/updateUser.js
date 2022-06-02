import { URL_API } from '../constants/api';

const updateUser = async user => {
   try {
      const res = await fetch(`${URL_API}/${user.id}`, headers(user));
      return res.ok;
   } catch {
      return false;
   }
};

const headers = user => {
   return {
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(user),
   };
};

export default updateUser;
