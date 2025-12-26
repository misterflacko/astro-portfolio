"use client"

import * as React from "react"
import { Menu, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

interface NavLink {
  href: string
  label: string
  isActive?: boolean
}

interface MobileNavProps {
  links: NavLink[]
  currentPath?: string
}

export function MobileNav({ links, currentPath = "/" }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  // Close menu when route changes
  React.useEffect(() => {
    setOpen(false)
  }, [currentPath])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#12EACB] hover:bg-[#0FD4B8] transition-colors duration-200 shadow-md"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-[#1D2B38]" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6">
          {links.map((link) => {
            const isActive = link.href === currentPath ||
              (link.href !== "/" && currentPath.startsWith(link.href))

            return (
              <SheetClose asChild key={link.href}>
                <a
                  href={link.href}
                  className={`
                    flex items-center px-4 py-3 rounded-lg text-base font-medium
                    transition-colors duration-200
                    ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                    }
                  `}
                >
                  {link.label}
                </a>
              </SheetClose>
            )
          })}

          {/* Contact CTA */}
          <SheetClose asChild>
            <a
              href="/contact"
              className="mt-4"
            >
              <Button className="w-full rounded-full">
                Contact
              </Button>
            </a>
          </SheetClose>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
            <a
              href="https://linkedin.com/in/austincrockett"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/misterflacko"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="View GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
