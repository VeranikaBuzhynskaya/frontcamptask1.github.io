module.exports = function({types: t}) {
    return {
        name: "babel-plugin-remove-console",
        visitor: {
            CallExpression(path, {opts: options}) {
                if (path.get('callee').matchesPattern('console', true)){
                    path.remove();
                }
            }
        }
    };
}
