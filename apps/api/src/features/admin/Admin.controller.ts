/**
 * Admin Controller: Audit log inspection and system config endpoints.
 */

import { Controller, Get, Query } from '@nestjs/common';
import { QueryBuilder } from '../../database/QueryBuilder';

@Controller('v1/admin')
export class AdminController {
  @Get('audit-logs')
  async getAuditLogs(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20',
  ) {
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 20;
    return QueryBuilder.findAuditLogsPaginated(pageNum, limitNum);
  }
}
