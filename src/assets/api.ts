import { io } from 'socket.io-client';

export const API = 'https://socket-app-bfhj.onrender.com';
// export const API = 'http://localhost:3000';

export const socket = io(API);
