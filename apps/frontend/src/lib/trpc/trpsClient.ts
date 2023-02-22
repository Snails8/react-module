import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from './trpcRouter';

export const trpc = createReactQueryHooks<AppRouter>();
