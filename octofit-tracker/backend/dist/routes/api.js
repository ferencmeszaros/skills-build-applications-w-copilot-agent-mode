"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
router.get('/users', async (_req, res) => {
    const users = await User_1.default.find();
    res.json(users);
});
router.post('/users', async (req, res) => {
    const user = new User_1.default(req.body);
    await user.save();
    res.status(201).json(user);
});
exports.default = router;
