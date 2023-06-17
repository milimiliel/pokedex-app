import "./PokedexList.sass";
import { useContext } from "react";
import { PokeApiContext } from "@/contexts/PokeProvider";

function ArrowDown() {
  const { nextPage, setUrl }: any = useContext(PokeApiContext);

  function handleClick() {
    setUrl(nextPage);
  }
  return (
    <div className="next-page pager" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
        />
      </svg>
    </div>
  );
}

export default ArrowDown;
