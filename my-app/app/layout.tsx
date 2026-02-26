import "./globals.css";
import PageLayer from "@/app/PageLayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>FAVEN – Structural Product & Revenue Hub</title>
            <meta name="description" content="FAVEN – A calm, structured, digital servicescape for scaling software companies. Align products, revenue, and organizational architecture." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
        </head>
        <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased font-sans">

                        {children}
        </body>
        </html>
    );
}