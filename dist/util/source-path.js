"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTypesFilePath = buildTypesFilePath;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
/**
 * Builds the full path to the correct Prisma Client types file.
 *
 * Normally located at `node_modules/.prisma/client/index.d.ts`
 */
function buildTypesFilePath(clientOutput, overrideTarget, schemaTarget) {
    // Just finds the default .prisma/client/index.d.ts
    if (!overrideTarget) {
        try {
            return node_path_1.default.resolve(
            // prisma client directory
            node_path_1.default.dirname(
            // We cannot directly resolve .prisma/client because pnpm uses a different directory structure,
            // so we find @prisma/client path and resolve the parent directory
            require.resolve(node_path_1.default.resolve(clientOutput, '../../.prisma/client'))), 'index.d.ts');
        }
        catch {
            return node_path_1.default.resolve(
            // Complete filename?
            clientOutput.match(/\.(?:d\.ts|tsx?|jsx?)$/gm)
                ? // dirname
                    node_path_1.default.dirname(clientOutput)
                : // filename
                    clientOutput, 'index.d.ts');
        }
    }
    // Absolute path, just use it.
    if (node_path_1.default.isAbsolute(overrideTarget)) {
        return require.resolve(overrideTarget);
    }
    // Schema relative
    return node_path_1.default.resolve(
    // schemaTarget is the full path of the Prisma schema - we need the directory
    node_path_1.default.dirname(schemaTarget), overrideTarget, 
    // Works with `prisma-client` or `prisma-client-js`. the original path may not be called index.
    // If it ends with .ts, we don't need to add index.d.ts because it's use `prisma-client`
    overrideTarget.endsWith('.ts') ? '' : 'index.d.ts');
}
//# sourceMappingURL=source-path.js.map