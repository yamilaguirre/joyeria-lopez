"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { MetalId, Picture, PieceId } from "@/data/house";

export type ListItem = Pick<Picture, "src" | "caption" | "alt">;

type HouseState = {
  metal: MetalId;
  piece: PieceId;
  query: string;
  list: ListItem[];
  active: Picture | null;
  setMetal: (metal: MetalId) => void;
  setPiece: (piece: PieceId) => void;
  setQuery: (query: string) => void;
  setActive: (picture: Picture | null) => void;
  addToList: (item: ListItem) => void;
  removeFromList: (src: string) => void;
  chooseMetal: (event: React.MouseEvent<HTMLAnchorElement>, metal: MetalId) => void;
};

const HouseContext = createContext<HouseState | null>(null);

export function HouseState({
  initialMetal,
  children,
}: {
  initialMetal: MetalId;
  children: React.ReactNode;
}) {
  const [metal, setMetalState] = useState<MetalId>(initialMetal);
  const [piece, setPiece] = useState<PieceId>("alianza");
  const [query, setQuery] = useState("");
  const [list, setList] = useState<ListItem[]>([]);
  const [active, setActive] = useState<Picture | null>(null);

  useEffect(() => {
    setMetalState(initialMetal);
  }, [initialMetal]);

  function setMetal(next: MetalId) {
    setMetalState(next);
    const url = new URL(window.location.href);
    url.searchParams.set("metal", next);
    window.history.replaceState(null, "", url);
  }

  function chooseMetal(event: React.MouseEvent<HTMLAnchorElement>, next: MetalId) {
    event.preventDefault();
    setMetal(next);
  }

  function addToList(item: ListItem) {
    setList((current) => (current.some((entry) => entry.src === item.src) ? current : [...current, item]));
  }

  function removeFromList(src: string) {
    setList((current) => current.filter((entry) => entry.src !== src));
  }

  return (
    <HouseContext.Provider
      value={{
        metal,
        piece,
        query,
        list,
        active,
        setMetal,
        setPiece,
        setQuery,
        setActive,
        addToList,
        removeFromList,
        chooseMetal,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  const value = useContext(HouseContext);
  if (!value) throw new Error("useHouse necesita HouseState");
  return value;
}
