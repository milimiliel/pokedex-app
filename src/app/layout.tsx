import "./globals.sass";
import { PokeProvider } from "../contexts/PokeProvider";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Pokédex App",
  description: "Pokémon API v2 powered app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PokeProvider>
          <Header />
          {children}
        </PokeProvider>
      </body>
    </html>
  );
}
