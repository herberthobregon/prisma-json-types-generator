import ts from 'typescript';
import type { PrismaEntity } from '../helpers/dmmf';
import type { PrismaJsonTypesGeneratorConfig } from '../util/config';
import type { DeclarationWriter } from '../util/declaration-writer';
/** Handles the prisma namespace module. */
export declare function handlePrismaModule(
  child: ts.ModuleDeclaration,
  writer: DeclarationWriter,
  modelMap: Map<string, PrismaEntity>,
  knownNoOps: Set<string>,
  typeToNameMap: Map<string, string>,
  config: PrismaJsonTypesGeneratorConfig
): void;
//# sourceMappingURL=module.d.ts.map
