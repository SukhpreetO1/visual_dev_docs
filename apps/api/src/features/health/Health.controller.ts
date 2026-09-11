/**
 * Health Controller: Uptime & readiness check endpoint per AGENTS.md §13.
 */

import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('health')
  checkHealth() {
    return {
      status: 'ok',
      uptime_seconds: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
