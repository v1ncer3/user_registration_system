import { app } from '../../src/presentation/routes/Routes.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT_SERVER_BACKEND = process.env.PORT_SERVER_BACKEND || 3000;

app.listen(PORT_SERVER_BACKEND, () =>{
    console.log(`Server on port ${PORT_SERVER_BACKEND}`);
});