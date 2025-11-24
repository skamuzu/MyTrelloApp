import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 px-6  text-center text-sm text-muted-foreground max-w-7xl mb-10">
        <div className="flex justify-between items-center">
            <Logo showTitle={true} />
            <div className="flex items-center space-x-4">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            
        </div>
      © {new Date().getFullYear()} MyTrelloApp. All rights reserved.
    </footer>
  )
}