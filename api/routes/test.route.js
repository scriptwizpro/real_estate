import express from 'express';
import { shouldBeLoggedIn } from '../controllers/test.controller';

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

export default router;