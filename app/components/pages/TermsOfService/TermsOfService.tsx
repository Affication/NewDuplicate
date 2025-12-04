import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TermsOfService = (): JSX.Element => {
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
          Terms of Service
        </h1>
        <p className="mb-4">
          <strong>SatisPro – Terms of Service</strong>
          <br />
          <strong>Effective date:</strong> 28.11.2025
        </p>
        <p className="mb-4">
          These Terms of Service (“<strong>Terms</strong>”) govern your access
          to and use of the SatisPro platform and related services
          (collectively, the “<strong>Service</strong>”).
        </p>
        <p className="mb-4">
          The Service is provided by <strong>SatisPro</strong>, with its
          registered office at
          <strong>Leopold-Böhm-Straße 5, 1030 Vienna, Austria</strong> (“
          <strong>SatisPro</strong>”, “<strong>we</strong>”, “
          <strong>us</strong>”, “<strong>our</strong>”).
        </p>
        <p className="mb-4">
          By creating an account, connecting your Google Business Profile, or
          using the Service in any way, you agree to be bound by these Terms.
        </p>
        <p className="mb-4">
          If you have signed a separate <strong>Service Agreement</strong>{' '}
          and/or <strong>Data Processing Addendum</strong> (“
          <strong>DPA</strong>”) with us, that agreement prevails over these
          Terms in case of conflict, but only for the subjects it specifically
          covers.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Description of the Service
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          1.1 What SatisPro does
        </h3>
        <p className="mb-4">
          SatisPro helps businesses manage their presence on{' '}
          <strong>Google Business Profile</strong> (“<strong>GBP</strong>”). In
          particular, the Service may:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>retrieve review content from your GBP;</li>
          <li>
            generate <strong>AI-based draft replies</strong> to reviews;
          </li>
          <li>
            provide an approval interface where you can approve, edit, or reject
            replies;
          </li>
          <li>
            post approved replies back to your GBP (or auto-post, if you
            explicitly enable that); and
          </li>
          <li>
            provide{' '}
            <strong>Google Business Profile optimization services</strong>, such
            as reviewing and improving your GBP settings and content (for
            example, categories, business description, services, opening hours,
            photos, posts, Q&A and other profile elements), as agreed with you.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-4">1.2 Service models</h3>
        <p className="mb-4">We may provide these features:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            as a <strong>self-service tool</strong> (you use the software
            yourself); and/or
          </li>
          <li>
            as a <strong>managed / “done-for-you” service</strong>, where you
            authorize us to make certain changes on your behalf to your GBP, in
            line with your instructions.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          1.3 No guarantee of business results
        </h3>
        <p className="mb-4">
          We do <strong>not</strong> guarantee any specific:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>GBP or search ranking,</li>
          <li>visibility in local search results,</li>
          <li>number, rating, or content of reviews, or</li>
          <li>revenue, leads, or other business outcomes,</li>
        </ul>
        <p>
          even if we assist you with Google Business Profile optimization. Any
          success stories or examples we share are illustrative only.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          1.4 No affiliation with Google
        </h3>
        <p className="mb-4">
          SatisPro is independent and is <strong>not</strong> affiliated with,
          sponsored, or endorsed by Google LLC. Google, Google Business Profile,
          and related marks are trademarks of Google LLC.
        </p>
        <p>
          Google acts as an independent controller of personal data processed on
          Google services, including GBP. Our access to and use of GBP is
          subject to Google’s terms, policies and APIs rules, which are separate
          from these Terms.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Who may use the Service
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">2.1 Business users</h3>
        <p>
          The Service is intended for{' '}
          <strong>business and professional use</strong>. Individuals may use it
          in connection with their professional role or as sole proprietors.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          2.2 Authority and age
        </h3>
        <p className="mb-4">By using the Service, you confirm that:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            you are at least <strong>18 years old</strong> (or the age of
            majority in your jurisdiction, if higher);
          </li>
          <li>
            you are an authorized owner or manager of the GBP listing(s) you
            connect; and
          </li>
          <li>
            you have the authority to bind the business or organization you
            represent to these Terms.
          </li>
        </ul>
        <p>
          If you are a consumer under EU law and still use the Service, nothing
          in these Terms limits your non-waivable consumer rights.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Accounts and access
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">3.1 Registration</h3>
        <p>
          To use the Service, you may need to create an account by providing
          basic information (such as name, email, password) or using a supported
          single sign-on method.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.2 Account security
        </h3>
        <p className="mb-4">You are responsible for:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>keeping your login credentials confidential;</li>
          <li>
            using strong passwords and enabling additional security features
            where available; and
          </li>
          <li>
            promptly notifying us at{' '}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:contact@satispro.net"
            >
              contact@satispro.net
            </a>{' '}
            if you suspect unauthorized access.
          </li>
        </ul>
        <p>
          You are responsible for all activities that occur under your account,
          except where we are at fault.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          3.3 Connecting your Google Business Profile
        </h3>
        <p className="mb-4">
          To allow SatisPro to retrieve reviews, make optimization changes, and
          post replies, you will grant us access to your GBP account via
          Google’s access mechanisms (for example, OAuth-based authorization).
        </p>
        <p>
          You can revoke this access at any time (see our Privacy Policy section
          on revoking access). If you revoke access, some or all Service
          functionality will no longer be available.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Your responsibilities
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          4.1 Reviewing AI-generated replies
        </h3>
        <p className="mb-4">
          The Service uses generative AI to suggest replies. AI outputs may be
          inaccurate, incomplete, biased, or inappropriate. You agree that:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            you will review each reply before it is posted, unless you have
            explicitly enabled auto-posting;
          </li>
          <li>
            you will not rely on AI outputs as legal, medical, or other
            professional advice; and
          </li>
          <li>
            you remain fully responsible for the content of replies once they
            are published to your GBP.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          4.2 Content standards
        </h3>
        <p className="mb-4">
          You agree not to use the Service to generate, approve, or post content
          that:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>violates any applicable law or court order;</li>
          <li>
            infringes intellectual property, privacy, or other rights of any
            person;
          </li>
          <li>
            is defamatory, harassing, hateful, discriminatory, or incites
            violence;
          </li>
          <li>is misleading, deceptive, or constitutes spam; or</li>
          <li>
            violates platform policies (including{' '}
            <strong>
              Google’s Business Profile policies and Business Profile APIs
              policies
            </strong>
            ).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          4.3 Compliance with law and platform rules
        </h3>
        <p className="mb-4">You are responsible for:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            ensuring you have all necessary rights and permissions to process
            review data and publish replies;
          </li>
          <li>
            complying with applicable laws (including data protection and
            e-privacy rules); and
          </li>
          <li>
            complying with the terms and policies of third-party platforms you
            use together with the Service (including all Google GBP and API
            policies).
          </li>
        </ul>
        <p>
          This includes ensuring that all information shown on your GBP (for
          example, address, opening hours, services, claims made in posts and
          descriptions) is accurate, lawful, and not misleading, even if we
          assist you in optimizing or updating it.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          4.4 Technical requirements
        </h3>
        <p>You are responsible for obtaining and maintaining:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>internet access;</li>
          <li>compatible devices, operating systems, and web browsers; and</li>
          <li>
            any other third-party services you require to use the Service.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          4.5 Authorization for GBP optimization
        </h3>
        <p>
          If you ask us to optimize or manage your GBP listing, you authorize us
          (and our staff) to access and edit your GBP settings and content
          within the scope of work agreed with you. You remain responsible for
          reviewing changes and ensuring they are accurate and compliant with
          your internal policies and any regulatory requirements that apply in
          your industry.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Our responsibilities
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.1 Service provision
        </h3>
        <p className="mb-4">During your subscription, we will:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>provide access to the Service according to your plan;</li>
          <li>
            process your review and profile data to generate draft replies using
            third-party AI providers acting on our behalf;
          </li>
          <li>
            store and process your data using reputable hosting, database, and
            infrastructure providers; and
          </li>
          <li>
            post replies and apply optimization changes to GBP based on your
            approvals and/or auto-posting settings.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.2 Third-party providers
        </h3>
        <p className="mb-4">
          We use third-party service providers to operate the Service,
          including:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>cloud infrastructure and managed database providers;</li>
          <li>AI model providers for text generation;</li>
          <li>payment processors; and</li>
          <li>email, logging, analytics, and other tools.</li>
        </ul>
        <p>
          These providers act as our processors and process data under our
          instructions, subject to appropriate contractual and security
          safeguards. We may update the categories of such providers over time.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">5.3 Security</h3>
        <p className="mb-4">
          We implement appropriate technical and organizational measures
          designed to protect your data, such as:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>access controls and least-privilege principles;</li>
          <li>
            encryption in transit and at rest where supported by our
            infrastructure; and
          </li>
          <li>
            limited access by staff on a need-to-know basis, along with
            monitoring and security logging.
          </li>
        </ul>
        <p>
          More detail is provided in our Privacy Policy and, where applicable,
          our DPA.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          5.4 Service availability and support
        </h3>
        <p className="mb-4">
          The Service is provided on an “as available” basis. While we aim to
          keep the Service running smoothly, we do not guarantee uninterrupted
          availability. We may occasionally suspend or limit access for
          maintenance, updates, or security reasons and will try to schedule
          such maintenance at reasonable times.
        </p>
        <p>
          Unless agreed otherwise in a separate Service Agreement, we do not
          provide a specific uptime SLA. You can contact us for support via{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:contact@satispro.net"
          >
            contact@satispro.net
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Plans, fees, and payment
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.1 Plans and pricing
        </h3>
        <p className="mb-4">Access to the Service may be provided:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>on a free or trial basis;</li>
          <li>under monthly or annual subscription plans; or</li>
          <li>under custom agreements.</li>
        </ul>
        <p>
          The applicable plan, pricing, billing cycle, and features are shown on
          our website, order forms, or in your Service Agreement.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">6.2 Fees and taxes</h3>
        <ul className="mb-4 list-disc pl-6">
          <li>Fees are charged in accordance with your selected plan.</li>
          <li>
            Unless explicitly stated otherwise, fees are exclusive of VAT and
            other applicable taxes, which may be added where required by law.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.3 Payment processing
        </h3>
        <p className="mb-4">
          We use third-party payment processors to collect and process payments.
          By providing your payment details, you authorize us and our payment
          processor to charge recurring fees according to your plan.
        </p>
        <p>
          If a payment is not successfully processed and you do not remedy the
          issue within a reasonable period, we may suspend or terminate your
          access to the Service.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.4 Changes to pricing
        </h3>
        <p className="mb-4">
          We may update our prices or plan features from time to time. Changes:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            will not affect fees already paid for an ongoing prepaid term; and
          </li>
          <li>
            will be communicated in advance for future renewals where reasonably
            possible.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          6.5 Auto-renewal and cancellation
        </h3>
        <p className="mb-4">
          Unless otherwise specified in an Order or Service Agreement,
          subscriptions renew automatically at the end of each billing period
          for the same term and at the then-current prices.
        </p>
        <p className="mb-4">
          You may cancel renewal at any time before the end of the current
          billing period via your account settings (if available) or by
          contacting us at{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:contact@satispro.net"
          >
            contact@satispro.net
          </a>
          .
        </p>
        <p>
          Cancellation takes effect at the end of the current billing period;
          fees already paid are non-refundable unless otherwise required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Term, suspension, and termination
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">7.1 Term</h3>
        <p>
          These Terms apply from your first use of the Service or account
          creation and remain in effect until your account is closed and we
          cease providing the Service to you, subject to provisions that survive
          termination.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          7.2 Your termination rights
        </h3>
        <p className="mb-4">
          You may terminate your subscription and/or close your account:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>through self-service functionality (if available); or</li>
          <li>
            by written notice to{' '}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="mailto:contact@satispro.net"
            >
              contact@satispro.net
            </a>
            .
          </li>
        </ul>
        <p>
          Unless otherwise required by law or specified in a separate Service
          Agreement, fees already paid are non-refundable, except where we
          expressly offer a refund (for example in a trial or guarantee).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          7.3 Our rights to suspend or terminate
        </h3>
        <p className="mb-4">
          We may suspend or terminate your access (in whole or in part), with or
          without notice, if:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>you materially breach these Terms (including non-payment);</li>
          <li>
            your use of the Service is unlawful, fraudulent, or poses a security
            or stability risk;
          </li>
          <li>
            you attempt to circumvent access controls, misuse integrations, or
            violate third-party platform rules; or
          </li>
          <li>
            we are required to do so by law, court order, or a competent
            authority.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          7.4 Effect of termination
        </h3>
        <p className="mb-4">Upon termination:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>your connection to GBP will be removed or disabled;</li>
          <li>
            access to the Service (including dashboards and AI features) will
            end; and
          </li>
          <li>
            we will delete or anonymize personal data processed in the Service
            within a reasonable period, typically:
            <ul className="list-[circle] pl-6 my-2">
              <li>
                within about <strong>30 days</strong> for active systems; and
              </li>
              <li>
                within standard backup and log rotation cycles (generally up to
                180 days) for residual copies,
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          {' '}
          unless a different period is specified in a signed Service Agreement
          or DPA, or a longer retention is required by law.
        </p>
        <p>
          Sections that by their nature should survive (for example, payment
          obligations, confidentiality, intellectual property, disclaimers,
          limitations of liability, governing law) will continue to apply.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">7.5 Data export</h3>
        <p className="mb-4">
          Before or within a reasonable period after termination, you may
          request an export of Customer Data stored in the Service in a commonly
          used format. We may charge a reasonable fee for extensive or custom
          export requests.
        </p>
        <p>
          After the export window and the applicable retention periods, Customer
          Data will be deleted or anonymized as described in Section 7.4 and in
          our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Intellectual property
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">8.1 Our IP</h3>
        <p className="mb-4">
          The Service, including its software, user interfaces, design,
          documentation, underlying models, templates, and all related
          intellectual property rights, are and remain the exclusive property of
          SatisPro and its licensors.
        </p>
        <p>
          You receive a limited, non-exclusive, non-transferable, revocable
          right to use the Service in accordance with these Terms and any
          applicable Order.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.2 Your data and content
        </h3>
        <p className="mb-4">As between you and SatisPro:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            you retain all rights in your business information, GBP listings,
            and any content or data you provide to the Service (“
            <strong>Customer Data</strong>”); and
          </li>
          <li>
            to the extent protectable under law, you also retain rights in your
            approved replies and other content created using the Service (“
            <strong>Output</strong>”), subject to our rights in underlying tools
            and third-party materials.
          </li>
        </ul>
        <p className="mb-4">
          You grant us a non-exclusive, worldwide, royalty-free license for the
          duration of your use of the Service (and a reasonable period
          thereafter for backups, audit, and legal compliance) to host, copy,
          process, transmit, and display Customer Data and Output solely to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>provide, maintain, secure, and support the Service;</li>
          <li>address service or security issues;</li>
          <li>comply with law or valid legal process.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          8.3 AI models and aggregated data
        </h3>
        <ul className="mb-4 list-disc pl-6">
          <li>
            We do <strong>not</strong> use Customer Personal Data to train
            third-party foundation models that are offered generally to other
            customers.
          </li>
          <li>
            We may create and use aggregated or de-identified data (that no
            longer identifies you or any individual) to improve the safety,
            quality, and performance of the Service, including internal model
            tuning, benchmarking, and analytics. We will not attempt to
            re-identify such data and require our processors to follow the same
            principle.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Acceptable use and restrictions
        </h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            reverse-engineer, decompile, or attempt to derive the source code of
            the Service (except to the limited extent allowed by mandatory law);
          </li>
          <li>
            circumvent or attempt to circumvent any access or rate-limiting
            controls;
          </li>
          <li>
            use the Service to build a competing service, or benchmark it to
            create derivative offerings;
          </li>
          <li>
            use automated means (bots, scraping) in ways that overload or
            interfere with the Service or its infrastructure; or
          </li>
          <li>upload or transmit any viruses, malware, or harmful code.</li>
        </ul>
        <p>
          We may monitor use within reasonable limits to ensure compliance,
          security, and stability, and may take actions such as rate limiting,
          suspension, or additional verification.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Confidentiality
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">10.1 Definition</h3>
        <p>
          “<strong>Confidential Information</strong>” means non-public
          information disclosed by one party to the other that is marked or
          reasonably understood to be confidential (including product roadmaps,
          security details, and business information). Customer Data is treated
          as your Confidential Information.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">10.2 Obligations</h3>
        <p className="mb-4">The receiving party will:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            use Confidential Information only to perform obligations or exercise
            rights under these Terms;
          </li>
          <li>protect it with at least reasonable care;</li>
          <li>
            not disclose it to third parties except to employees, contractors,
            or processors who need to know and are bound by similar obligations
            of confidentiality.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">10.3 Exceptions</h3>
        <p className="mb-4">
          These obligations do not apply to information that:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>is or becomes public through no fault of the receiving party;</li>
          <li>was lawfully known to the receiving party before disclosure;</li>
          <li>
            is independently developed without reference to the confidential
            information; or
          </li>
          <li>
            must be disclosed under law or court order (provided the receiving
            party gives notice where legally permitted).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">11. Disclaimers</h2>
        <p className="mb-4">To the maximum extent permitted by law:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            the Service is provided “<strong>as is</strong>” and “
            <strong>as available</strong>”;
          </li>
          <li>
            we do not warrant that the Service will be uninterrupted,
            error-free, or completely secure;
          </li>
          <li>
            we make no warranties regarding the accuracy, completeness, or
            suitability of any AI-generated content or third-party content.
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits warranties or liability that
          cannot be excluded or limited under applicable law (for example, in
          cases of gross negligence, willful misconduct, or mandatory consumer
          rights).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          12. Limitation of liability and indemnity
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          12.1 Exclusion of certain damages
        </h3>
        <p className="mb-4">
          To the fullest extent permitted by law, neither party will be liable
          to the other for:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>indirect, incidental, special, or consequential damages;</li>
          <li>loss of profits, revenue, or goodwill;</li>
          <li>loss, corruption, or interruption of data;</li>
          <li>business interruption,</li>
        </ul>
        <p>even if advised of the possibility of such damages.</p>

        <h3 className="text-xl font-semibold mt-6 mb-4">12.2 Liability cap</h3>
        <p className="mb-4">
          Except for (i) your payment obligations; (ii) your breach of
          intellectual property or use restrictions; or (iii) liability that
          cannot be limited by law, the{' '}
          <strong>total aggregate liability</strong> of SatisPro arising out of
          or in connection with the Service and these Terms shall not exceed the
          total fees you paid to SatisPro under your subscription for the{' '}
          <strong>one (1) month</strong> immediately preceding the event giving
          rise to the claim.
        </p>
        <p>
          If you have used the Service free of charge, SatisPro’s total
          aggregate liability shall be limited to <strong>EUR 0</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          12.3 Customer indemnity
        </h3>
        <p className="mb-4">
          You agree to indemnify and hold harmless SatisPro, its affiliates, and
          their respective officers, directors, and employees from and against
          any third-party claims, damages, or costs (including reasonable legal
          fees) arising from:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            your use of the Service in breach of these Terms or applicable law;
          </li>
          <li>
            Customer Data or Output (including replies) you approve, provide, or
            publish via the Service;
          </li>
          <li>
            your violation of third-party platform rules (including Google
            Business Profile policies and APIs policies).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          13. Governing law and dispute resolution
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">13.1 Governing law</h3>
        <p>
          These Terms, and any disputes arising out of or relating to them or
          the Service, are governed by <strong>Austrian law</strong>, excluding
          its conflict-of-law rules.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">13.2 Jurisdiction</h3>
        <p>
          The competent courts of <strong>Vienna, Austria</strong> shall have
          exclusive jurisdiction over any disputes arising from or related to
          these Terms or the Service, subject to any mandatory jurisdiction
          rules that may apply to consumers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          14. Changes to the Service and these Terms
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          14.1 Service changes
        </h3>
        <p>
          We may update or improve the Service from time to time, including
          adding, modifying, or removing features. We will not materially reduce
          core functionality of a paid plan during a committed term without a
          reasonable justification (for example, changes to third-party APIs).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          14.2 Changes to Terms
        </h3>
        <p className="mb-4">
          We may update these Terms to reflect changes in law, our Service, or
          our business. When we do:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            we will post the updated Terms with a new effective date on{' '}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="https://satispro.net"
            >
              https://satispro.net
            </a>
            ; and
          </li>
          <li>
            for material changes, we will take reasonable steps to notify you
            (for example, in-app notice or email).
          </li>
        </ul>
        <p>
          If you continue using the Service after the updated Terms take effect,
          you are deemed to have accepted them. If you do not agree, you should
          stop using the Service and may terminate as described in Section 7.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">15. Miscellaneous</h2>
        <ul className="mb-4 list-disc pl-6">
          <li>
            <strong>Entire agreement.</strong> These Terms, together with any
            Order, Privacy Policy, and (if applicable) Service Agreement and
            DPA, form the entire agreement between you and SatisPro regarding
            the Service.
          </li>
          <li>
            <strong>No waiver.</strong> A failure to enforce any provision is
            not a waiver of that provision.
          </li>
          <li>
            <strong>Severability.</strong> If any provision is found invalid or
            unenforceable, the remaining provisions remain in full force and
            effect.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign or transfer your
            rights or obligations under these Terms without our prior written
            consent, except in connection with a merger or sale of your
            business. We may assign these Terms to an affiliate or in connection
            with a corporate transaction.
          </li>
          <li>
            <strong>Force majeure.</strong> Neither party is liable for delays
            or failure to perform obligations (other than payment obligations)
            due to events beyond its reasonable control, such as natural
            disasters, war, strikes, major outages, or acts of authorities.
          </li>
          <li>
            <strong>Publicity (optional).</strong> Unless you notify us
            otherwise in writing, we may use your name and logo to identify you
            as a customer of SatisPro on our Website and in marketing materials.
          </li>
        </ul>
        <p>
          For questions about these Terms, contact{' '}
          <a
            className="text-blue-600 hover:text-blue-400"
            href="mailto:support@satispro.net"
          >
            support@satispro.net
          </a>
          .
        </p>
      </main>
    </div>
  );
};
