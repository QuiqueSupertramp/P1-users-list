import { URL_API } from '@/lib/constants/api';

const deleteUser = async id => {
   try {
      const res = await fetch(`${URL_API}/${id}`, headers);
      return res.ok;
   } catch {
      return false;
   }
};

const headers = {
   headers: { 'Content-type': 'application/json' },
   method: 'DELETE',
};

export default deleteUser;
