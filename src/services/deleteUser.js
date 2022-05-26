import { URL_API } from '@/lib/constants/api';

const headers = () => {
   return {
      headers: { 'Content-type': 'application/json' },
      method: 'DELETE',
   };
};

const deleteUser = async id => {
   try {
      const res = await fetch(`${URL_API}as/${id}`, headers());
      console.log('resFunc', res);
      if (!res.ok) throw new Error();
      return true;
   } catch (error) {
      return false;
   }
};

export default deleteUser;
