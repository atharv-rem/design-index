import Footer from './footer.jsx';
export default function PrivacyPolicy() {
    
    return (
        <>
            <div className="flex flex-col items-start justify-start w-auto h-auto bg-white ml-[12px] mr-[20px] pt-[20px] md:pt-0">
                <p className="text-[32px] md:text-[32px] lg:text-[34px] xl:text-[45px] 2xl:text-[50px] font-Outfit font-bold mb-[5px]">Privacy Policy</p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Effective Date: July 20, 2025
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website:
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We do not collect any personally identifiable information from visitors unless explicitly provided (e.g., via a contact form or newsletter subscription).However, we may collect limited technical information to improve your experience, such as:
                </p>
                <ul className="list-disc ml-[30px] mb-2">
                    <li className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]'>IP address</li>
                    <li className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]'>Browser type and version</li>
                    <li className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]'>Operating system</li>
                    <li className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]'>Referring website</li>
                    <li className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]'>Pages visited on our site</li>
                </ul>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    This data is anonymized and used for analytics and site optimization.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We may use cookies or similar technologies to - improve website performance,analyze user behavior (via tools like Google Analytics),Remember user preferences (if applicable).You can disable cookies via your browser settings.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We do not sell, rent, or share your personal data with third parties. Any data collected is used strictly for improving site functionality and user experience.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We implement basic security measures to protect any information collected. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Our website may contain links to third-party sites. We are not responsible for their privacy practices. We encourage you to review their policies before providing any personal information.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    We reserve the right to update this Privacy Policy at any time. The latest version will always be available on this page with the updated effective date.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                  If you have questions or concerns regarding this Privacy Policy, please contact: <b>atharv.rem@gmail.com</b>
                </p>
            </div>
            <div className='ml-[12px]'>
                <Footer />
            </div>
        </>
    );
}