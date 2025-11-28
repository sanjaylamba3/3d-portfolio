/**
 * This component serves as a centralized wrapper for all global context providers
 * used throughout the application (e.g., ThemeProvider, AuthProvider, QueryProvider).
 *
 * By isolating all providers here, we keep the main `App` component clean and focused
 * on layout and rendering, while making it easier to manage and scale context logic
 * as the app grows.
 *
 * Usage:
 * <Providers>
 *   <AppContent />
 * </Providers>
 */

import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
            </ThemeProvider>
        </>
    );
};

export default Providers;
