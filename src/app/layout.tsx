import "./globals.sass";
import { PokeProvider } from "../contexts/PokeProvider";

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
        <PokeProvider>{children}</PokeProvider>
      </body>
    </html>
  );
}
