const BASE_API_URL = 'http://localhost:3000/api'; //base endpoint
const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:3000/api/auth
const USER_API = `${BASE_API_URL}/user`; // http://localhost:3000/api/user
const SONG_API = `${BASE_API_URL}/song_requests`; // http://localhost:3000/api/song_requests


function register(formData) {
  return _post(`${AUTH_API}/register`, formData);
}

function login(formData) {
  return _post(`${AUTH_API}/login`, formData);
}

function createSong_Requests(formData) {
  return _post(SONG_API, formData);
}

function getAllSong_Requests(formData) {
  return _get(SONG_API, formData);
}