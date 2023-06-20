import Header from "@/components/Header/Header";
import PokedexInfo from "@/components/PokedexInfo/PokedexInfo";
import PokedexList from "@/components/PokedexList/PokedexList";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <PokedexList />
        <PokedexInfo />
      </div>
    </main>
  );
}
