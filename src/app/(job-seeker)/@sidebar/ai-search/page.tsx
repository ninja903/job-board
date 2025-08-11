import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function AiSearchSidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold">AI Search</h2>
        <Separator className="my-2" />
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4 space-y-4">
          
          <p className="text-sm text-muted-foreground">
            No search results yet. Start typing to search with AI.
          </p>
        </div>
      </ScrollArea>
    </aside>
  )
}
