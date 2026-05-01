import mongoose from 'mongoose';

let isConected = false;

const conectarMongoDB = async () => {
    if (isConected) {
        console.log('Ya estas conectado a MongoDB'.green);
        return;
    }

    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/backendmarlonvega';
    if (!process.env.MONGO_URI) {
        console.warn('MONGO_URI no definida. Usando MongoDB local: mongodb://127.0.0.1:27017/backendmarlonvega'.yellow);
    }

    try {
        await mongoose.connect(uri);
        isConected = true;
        console.log('Conexion a MongoDB exitosa'.green);
    } catch (error) {
        isConected = false;
        console.error('Error al conectar a MongoDB'.red, error);
        throw error;
    }
};

const db = mongoose.connection;
db.on('error', (error) => {
    isConected = false;
    console.error('Error en la conexion a MongoDB'.red, error);
});

db.once('open', () => {
    isConected = true;
});

db.on('disconnected', () => {
    isConected = false;
    console.warn('Conexion a MongoDB perdida'.yellow);
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Desconectado de MongoDB'.yellow);
    process.exit(0);
});

export { conectarMongoDB, isConected };
