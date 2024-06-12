"use strict";
class LimitValidator {
    static Limit(limit) {
        return (control) => {
            let val = Number(control.value);
            if (val > limit) {
                return { "limit": { "limit": limit, "actualValue": val } };
            }
            else {
                return null;
            }
        };
    }
}
exports.LimitValidator = LimitValidator;
