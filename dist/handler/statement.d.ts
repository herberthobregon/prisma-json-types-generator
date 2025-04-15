import ts from 'typescript';
import type { PrismaEntity } from '../helpers/dmmf';
import type { PrismaJsonTypesGeneratorConfig } from '../util/config';
import type { DeclarationWriter } from '../util/declaration-writer';
/**
 * Handles a Prisma namespace statement, can be a model type, a model payload or a model
 * where/create/update input/output
 */
export declare function handleStatement(statement: ts.Statement, writer: DeclarationWriter, models: PrismaEntity[], config: PrismaJsonTypesGeneratorConfig): void;
//# sourceMappingURL=statement.d.ts.map