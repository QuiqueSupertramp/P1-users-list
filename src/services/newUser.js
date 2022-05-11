const headers = userData => {
   return {
      headers: {
         'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
   };
};

const newUser = async userData => {
   const res = await fetch('http://localhost:3004/usuarios', headers(userData));
   const data = await res.json();
   return data;
};

export default newUser;
