import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@/styles/globals.css';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </SidebarProvider>
  );
}
