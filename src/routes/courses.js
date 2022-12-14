const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

// newsController.index

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id/force', courseController.forceDelete);
router.delete('/:id', courseController.delete);
router.patch('/:id/restore', courseController.restore);

module.exports = router;
