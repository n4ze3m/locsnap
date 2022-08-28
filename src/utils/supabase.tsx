import React from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SupabaseClientContext = React.createContext<SupabaseClient | null>(null);

interface SupabaseProviderProps {
    children: React.ReactNode;
}

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_ANON_KEY!
);


export function SupabaseProvider({ children }: SupabaseProviderProps) {
    const [client] = React.useState(() => supabase);

    return (
        <SupabaseClientContext.Provider value={client}>
            {children}
        </SupabaseClientContext.Provider>
    );
}

export function useSupabase(): SupabaseClient {
    const client = React.useContext(SupabaseClientContext);
    if (client === null) {
        throw new Error(
            "Supabase client not provided via context.\n" +
            "Did you forget to wrap your component tree with SupabaseProvider?"
        );
    }
    return client;
}