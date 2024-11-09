import React, { createContext, useState, useEffect } from 'react';
import { supabase } from "@/lib/supabaseClient";

type GameState = "menu" | "game" | "end";

export const GameContext = createContext();

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [gameState, setGameState] = useState<GameState>("menu");

    
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}