import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/privacy-policy"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Privacy Policy
                    </Link>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                    <h1>Account Deletion Request</h1>
                    <p>
                        To permanently delete your account, please complete the form below. Once your request is received,
                        your account and all associated data will be permanently deleted as soon as possible.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                        <p className="text-sm m-0">
                            <strong>Note:</strong> For security purposes, you must verify the email address associated with your account to proceed with the deletion.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm border overflow-hidden">
                    {/* 
              TODO: REPLACE THIS URL WITH YOUR ACTUAL GOOGLE FORM URL
              Make sure your Google Form accepts ONLY email address as requested.
              To get the embed URL: 
              1. Open your Google Form
              2. Click "Send"
              3. Click the "< >" (Embed HTML) tab
              4. Copy the URL from the 'src' attribute
            */}
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc5KTwUGO0YkSwONeEN8vMZZsmNQmtub7znpdUABLzGT9jH8Q/viewform?embedded=true"
                        width="100%"
                        height="640"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        className="w-full min-h-[600px]"
                    >
                        Loading...
                    </iframe>
                </div>
            </div>
        </div>
    );
}
