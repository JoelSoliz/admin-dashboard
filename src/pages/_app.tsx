import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ColorModeContext, useMode } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "@/components/global/sidebar";
import TopBar from "@/components/global/topbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Sidebar />
                <div className="content">
                    <TopBar />
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
