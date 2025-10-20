"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"

export default function AuthStatus() {
    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        const supabase = createClient()
        let mounted = true

        supabase.auth.getUser().then(res => {
            if (!mounted) return
            setEmail(res.data.user?.email ?? null)
        })

        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!mounted) return
            setEmail(session?.user?.email ?? null)
        })

        return () => {
            mounted = false
            try { (data as any)?.subscription?.unsubscribe?.() } catch {}
        }
    }, [])

    return <div className="text-sm">{email ? `Signed in as ${email}` : "Not signed in"}</div>
}