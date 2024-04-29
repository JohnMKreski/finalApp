const access_token = storageHasData() ? getStorage('access_token') : '';
const token = `Bearer ${access_token}`;

//diffrent options (headers) based on fetch
//dependant on which call we use (get, put, post)
const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const DEFAULT_OPTIONS_WITH_AUTH = {
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
  },
};

const OPTIONS_WITH_AUTH = {
  headers: {
    Authorization: token,
  },
};

/**
 * Generic Read API handler.
 *
 * @param {sting} url - address to make request to
 * @param {any} options - additional options to send. Defaults to options with auth headers
 */

const _getAllByUser = async (url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'GET',
    ...options,
  });
  return res.json();
};

//TODO: Get this working so the user dont need an auth token
// const _getAll = async (url) => {
//   const res = await fetch(url, {
//     method: 'GET'
//   });
//   return res.json();
// };

const _getAllByGuest = async (url, options = DEFAULT_OPTIONS) => {
  const res = await fetch(url, {
    method: 'GET',
    ...options,
  });
  return res.json();
};

const _getUserSongs = async (url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'GET',
    ...options,
  });
  return res.json();
};

const _getUser = async (url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'GET',
    ...options,
  });
  return res.json();
};

/**
 * Generic Create API handler.
 *
 * @param {sting} url - address to make request to
 * @param {any} data - updates to send
 * @param {any} options - additional options to send. Defaults to options with normal headers
 */
//will have auth token after login 
//gets overwrtten in x.service.js
const _post = async (url, data, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'POST',
    ...options,
    body: JSON.stringify(data),
    
  });

  console.log(res);

  return res.json();
};

//TODO: Seperate "Guest" Users and auth Users
// const _post = async (url, data) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

/**
 * Generic Update API handler.
 * NOTE: PUT requests sctrictly require authentication.
 *
 * @param {sting} url - address to make request to
 * @param {any} data - updates to send
 * @param {any} options - additional options to send. Defaults to options with auth headers
 */
const _put = async (url, data, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'PUT',
    ...options,
    body: JSON.stringify(data),
  });
  return res.json();
};

/**
 * Generic Delete API handler.
 * NOTE: DELETE requests sctrictly require authentication.
 *
 * @param {sting} url - address to make request to
 * @param {any} options - additional options to send. Defaults to options with auth headers
 */
const _delete = async (url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
  const res = await fetch(url, {
    method: 'DELETE',
    ...options,
  });
  return res.json();
};

/**
 * TODO: 
 * ^ Comment format to help with implenet
 * only in dvelopment code not final
 * 
 * @param {} url 
 * ... knowung what paramerters are doing comments {data type in}
 */