"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRISMA_SKIP = exports.NAMESPACE_PATH = exports.PRISMA_NAMESPACE_NAME = void 0;
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
/** Name of the namespace in the type declaration */
exports.PRISMA_NAMESPACE_NAME = 'Prisma';
/** The path to the namespace.d.ts file, used as a template for the prisma's index.d.ts */
exports.NAMESPACE_PATH = node_path_1.default.resolve(__dirname, '../../assets/namespace.d.ts');
/** https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/null-and-undefined#strict-undefined-checks-preview-feature */
exports.PRISMA_SKIP = '| $Types.Skip';
//# sourceMappingURL=constants.js.map