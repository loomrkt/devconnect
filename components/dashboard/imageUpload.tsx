"use client"

import React, { useState, useRef, JSX } from "react"
import { Images, X, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  className?: string
}

interface FileWithPreview {
  file: File
  preview: string
  id: string
}

export default function FileUpload({ className }: FileUploadProps): JSX.Element {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) return

    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: crypto.randomUUID(),
    }))

    setSelectedFiles((prev) => [...prev, ...newFiles])

    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleAddMoreClick = (): void => {
    fileInputRef.current?.click()
  }

  const handleDeleteFile = (idToDelete: string): void => {
    setSelectedFiles((prev) => {
      const fileToDelete = prev.find((item) => item.id === idToDelete)
      if (fileToDelete) {
        URL.revokeObjectURL(fileToDelete.preview)
      }
      return prev.filter((item) => item.id !== idToDelete)
    })
  }

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      selectedFiles.forEach((item) => URL.revokeObjectURL(item.preview))
    }
  }, [selectedFiles])

  return (
    <div className={cn("w-full p-2", className)}>
      <div className="grid w-full items-center gap-1.5">
        {selectedFiles.length === 0 ? (
          <label htmlFor="picture" className="cursor-pointer"><Images /></label>
        ) : (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Images sélectionnées ({selectedFiles.length})</h3>
              <Button variant="outline" size="sm" onClick={handleAddMoreClick} className="flex items-center gap-1 bg-neutral-900">
                <Plus className="h-4 w-4" />
                <span>Ajouter</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {selectedFiles.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-md overflow-hidden border border-border group"
                >
                  <img
                    src={item.preview || "/placeholder.svg"}
                    alt={`Aperçu ${item.file.name}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteFile(item.id)}
                    className="absolute top-1 right-1 bg-background/80 text-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    aria-label="Supprimer l'image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <Input
          id="picture"
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}

