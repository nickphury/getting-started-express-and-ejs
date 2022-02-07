import express from 'express';

const bookRouter = express.Router();
bookRouter.get('').get(':id').post('').delete(':id');

export default bookRouter;
