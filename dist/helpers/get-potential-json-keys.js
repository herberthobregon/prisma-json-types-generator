'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getPotentialJsonKeys = getPotentialJsonKeys;
function getPotentialJsonKeys(type, model) {
  const keys = [];
  for (const member of type.members) {
    const memberName = member.name?.getText();
    if (
      memberName &&
      model.fields.some((field) => field.name === memberName && field.type === 'Json')
    ) {
      keys.push(memberName);
    }
  }
  return keys;
}
//# sourceMappingURL=get-potential-json-keys.js.map
