"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { MetalId, PieceId } from "@/data/house";

type HouseState = {
  metal: MetalId;
  piece: PieceId;
  setMetal: (metal: MetalId) => void;
  setPiece: (piece: PieceId) => void;
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

  return (
    <HouseContext.Provider value={{ metal, piece, setMetal, setPiece, chooseMetal }}>
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  const value = useContext(HouseContext);
  if (!value) throw new Error("useHouse necesita HouseState");
  return value;
}
