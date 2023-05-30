export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const USERNAME_REGEX = /^[0-9a-zA-Z]{6,}$/;

export const BASE_API_URL = 'http://localhost:666';
// export const BASE_API_URL = 'https://news-website.herokuapp.com';

export const axiosConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
};

export function extractContent(s) {
  return s === undefined ? '' : s.replace(/['"]+/g, '');
}
