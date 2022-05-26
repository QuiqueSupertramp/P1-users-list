const { URL_API } = require('@/lib/constants/api');

const updateUser = async user => {
   try {
      const res = await fetch(`${URL_API}/${user.id}`, headers);
      return res.ok;
   } catch {
      return false;
   }
};

const headers = user => {
   return {
      headers: {
         'Content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(user),
   };
};

export default updateUser;
