'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handleInputObject = handleInputObject;
const tslib_1 = require('tslib');
const typescript_1 = tslib_1.__importDefault(require('typescript'));
const get_potential_json_keys_js_1 = require('../helpers/get-potential-json-keys.js');
const error_1 = require('../util/error');
const replace_object_1 = require('./replace-object');
function handleInputObject(typeAlias, writer, model, config) {
  const type = typeAlias.type;
  if (type.kind !== typescript_1.default.SyntaxKind.TypeLiteral) {
    throw new error_1.PrismaJsonTypesGeneratorError(
      'Provided model payload is not a type literal',
      {
        type: type.getText()
      }
    );
  }
  const potentialKeys = (0, get_potential_json_keys_js_1.getPotentialJsonKeys)(type, model);
  if (!potentialKeys.length) {
    return;
  }
  return (0, replace_object_1.replaceObject)(type, writer, model, config);
}
//# sourceMappingURL=input-object.js.map
