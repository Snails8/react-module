import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../router/trpcRouter';

export const trpc = createReactQueryHooks<AppRouter>();