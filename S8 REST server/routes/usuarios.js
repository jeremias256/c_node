// const { Router } = require('express');

// const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

// const router = Router();

// router.get('/', usuariosGet);
// router.put('/:id', usuariosPut);
// router.post('/', usuariosPost);
// router.delete('/', usuariosDelete);
// router.patch('/', usuariosPatch);

// module.exports = router;

/* ---------------------------------------------------------------------------------------------- */
/*                                             IMPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
import { Router } from 'express';
import { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } from '../controllers/usuarios.js';

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

export default router;
