
"use client"
import { Github } from "lucide-react"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
 
export default function SignIn() {
  return (
    <Button
      asChild
      size="lg"
      onClick={() => signIn("github", { callbackUrl: "/feed" })}
      className="cursor-pointer"
    >
      <span>
        <Github />
        Se connecter
      </span>
    </Button>
  );
}