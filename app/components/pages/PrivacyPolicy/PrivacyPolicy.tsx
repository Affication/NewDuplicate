import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to SatisPro
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <p className="mb-4">
          <strong>SatisPro – Privacy Policy</strong>
          <br />
          <strong>Effective date:</strong> 28.11.2025
        </p>

        <p>
          This Privacy Policy explains how <strong>SatisPro</strong> (“
          <strong>SatisPro</strong>”, “<strong>we</strong>”, “
          <strong>us</strong>”, “<strong>our</strong>”) collects and processes
          personal data in connection with:
        </p>

        <ul className="my-4 list-disc pl-6">
          <li>
            our website{' '}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="https://satispro.net"
            >
              https://satispro.net
            </a>{' '}
            (“
            <strong>Website</strong>”);
          </li>
          <li>
            our review reply management and Google Business Profile optimization
            service (“<strong>Platform</strong>” or “<strong>Service</strong>”);
            and
          </li>
          <li>our marketing and communication activities.</li>
        </ul>

        <p className="mb-4">
          We process personal data in accordance with the{' '}
          <strong>EU General Data Protection Regulation (GDPR)</strong> and
          applicable Austrian and EU data protection laws.
        </p>

        <p>
          This Policy should be read together with our{' '}
          <strong>Terms of Service</strong> and, where applicable, our{' '}
          <strong>Data Processing Addendum (DPA)</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Who we are (Controller details)
        </h2>
        <p className="mb-4">
          For the processing activities described in this Policy where we act as{' '}
          <strong>Controller</strong>, the controller is:
        </p>
        <p>
          <strong>SatisPro</strong>
          <br />
          Leopold-Böhm-Straße 5<br />
          1030 Vienna, Austria
          <br />
          Email:{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:contact@satispro.net"
          >
            contact@satispro.net
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Roles: controller vs processor
        </h2>
        <p className="mb-4">Depending on the context, we may act as:</p>

        <ol className="list-decimal pl-6">
          <li>
            <strong>Data Controller</strong> – For personal data we collect and
            use for our own purposes, such as:
            <ul className="list-[circle] pl-6 my-2">
              <li>Website visitors;</li>
              <li>prospective customers and leads;</li>
              <li>user accounts and billing contacts; and</li>
              <li>our vendors and partners.</li>
            </ul>
          </li>
          <li>
            <strong>Data Processor</strong> – for personal data we process{' '}
            <strong>on behalf of our customers</strong> in the Platform, such
            as:
            <ul className="list-[circle] pl-6 my-2">
              <li>review content imported from Google Business Profile;</li>
              <li>business profile and optimization data;</li>
              <li>draft and approved replies; and</li>
              <li>metadata associated with reviews and replies.</li>
            </ul>
          </li>
        </ol>

        <p className="mb-4">
          When we act as Processor, the Service Agreement and DPA between
          SatisPro and the customer govern our processing. In this case, the
          customer is the “Controller”.
        </p>
        <p>
          <strong>Google as independent controller.</strong>
          <br />
          Google LLC acts as an independent controller for personal data
          processed on Google services, including Google Business Profile. Our
          access to your GBP is subject to Google’s terms, policies and APIs
          rules and Google’s own privacy practices (see Google’s Privacy
          Policy).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Categories of personal data we collect
        </h2>
        <p>We may process the following categories of personal data.</p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.1 Account and business data (controller)
        </h3>
        <ul className="mb-4 list-disc pl-6">
          <li>Name and surname;</li>
          <li>business email address;</li>
          <li>optional business phone number;</li>
          <li>company name and role;</li>
          <li>login details (email and hashed password or SSO information);</li>
          <li>subscription plan and billing information.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.2 Billing and payment data (controller)
        </h3>
        <ul className="mb-4 list-disc pl-6">
          <li>Company billing details (address, VAT/UID number, etc.); and</li>
          <li>
            payment-related data (for example, payment method token, transaction
            identifiers) processed via third-party payment providers.
          </li>
        </ul>
        <p>
          We <strong>do not</strong> store full card numbers or CVV codes on our
          own systems. Payment data is processed by our payment providers as
          separate controllers or processors, depending on the relationship.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.3 Review and reply data (processor)
        </h3>
        <p className="mb-4">On behalf of our customers, we process:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            review text, rating, and reviewer display name as shown on GBP;
          </li>
          <li>draft replies generated by AI;</li>
          <li>edits and approvals made by customer users;</li>
          <li>final replies posted to GBP; and</li>
          <li>
            timestamps and technical metadata (for example, which user approved
            a reply).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.4 Business profile and optimization data (processor)
        </h3>
        <p className="mb-4">
          When you use our GBP optimization services, we may process, on your
          behalf:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            business listing data such as name, address, phone number, website,
            categories, services, attributes, opening hours and special hours;
          </li>
          <li>
            GBP posts, descriptions, offers, and Q&A content that we draft or
            publish for you;
          </li>
          <li>
            photos, logos and other media you upload to us for use on your GBP
            (which may occasionally include personal data, such as if
            individuals are visible in photos); and
          </li>
          <li>
            technical and configuration data related to your GBP settings and
            changes (for example, which settings were updated, when, and by
            whom).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.5 Usage and device data
        </h3>
        <p className="mb-4">
          When you visit our Website or use our Platform, we may automatically
          collect:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>IP address;</li>
          <li>browser type and version;</li>
          <li>device type and operating system;</li>
          <li>referrer URLs;</li>
          <li>pages and screens visited, buttons clicked, time spent; and</li>
          <li>
            approximate location inferred from IP (for example, city or region
            level).
          </li>
        </ul>
        <p>
          We may use cookies and similar technologies for this purpose (see
          Section 6).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.6 Support and communications
        </h3>
        <p className="mb-4">
          If you contact us (for example via email, forms, in-app chat), we
          process:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>your contact details;</li>
          <li>the content of your message; and</li>
          <li>related metadata (time, IP, technical headers).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Sources of personal data
        </h2>
        <p className="mb-4">We obtain personal data from:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            <strong>you directly</strong> (for example, account creation, forms,
            emails, chat);
          </li>
          <li>
            the <strong>Google Business Profile integration</strong>, when you
            authorize us to access your reviews and manage your listing;
          </li>
          <li>
            <strong>third-party service providers</strong> (for example, payment
            processors, analytics tools, email platforms) where you have
            initiated an interaction or where they operate on our behalf; and
          </li>
          <li>
            <strong>public sources</strong> in a limited way (for example, your
            public GBP listing or website) in the context of onboarding,
            support, or business development.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Purposes and legal bases (GDPR)
        </h2>
        <p>
          We only process personal data when we have a legal basis under GDPR.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.1 Providing and operating the Service (Art. 6(1)(b) GDPR – contract)
        </h3>
        <p className="mb-4">We process personal data as necessary to:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>create and manage user accounts;</li>
          <li>connect and maintain your GBP integration;</li>
          <li>import review data and generate AI-based draft replies;</li>
          <li>enable you to review, approve, edit, and post replies;</li>
          <li>
            provide Google Business Profile optimization services, such as
            reviewing and updating your profile information, posts, photos,
            services, and other GBP settings as agreed with you; and
          </li>
          <li>provide customer support and handle technical issues.</li>
        </ul>
        <p>
          If you do not provide data we mark as required (for example, account
          email, billing data for paid plans), we may not be able to provide the
          Service or specific features to you.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.2 Billing, administration, and legal obligations (Art. 6(1)(b) and
          (c) GDPR)
        </h3>
        <p className="mb-4">We process billing and administrative data to:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>issue invoices and receipts;</li>
          <li>handle subscription payments and renewals; and</li>
          <li>comply with bookkeeping, tax, and other legal requirements.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.3 Service improvement, security, and analytics (Art. 6(1)(f) GDPR –
          legitimate interest)
        </h3>
        <p className="mb-4">
          We may process usage, technical, and aggregated data to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>operate and maintain the Platform;</li>
          <li>monitor performance and reliability;</li>
          <li>improve features and user experience; and</li>
          <li>detect misuse or security incidents.</li>
        </ul>
        <p>
          Where possible, we use aggregated or pseudonymized data for these
          purposes and balance our interests with your privacy rights.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.4 Marketing communications (Art. 6(1)(a) and/or (f) GDPR)
        </h3>
        <p className="mb-4">
          If you sign up for updates or request information, we may use your
          contact details to send:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>product news and feature updates;</li>
          <li>educational content, tips, and onboarding material;</li>
          <li>event invitations and offers.</li>
        </ul>
        <p className="mb-4">
          You can opt out of marketing communications at any time via the
          unsubscribe link or by contacting us.
        </p>
        <p>
          For existing customers, we may send product-related messages based on
          our legitimate interest in keeping you informed about the Service,
          subject to applicable e-privacy rules.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.5 Handling legal requests and claims (Art. 6(1)(c) and (f) GDPR)
        </h3>
        <p className="mb-4">We may process data as necessary to:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>respond to lawful requests from authorities;</li>
          <li>establish, exercise, or defend legal claims; and</li>
          <li>enforce our Terms or other agreements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Use of AI and data
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.1 AI-generated replies
        </h3>
        <p className="mb-4">
          To generate draft replies, we pass selected data (for example, review
          text, basic context, desired tone) to AI model providers acting as our
          processors.
        </p>
        <p>
          We limit the data sent to what is necessary for generating the reply
          and require our AI providers to process data only according to our
          documented instructions.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.2 No training of third-party foundation models on your personal data
        </h3>
        <p>
          We do <strong>not</strong> permit Customer Personal Data to be used to
          train third-party foundation models that are offered generally to
          other customers.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.3 Aggregated and de-identified data
        </h3>
        <p className="mb-4">
          We may create aggregated or de-identified datasets (where individual
          persons and specific businesses are no longer identifiable) and use
          them to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>improve the safety, quality, and performance of the Service;</li>
          <li>analyze usage patterns and product performance; and</li>
          <li>develop new features and internal models.</li>
        </ul>
        <p>
          We will not attempt to re-identify such data and require our
          processors to follow the same principle.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Cookies and similar technologies
        </h2>
        <p className="mb-4">
          Our Website and Platform may use cookies, local storage, and similar
          technologies for:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            <strong>essential functions</strong> (for example, login sessions,
            security, basic functionality);
          </li>
          <li>
            <strong>preferences</strong> (for example, remembering language or
            interface settings);
          </li>
          <li>
            <strong>analytics</strong> (for example, understanding usage to
            improve the site and app); and
          </li>
          <li>
            <strong>marketing</strong> on the Website (for example, measuring
            campaign performance), where applicable.
          </li>
        </ul>
        <p className="mb-4">
          Where required by law, we present a{' '}
          <strong>cookie banner / consent manager</strong> to obtain your
          consent for non-essential cookies (such as analytics or marketing
          cookies). You can:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>manage your cookie choices via our cookie banner; and</li>
          <li>also control cookies via your browser settings.</li>
        </ul>
        <p className="mb-4">
          If you disable cookies, some parts of the Service may not function
          properly.
        </p>
        <p>
          We may provide more details on specific cookies and providers in a
          separate Cookie Policy or in the cookie banner itself.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Recipients and categories of processors
        </h2>
        <p className="mb-4">
          We share personal data only when necessary and with appropriate
          safeguards, with:
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.1 Hosting and infrastructure providers
        </h3>
        <p>
          We use cloud hosting, managed databases, and related infrastructure to
          run the Service.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.2 AI model providers
        </h3>
        <p>
          We use third-party AI model providers to generate draft replies from
          review data and context you authorize us to process.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.3 Payment processors
        </h3>
        <p>
          We use third-party payment processors to handle card or other
          electronic payments. These providers process your payment data
          directly and provide us with limited payment information (for example,
          successful payment status, partial card details).
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.4 Email, analytics, and support tools
        </h3>
        <p className="mb-4">
          We use email delivery services, analytics tools, logging and
          monitoring systems, and support platforms to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>send transactional and marketing emails;</li>
          <li>monitor performance and detect errors; and</li>
          <li>provide customer support and manage</li>
          tickets.
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.5 Professional advisors and public authorities
        </h3>
        <p className="mb-4">We may share data with:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            lawyers, auditors, accountants, or similar advisors under
            confidentiality obligations; and
          </li>
          <li>
            public authorities, courts, or regulators when required by law or
            legal process.
          </li>
        </ul>
        <p>
          When third parties act as our <strong>processors</strong>, we enter
          into data processing agreements with them to ensure compliance with
          GDPR and to restrict processing to our documented instructions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. International data transfers
        </h2>
        <p className="mb-4">
          Some of our providers may be located or may process data{' '}
          <strong>outside the European Economic Area (EEA)</strong>. When we
          transfer personal data outside the EEA, we ensure that:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            the European Commission has adopted an{' '}
            <strong>adequacy decision</strong> for the destination country; or
          </li>
          <li>
            we use <strong>Standard Contractual Clauses</strong> or other
            appropriate safeguards; and
          </li>
          <li>
            where necessary, we assess additional technical and organizational
            measures to protect the data.
          </li>
        </ul>
        <p>
          You may contact us for more information about the specific transfer
          mechanisms we use.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Data retention
        </h2>
        <p className="mb-4">
          We retain personal data only as long as necessary for the purposes
          described in this Policy or as required by law.
        </p>
        <p className="mb-4">In particular:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            <strong>Account and billing data</strong> – kept for the duration of
            your relationship with us and then for the period required by tax
            and accounting laws (often up to 7–10 years, depending on
            jurisdiction).
          </li>
          <li>
            <p className="mb-4">
              <strong>Review, profile, and reply data</strong> (customer data
              processed as Processor):
            </p>
            <ul className="mb-4 list-[circle] pl-6">
              <li>
                in active systems, typically deleted or anonymized within about{' '}
                <strong>30 days</strong> after termination of the Service
                Agreement or your request (unless a different period is agreed
                in the DPA); and
              </li>
              <li>
                residual copies in backups and logs may be retained for up to
                approximately <strong>180 days</strong> as part of our standard
                backup rotation, unless a longer retention is required by law.
              </li>
            </ul>
          </li>
          <li>
            <strong>Support communications and logs</strong> – retained for a
            reasonable period (typically up to <strong>24 months</strong>) to
            handle follow-up issues, defend claims, and improve support.
          </li>
          <li>
            <strong>Marketing contacts</strong> – retained until you withdraw
            consent, object to processing, or we determine that the contact is
            inactive.
          </li>
        </ul>
        <p>
          If we act as Processor, we follow the retention and deletion
          obligations in the DPA and instructions from the Controller.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          11. Your rights under GDPR
        </h2>
        <p className="mb-4">
          When we act as Controller, you have the following rights (subject to
          legal conditions and limitations):
        </p>
        <ol className="mb-4 list-decimal pl-6">
          <li>
            <strong>Right of access</strong> – to obtain confirmation whether we
            process your personal data and to receive a copy.
          </li>
          <li>
            <strong>Right to rectification</strong> – to have inaccurate or
            incomplete data corrected.
          </li>
          <li>
            <strong>Right to erasure (“right to be forgotten”)</strong> – to
            request deletion in certain circumstances (for example, where data
            is no longer needed or processing is based on consent that you
            withdraw).
          </li>
          <li>
            <strong>Right to restriction of processing</strong> – to request
            limited processing in specific situations (for example, while
            accuracy is being verified).
          </li>
          <li>
            <strong>Right to data portability</strong> – to receive certain data
            in a structured, commonly used, machine-readable format and to
            transmit it to another controller (where processing is based on
            consent or contract and carried out by automated means).
          </li>
          <li>
            <strong>Right to object</strong> –
          </li>
          <ul className="my-2 list-[circle] pl-6">
            <li>to processing based on our legitimate interests; and</li>
            <li>
              at any time to processing for direct marketing (we will then stop
              processing for such purposes).
            </li>
          </ul>
          <li>
            <strong>Right to withdraw consent</strong> – where processing is
            based on consent, you may withdraw it at any time without affecting
            the lawfulness of processing carried out before withdrawal.
          </li>
        </ol>
        <p className="mb-4">
          To exercise these rights, contact us at{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:contact@satispro.net"
          >
            contact@satispro.net
          </a>
          .
        </p>
        <p>
          When we act as Processor on behalf of a customer (Controller), you
          should direct your request to that customer. We will assist the
          customer in fulfilling requests where required by the DPA and
          applicable law.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          11.1 Right to lodge a complaint
        </h3>
        <p className="mb-4">
          You also have the right to lodge a complaint with a supervisory
          authority, in particular in the EU Member State of your habitual
          residence or place of work. In Austria, this is:
        </p>
        <p>
          Österreichische Datenschutzbehörde <br />
          Barichgasse 40–42 <br />
          1030 Vienna, Austria
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          12. How to revoke SatisPro access to your Google Business Profile
        </h2>

        <p className="mb-4">
          You can revoke our access to your GBP at any time by:
        </p>
        <ol className="mb-4 list-decimal pl-6">
          <li>going to your Google Account settings;</li>
          <li>finding the section for third-party access or connected apps;</li>
          <li>locating the application or connection related to SatisPro;</li>
          <li>removing or revoking access; and</li>
          <li>
            optionally notifying us at{' '}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:contact@satispro.net"
            >
              contact@satispro.net
            </a>{' '}
            if you also want us to delete associated data from our systems.
          </li>
        </ol>
        <p className="mb-4">After revocation:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            we will no longer receive new reviews from GBP or be able to post
            replies or make optimization changes; and
          </li>
          <li>
            we will delete or anonymize relevant data in accordance with Section
            10 and any applicable DPA.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          13. Children’s data
        </h2>
        <p className="mb-4">
          Our Website and Service are intended for business and professional
          users and are not directed to children. We do not knowingly collect
          personal data from children under 16.
        </p>
        <p>
          If we become aware that we have collected personal data from a child
          under 16 without appropriate consent, we will delete such data.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">14. Security</h2>
        <p className="mb-4">
          We take appropriate technical and organizational measures to protect
          personal data, including:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>use of reputable hosting and infrastructure providers;</li>
          <li>
            encryption in transit and at rest where supported by our
            infrastructure;
          </li>
          <li>access controls and least-privilege principles;</li>
          <li>logging and monitoring of critical systems; and</li>
          <li>restricted access to personal data by authorized staff only.</li>
        </ul>
        <p>
          However, no system can be fully secure. We cannot guarantee absolute
          security, but we work continuously to keep risk at a reasonable level.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          15. Changes to this Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time, for example to
          reflect:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>changes in our Service or technology;</li>
          <li>new legal or regulatory requirements; or</li>
          <li>changes in our processing activities or providers.</li>
        </ul>
        <p className="mb-4">When we make material changes, we will:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            post the updated Policy on https://satispro.net with a new effective
            date; and
          </li>
          <li>
            where appropriate, notify you by email, in-app notice, or a banner
            on the Website.
          </li>
        </ul>
        <p>
          Your continued use of the Service after the updated Policy becomes
          effective means that you accept the changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">16. Contact</h2>
        <p className="mb-4">
          For questions, requests, or complaints about this Privacy Policy or
          our data protection practices, you can contact us at:
        </p>
        <p>
          Email:{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:contact@satispro.net"
          >
            contact@satispro.net
          </a>
          <br />
          Address: <strong>Leopold-Böhm-Straße 5, 1030 Vienna, Austria</strong>
        </p>
      </main>
    </div>
  );
};
