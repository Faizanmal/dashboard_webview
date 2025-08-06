import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
      
    );
  }
  
  export default MyApp;