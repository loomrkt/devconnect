"use client"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignOut() {
  return <Button asChild size="lg" onClick={() => signOut({ callbackUrl: "/" })}  className="cursor-pointer"><span>Deconnexion</span></Button>
}