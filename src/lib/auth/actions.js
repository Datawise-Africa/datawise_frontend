import { REACT_PUBLIC_API_HOST } from "../../constants";

// const NEXT_PUBLIC_API_HOST = 'http://localhost:8000'

class Cookie {
    /**
     * 
     * @param {string} name 
     * @param {*} value 
     * @param {import("./actions").CookieOptions} options 
     * @returns {void}
     */
    static set(
      name,
      value,
      options = {}
    ) {
      const serializedValue = encodeURIComponent(JSON.stringify(value));
      const cookie = `${name}=${serializedValue}`;
  
      let expires = options.expires;
      if (expires instanceof Date) {
        expires = expires.toUTCString();
      } else if (typeof expires === "number") {
        const d = new Date();
        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        expires = d.toUTCString();
      }
  
      const path = options.path ? `;path=${options.path}` : "";
      const domain = options.domain ? `;domain=${options.domain}` : "";
      const secure = options.secure ? ";secure" : "";
  
      if (expires) {
        expires = new Date(expires);
        document.cookie = `${cookie};expires=${expires.toUTCString()}${path}${domain}${secure}`;
      } else {
        document.cookie = `${cookie}${path}${domain}${secure}`;
      }
    }
  
    /**
     * 
     * @param {string} name 
     * @returns {string | null | undefined}
     */
    static get(name) {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
          const value = cookie.substring(name.length + 1);
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (e) {
            return null;
          }
        }
      }
      return null;
    }
    static setCookieToken = (key, payload) => {
      Cookie.set(key, payload);
    };
    static getCookieToken = (
      key
    ) => {
      return Cookie.get(key);
    };
    static removeToken = (key) => {
      Cookie.set(key, {});
    };
  }
  

export async function handleRefresh() {
    console.log('handleRefresh')

    const refreshToken =  getRefreshToken();

    const token = await fetch(`${REACT_PUBLIC_API_HOST}/auth/refresh_token/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh_token: refreshToken
        })
    })
    .then(response => response.json())
    .then((json) => {
        console.log('Response - Refresh:',json)

        if (json.access_token) {
            Cookie.set('session_access_token', json.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'production',
                maxAge: 60 * 60 * 24, // One day
                path: '/'
            });
            return json.access_token;
        } else {
            resetAuthCookies();
        }
    })
    .catch((error) => {
        console.log('Error - Refresh:',error)
        resetAuthCookies();
    });
    return token;
}
export async function handleLogin(id, user_role, access_token, refresh_token) {

    Cookie.set('session_userid', id, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });

    Cookie.set('session_userrole', user_role, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });

    Cookie.set('session_access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        maxAge: 60 * 60 * 24, // One day
        path: '/'
    });

    Cookie.set('session_refresh_token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
}

export function resetAuthCookies() {
    Cookie.set('session_user_id', '');
    Cookie.set('session_userrole', '');
    Cookie.set('session_access_token', '');
    Cookie.set('session_refresh_token', '');
}

export function getUserId() {
    const userId = Cookie.get('session_userid');
    // console.log({userId});
    return userId ? userId : null;
}

export function getUserRole() {
    const userRole = Cookie.get('session_userrole');
    return userRole ? userRole : null;
}

export function getAccessToken() {
    const accessToken = Cookie.get('session_access_token');

    if (!accessToken) {
        accessToken = handleRefresh();
    }

    return accessToken ? accessToken : null;
}

export function getRefreshToken() {
    const refreshToken = Cookie.get('session_refresh_token');
    return refreshToken ? refreshToken : null;
}