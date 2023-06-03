const express = require('express');
const router =  express.Router('');

const courseController = require('../controllers/CourseController');

router.get('/:create',courseController.create);
router.get('/:slug',courseController.show);