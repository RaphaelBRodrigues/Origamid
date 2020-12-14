export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + '/api/photo',
    options: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'POST',
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export const PHOTO_GET = (id) => {
  return {
    url: API_URL + '/api/photo/' + id,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const COMMENT_POST = (id, body) => {
  return {
    url: API_URL + '/api/comment/' + id,
    options: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_DELETE = (id) => {
  return {
    url: API_URL + '/api/photo/' + id,
    options: {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      method: 'DELETE',
    },
  };
};

export const PASSWORD_LOST = (body) => {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = (body) => {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
};

export const STATS_GET = () => {
  return {
    url: API_URL + '/api/stats',
    options: {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      method: 'GET',
    },
  };
};
