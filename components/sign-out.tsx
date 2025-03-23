"use client"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function SignOut() {
  return (
    <Button
      asChild
      size="lg"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="cursor-pointer w-full"
    >
      <span>Deconnexion</span>
    </Button>
  );
}