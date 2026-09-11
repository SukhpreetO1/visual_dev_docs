/**
 * Zod request validation pipe.
 */

import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path.join('.') || 'body';
        if (!fieldErrors[path]) fieldErrors[path] = [];
        fieldErrors[path].push(issue.message);
      });
      throw new BadRequestException({
        message: 'Validation failed for incoming payload.',
        error: 'VALIDATION_ERROR',
        details: fieldErrors,
      });
    }
    return result.data;
  }
}
