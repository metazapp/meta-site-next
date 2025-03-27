// types.d.ts
import 'next';

declare module 'next' {
  export interface PageProps {
    params?: unknown;
    searchParams?: unknown;
  }
}