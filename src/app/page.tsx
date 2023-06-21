import PokedexInfo from "@/components/PokedexInfo/PokedexInfo";
import PokedexList from "@/components/PokedexList/PokedexList";
import "./page.sass";

export default function Home() {
  return (
    <main>
      <div className="pokedex-body">
        <PokedexInfo />
        <PokedexList />
      </div>
    </main>
  );
}
