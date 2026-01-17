import Link from "next/link";

export default function PrivacyPolicyPage() {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto prose dark:prose-invert">
                <h1>Privacy Policy</h1>
                <p className="lead text-muted-foreground">Last updated: {currentDate}</p>

                <p>
                    I, Enes Kasım, operate this mobile application (the "Service"). This page informs you of my policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Service.
                </p>

                <p>
                    I am committed to protecting your privacy and ensuring you have a positive experience on my application. By using the Service, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2>Information Collection and Use</h2>
                <p>
                    While using my Service, I may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address ("Personal Information").
                </p>
                <p>
                    However, for most of my applications, I do not collect personal information unless explicitly stated. I may use third-party services that may collect information used to identify you (e.g., Google Play Services, AdMob) to improve the Service and providing a better user experience.
                </p>

                <h2>Log Data</h2>
                <p>
                    I want to inform you that whenever you use my Service, in a case of an error in the app, I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
                </p>

                <h2>Service Providers</h2>
                <p>
                    I may employ third-party companies and individuals due to the following reasons:
                </p>
                <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <p>
                    I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </p>

                <h2>Security</h2>
                <p>
                    I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
                </p>

                <h2>Links to Other Sites</h2>
                <p>
                    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <a href="mailto:eneskasim_93@hotmail.com" className="font-medium underline hover:text-primary">eneskasim_93@hotmail.com</a>.
                </p>

                <hr className="my-8 border-border" />

                <h2>Account Deletion</h2>
                <p>
                    We value your control over your personal data. If you wish to delete your account and all associated data permanently, you may submit a request through the link below.
                </p>
                <div className="mt-6 mb-8">
                    <Link
                        href="/privacy-policy/delete-account"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-destructive hover:bg-destructive/90 transition-colors shadow-sm"
                    >
                        Delete My Account
                    </Link>
                </div>
            </div>
        </div>
    );
}
