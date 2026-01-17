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
                        Geri Dön
                    </Link>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                    <h1>Hesap Silme Talebi</h1>
                    <p>
                        Hesabınızın silinmesi için lütfen aşağıdaki formu doldurun. Talebiniz alındıktan sonra,
                        hesabınız ve ilişkili tüm veriler en kısa sürede kalıcı olarak silinecektir.
                    </p>
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                        <p className="text-sm m-0">
                            <strong>Not:</strong> Güvenlik nedeniyle, hesap silme işlemi için kayıtlı e-posta adresinizi doğrulamanız gerekmektedir.
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
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfD_placeholder/viewform?embedded=true"
                        width="100%"
                        height="640"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        className="w-full min-h-[600px]"
                    >
                        Yükleniyor...
                    </iframe>
                </div>
            </div>
        </div>
    );
}
