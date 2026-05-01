import ejemplo from './ejemplo.routes.js';
import {Router} from 'express';
const indexRoutes = Router();

indexRoutes.get('/health', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'MISAPI funcionando correctamente'
    });
});

indexRoutes.use('/ejemplo', ejemplo);




export default indexRoutes;
