import ts from 'typescript';
import type { PrismaEntity } from '../helpers/dmmf';
import type { PrismaJsonTypesGeneratorConfig } from '../util/config';
import type { DeclarationWriter } from '../util/declaration-writer';
export declare function handleInputObject(
  typeAlias: ts.TypeAliasDeclaration,
  writer: DeclarationWriter,
  model: PrismaEntity,
  config: PrismaJsonTypesGeneratorConfig
): void;
//# sourceMappingURL=input-object.d.ts.map
