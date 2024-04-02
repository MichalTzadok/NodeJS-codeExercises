const logMiddleWare = (req, res, next) => {
    const now = new Date();
    console.log(`[${now.toLocaleString()}] Request to: ${req.url}`);
    next();
};
module.exports = logMiddleWare;
