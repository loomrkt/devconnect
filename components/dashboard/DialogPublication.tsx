import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Separator } from "../ui/separator"
import { JSX } from "react"
import FileUpload from "./imageUpload"

interface DialogPublicationProps {
  user: {
    name: string
  }
}

export default function DialogPublication({ user }: DialogPublicationProps): JSX.Element {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full justify-baseline h-full rounded-3xl focus:bg-none text-start min-h-12">
          Quoi de neuf, { user.name.length > 35 ? `${user.name.slice(0, 35)} ...` : user.name}? 
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-neutral-950 rounded-lg shadow-xs shadow-amber-50/20 p-4 max-h-[80vh] flex flex-col">
        <div className="flex-1 overflow-y-auto pr-2">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle>Créer une publication</AlertDialogTitle>
              <AlertDialogCancel className="bg-neutral-950 hover:bg-neutral-800 hover:text-white border-amber-50/10">
                <X />
              </AlertDialogCancel>
            </div>
            <Textarea placeholder="De quoi souhaitez-vous discuter?" className="min-h-[100px] resize-none mt-4" />
            <Separator className="bg-gray-100/10 my-3" />
            <FileUpload/>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter >
          <AlertDialogAction className="bg-white text-black hover:bg-white/90">Publier</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

