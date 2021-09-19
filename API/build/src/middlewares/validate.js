"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const { validationResult } = require('express-validator');
const validate = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map