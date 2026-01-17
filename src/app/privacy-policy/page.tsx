export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto prose dark:prose-invert">
                <h1>Privacy Policy</h1>
                <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

                <p>
                    Enes Kasım ("I", "me", or "my") is committed to protecting your privacy.
                    This Privacy Policy explains how your information is collected, used, and disclosed by my mobile applications.
                </p>

                <h2>Information Collection and Use</h2>
                <p>
                    My applications generally do not collect personal information unless explicitly stated.
                    However, they may use third-party services that may collect information used to identify you (e.g., Google Play Services, AdMob).
                </p>

                <h2>Log Data</h2>
                <p>
                    I want to inform you that whenever you use my Service, in a case of an error in the app,
                    I collect data and information (through third-party products) on your phone called Log Data.
                </p>

                <h2>Security</h2>
                <p>
                    I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it.
                    But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
                    I will notify you of any changes by posting the new Privacy Policy on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at eneskasim_93@hotmail.com.
                </p>

                <h2>Hesap Silme</h2>
                <p>
                    Kullanıcılarımızın verileri üzerinde tam kontrol sahibi olmalarını önemsiyoruz.
                    Eğer hesabınızı ve ilgili verilerinizi silmek istiyorsanız, aşağıdaki butona tıklayarak talepte bulunabilirsiniz.
                </p>
                <div className="mt-4 mb-8">
                    <a
                        href="/privacy-policy/delete-account"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-destructive hover:bg-destructive/90 transition-colors"
                    >
                        Üyeliğimi Sil
                    </a>
                </div>
            </div>
        </div>
    );
}
