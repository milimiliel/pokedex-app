import Header from "@/components/Header/Header";
import PokedexList from "@/components/PokedexList/PokedexList";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <PokedexList />
      </div>
    </main>
  );
}
