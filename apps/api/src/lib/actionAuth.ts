/**
 * Server action authentication helper per AGENTS.md §21.
 */

import { UserRole } from '@visual-dev-docs/shared-types';

export interface ActionActor {
  user_id: string;
  role: UserRole;
  email: string;
}

export function requireActionActor(sessionActor?: ActionActor): ActionActor {
  if (!sessionActor) {
    throw new Error('Unauthorized action: Authentication session required.');
  }
  return sessionActor;
}

export function requireActionUser(sessionActor?: ActionActor): ActionActor {
  return requireActionActor(sessionActor);
}

export function requireActionAdmin(sessionActor?: ActionActor): ActionActor {
  const actor = requireActionActor(sessionActor);
  if (actor.role !== UserRole.ADMIN) {
    throw new Error('Forbidden action: Admin role required.');
  }
  return actor;
}

export function allowAnonymousAction<T>(fn: () => Promise<T>): Promise<T> {
  return fn();
}
