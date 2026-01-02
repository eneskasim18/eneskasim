import { Mail, MessageCircle } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">App Support</h1>

                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                    <p className="text-lg text-muted-foreground mb-8">
                        Need help with one of my applications? I'm here to assist you.
                        Please reach out via email for any inquiries, bug reports, or feature requests.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email Support</h3>
                                <a href="mailto:eneskasim_93@hotmail.com" className="text-primary hover:underline">
                                    eneskasim_93@hotmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <MessageCircle className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Response Time</h3>
                                <p className="text-muted-foreground">I usually respond within 24-48 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
