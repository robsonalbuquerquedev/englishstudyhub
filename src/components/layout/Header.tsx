"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Navbar onOpenMenu={() => setOpen(true)} />

            <Sidebar
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}
