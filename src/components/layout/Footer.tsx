import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Enes Kasım. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm text-muted-foreground">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/support" className="hover:text-foreground transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
