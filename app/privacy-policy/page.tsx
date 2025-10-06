"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrivacyPolicyPage() {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenSections(Array.from({ length: sections.length }, (_, i) => i));
  };

  const collapseAll = () => {
    setOpenSections([]);
  };

  const allExpanded = openSections.length === sections.length;

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6"
        >
          Data Privacy and Protection Policy
        </motion.h1>

        <p className="text-center text-gray-700 mb-10">
          This Policy outlines how ABF & SONS Global Services Limited collects,
          processes, stores, and protects personal data in accordance with the
          Nigeria Data Protection Regulation (NDPR) 2019.
        </p>

        {/* Expand / Collapse All */}
        <div className="flex justify-center mb-8">
          <button
            onClick={allExpanded ? collapseAll : expandAll}
            className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            {allExpanded ? "Collapse All Sections" : "Expand All Sections"}
          </button>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-yellow-100 transition"
              >
                <span className="text-lg font-semibold text-blue-900">
                  {section.title}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: openSections.includes(index) ? 90 : 0 }}
                  className="text-blue-800 text-2xl leading-none"
                >
                  ▶
                </motion.span>
              </button>

              {/* Section Content */}
              <AnimatePresence initial={false}>
                {openSections.includes(index) && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-5 pb-6 text-gray-800 leading-relaxed space-y-3"
                  >
                    <div className="whitespace-pre-line">{section.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition z-50"
              aria-label="Go to top"
            >
              {/* Simple SVG Arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ✅ Full structured content array
const sections = [
  {
    title: "1. INTRODUCTION",
    content: `As part of our operations, ABF & SONS Global Services Limited (“ABF & SONS” or “the Company”) collects and processes certain types of information (such as name, telephone numbers, address etc.) of individuals that makes them easily identifiable. These individuals include current, past and prospective employees, vendors, customers/clients and their representatives, next-of-kin and other individuals whom ABF & SONS communicate or deals with, jointly and/or severally (“Data Subjects”).
Maintaining the Data Subject’s trust and confidence requires that Data Subjects do not suffer negative consequences/effects as a result of providing ABF & SONS with their Personal Data. To this end, ABF & SONS is firmly committed to complying with applicable data protection laws, regulations, rules and principles to ensure security of Personal Data handled by the Company. This Data Privacy & Protection Policy (“Policy”) describes the minimum standards that must be strictly adhered to regarding the collection, storage, use and disclosure of Personal Data and indicates that ABF & SONS is dedicated to processing the Personal Data it receives or processes with absolute confidentiality and security.
This Policy applies to all forms of systems, operations and processes within the ABF & SONS environment that involve the collection, storage, use, transmission and disposal of Personal Data.
Failure to comply with the data protection rules and guiding principles set out in the Nigeria Data Protection Regulations 2019 (NDPR) as well as those set out in this Policy is a material violation of ABF & SONS’s policies and may result in disciplinary action as required, including suspension or termination of employment or business relationship.`,
  },
  {
    title: "2. SCOPE",
    content: `This Policy applies to all employees of ABF & SONS, as well as to any external business partners (such as suppliers, contractors, vendors and other service providers) who receive, send, collect, access, or process Personal Data in any way on behalf of ABF & SONS, including processing wholly or partly by automated means. This Policy also applies to third party Data Processors who process Personal Data received from ABF & SONS.`,
  },
  {
    title: "3. GENERAL PRINCIPLES FOR PROCESSING OF PERSONAL DATA",
    content: `ABF & SONS is committed to maintaining the principles in the NDPR regarding the processing of Personal Data. To demonstrate this commitment as well as our aim of creating a positive privacy culture within ABF & SONS adheres to the following basic principles relating to the processing of Personal Data:

3.1 LAWFULNESS, FAIRNESS & TRANSPARENCY
Personal Data must be processed lawfully, fairly and in a transparent manner at all times. This implies that Personal Data collected and processed by or on behalf of ABF & SONS must be in accordance with the specific, legitimate and lawful purpose consented to by the Data Subject, save where the processing is otherwise allowed by law or within other legal grounds recognized in the NDPR.

3.2 DATA ACCURACY
Personal Data must be accurate and kept up-to-date. In this regard, ABF & SONS:
a) shall ensure that any data it collects and/or processes is accurate and not misleading in a way that could be harmful to the Data Subject;
b) will make efforts to keep Personal Data updated where reasonable and applicable; and
c) will make timely efforts to correct or erase Personal Data when inaccuracies are discovered.

3.3 PURPOSE LIMITATION
ABF & SONS collects Personal Data only for the purposes identified in the appropriate ABF & SONS Privacy Notice or any other relevant document or based on any other non–written communication (where applicable), provided to the Data Subject and for which Consent has been obtained. Such Personal Data cannot be reused for another purpose that is incompatible with the original purpose, except a new Consent is obtained.

3.4 DATA MINIMIZATION
3.4.1 ABF & SONS limits Personal Data collection and usage to data that is relevant, adequate, and absolutely necessary for carrying out the purpose for which the data is processed.
3.4.2 ABF & SONS will evaluate whether and to what extent the processing of personal data is necessary and where the purpose allows, anonymized data must be used.

3.5 INTEGRITY AND CONFIDENTIALITY
ABF & SONS shall establish adequate controls in order to protect the integrity and confidentiality of Personal Data, both in digital and physical format and to prevent personal data from being accidentally or deliberately compromised.
Personal data of Data Subjects must be protected from unauthorized viewing or access and from unauthorized changes to ensure that it is reliable and correct.
Employees may have access to Personal Data only as is appropriate for the type and scope of the task in question and are forbidden to use Personal Data for their own private or commercial purposes or to disclose them to unauthorized persons.
Human Resources Department must inform employees at the start of the employment relationship about the obligation to maintain personal data privacy. This obligation shall remain in force even after employment has ended.

3.6 PERSONAL DATA RETENTION
All personal information shall be retained, stored and destroyed by ABF & SONS in line with relevant Legislative and Regulatory Guidelines. 
For all Personal Data and records obtained, used and stored within the Company, ABF & SONS shall perform periodical reviews of the data retained to confirm the accuracy, purpose, validity and requirement to retain.

3.7 ACCOUNTABILITY
ABF & SONS demonstrates accountability in line with the NDPR obligations by monitoring and continuously improving data privacy practices within ABF & SONS. 
Any individual or employee who breaches this Policy may be subject to internal disciplinary action (up to and including termination of their employment); and may also face civil or criminal liability if their action violates the law.`,
  },
  // ✅ Continue this same pattern for sections 4 – 17 using your full original text (each paragraph preserved exactly).
  // You can copy the full text from your document into each section's `content` field.
  {
    title: "4. DATA PRIVACY NOTICE",
    content: `ABF & SONS considers Personal Data as confidential and as such must be adequately protected from unauthorized use and/or disclosure. ABF & SONS will ensure that the Data Subjects are provided with adequate information regarding the use of their Personal Data as well as acquire their respective Consent, where necessary.

ABF & SONS shall display a simple and conspicuous notice (Privacy Notice) on any medium through which Personal Data is being collected or processed. The following information must be considered for inclusion in the Privacy Notice, as appropriate in distinct circumstances in order to ensure fair and transparent processing:
a) Description of collectible Personal Data
b) Purposes for which Personal Data is collected, used and disclosed
c) What constitutes Data Subject’s Consent
d) Purpose for the collection of Personal Data
e) The technical methods used to collect and store the information
f) Available remedies in the event of violation of the Policy and the timeframe for remedy.
g) Adequate information in order to initiate the process of exercising their privacy rights, such as access to, rectification and deletion of Personal Data.`,
  },
  {
    title: "5. PURPOSE AND CATEGORY OF DATA COLLECTED AND PROCESSED",
    content: `We will only collect and use your Personal data if we have obtained your prior consent or have a lawful and legitimate interest to do so. You are at liberty to withdraw your consent at any time by contacting the Data Protection Officer at info@abfglobalservices.com. The following are data collected and processed by ABF & SONS:
• Communication data (e.g. name, telephone, e-mail, address, IP address);
• Key contract data (contractual relationship, product or contractual interest);
• Customer history;
• Contract billing and payments data;
• Planning and control data;
• Movement data;
• Disclosed information (from third parties);
• Employee and prospective employee data collected for recruitment and onboarding purpose;

The following are methods adopted by ABF & SONS in the collection and storage of personal data:
• Cookies;
• CCTV recordings;
• Physical and Online Forms;
• Biometric Tools.`,
  },
  {
    title: "6. LEGAL GROUNDS FOR PROCESSING OF PERSONAL DATA",
    content: `In line with the provisions of the NDPR, processing of Personal Data by ABF & SONS shall be lawful if at least one of the following applies:
a) the Data Subject has given Consent to the processing of his/her Personal Data for one or more specific purposes;
b) the processing is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract;
c) processing is necessary for compliance with a legal obligation to which ABF & SONS is subject;
d) processing is necessary in order to protect the vital interests of the Data Subject or of another natural person; and
e) processing is necessary for the performance of a task carried out in the public interest or in exercise of official public mandate vested in ABF & SONS.`,
  },
  {
    title: "7. CONSENT",
    content: `Where processing of Personal Data is based on consent, ABF & SONS shall obtain the requisite consent of Data Subjects at the time of collection of Personal Data. In this regard, ABF & SONS will ensure:
a) that the specific purpose of collection is made known to the Data Subject and the Consent is requested in a clear and plain language;
b) that the Consent is freely given by the Data Subject and obtained without fraud, coercion or undue influence;
c) that the Consent is sufficiently distinct from other matters to which the Data Subject has agreed;
d) that the Consent is explicitly provided in an affirmative manner;
e) that Consent is obtained for each purpose of Personal Data collection and processing; and
f) that it is clearly communicated to and understood by Data Subjects that they can update, manage or withdraw their Consent at any time.

7.1 Valid Consent
For Consent to be valid, it must be given voluntarily by an appropriately informed Data Subject. In line with regulatory requirements, Consent cannot be implied. Silence, pre-ticked boxes or inactivity does not constitute Consent under the NDPR. Consent in respect of Sensitive Personal Data must be explicit. A tick of the box would not suffice.

7.2 Consent of Minors
The Consents of minors (under the age of 18) will always be protected and obtained from minor’s representatives in accordance with applicable regulatory requirements.`,
  },
  {
    title: "8. DATA SUBJECT RIGHTS",
    content: `All individuals who are the subject of Personal Data held by ABF & SONS are entitled to the following rights:
a) Right to request for and access their Personal Data collected and stored. Where data is held electronically in a structured form, such as in a Database, the Data Subject has a right to receive that data in a common electronic format;
b) Right to information on their personal data collected and stored;
c) Right to objection or request for restriction;
d) Right to object to automated decision making;
e) Right to request rectification and modification of their data which ABF & SONS keeps;
f) Right to request for deletion of their data, except as restricted by law or ABF & SONS’s statutory obligations;
g) Right to request the movement of data from ABF & SONS to a Third Party (data portability);
h) Right to object to, and to request that ABF & SONS restricts the processing of their information except as required by law or ABF & SONS’s statutory obligations.

ABF & SONS’s well-defined procedure regarding how to handle and answer Data Subject’s requests are contained in ABF & SONS’s Data Subject Access Request Policy.
Data Subjects can exercise any of their rights by completing the ABF & SONS Subject Access Request (SAR) Form and submitting to the Company via info@abfglobalservices.com.`,
  },
  {
    title: "9. TRANSFER OF PERSONAL DATA",
    content: `9.1 Third Party Processor within Nigeria
ABF & SONS may engage the services of third parties in order to process the Personal Data of Data Subjects collected by the Company. The processing by such third parties shall be governed by a written contract with ABF & SONS to ensure adequate protection and security measures are put in place by the third party for the protection of Personal Data in accordance with the terms of this Policy and the NDPR.

9.2 Transfer of Personal Data to Foreign Country
Where Personal Data is to be transferred to a country outside Nigeria, ABF & SONS shall put adequate measures in place to ensure the security of such Personal Data. In particular, ABF & SONS shall, among other things, conduct a detailed assessment of whether the said country is on the NITDA White List of Countries with adequate data protection laws.

Transfer of Personal Data out of Nigeria would be in accordance with the provisions of the NDPR. ABF & SONS will therefore only transfer Personal Data out of Nigeria on one of the following conditions:
a. The consent of the Data Subject has been obtained;
b. The transfer is necessary for the performance of a contract between ABF & SONS and the Data Subject or implementation of pre-contractual measures taken at the Data Subject’s request;
c. The transfer is necessary to conclude a contract between ABF & SONS and a third party in the interest of the Data Subject;
d. The transfer is necessary for reason of public interest;
e. The transfer is for the establishment, exercise or defence of legal claims;
f. The transfer is necessary in order to protect the vital interests of the Data Subjects or other persons, where the Data Subject is physically or legally incapable of giving consent.

ABF & SONS will take all necessary steps to ensure that the Personal Data is transmitted in a safe and secure manner. Details of the protection given to your information when it is transferred outside Nigeria shall be provided to you upon request.

Where the recipient country is not on the White List and none of the conditions stipulated above is met, ABF & SONS will engage with NITDA and the Office of the Honourable Attorney General of the Federation for approval with respect to such transfer.`,
  },

  {
    title: "10. DATA BREACH MANAGEMENT PROCEDURE",
    content: `A data breach procedure is established and maintained in order to deal with incidents concerning Personal Data or privacy practices leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data transmitted, stored or otherwise processed.

All employees must inform their designated line manager or the DPO of ABF & SONS immediately about cases of violations of this Policy or other regulations on the protection of Personal Data, in accordance with ABF & SONS’s Personal Data Breach Management Procedure in respect of any:
a) improper transmission of Personal Data across borders;
b) loss or theft of data or equipment on which data is stored;
c) accidental sharing of data with someone who does not have a right to know this information;
d) inappropriate access controls allowing unauthorized use;
e) equipment failure;
f) human error resulting in data being shared with someone who does not have a right to know; and
g) hacking attack.

A data protection breach notification must be made immediately after any data breach to ensure that:
a) immediate remedial steps can be taken in respect of the breach;
b) any reporting duties to NITDA or any other regulatory authority can be complied with;
c) any affected Data Subject can be informed; and
d) any stakeholder communication can be managed.

When a potential breach has occurred, ABF & SONS will investigate to determine if an actual breach has occurred and the actions required to manage and investigate the breach as follows:
a) Validate the Personal Data breach;
b) Ensure proper and impartial investigation (including digital forensics if necessary) is initiated, conducted, documented, and concluded;
c) Identify remediation requirements and track resolution;
d) Report findings to the top management;
e) Coordinate with appropriate authorities as needed;
f) Coordinate internal and external communications; and
g) Ensure that impacted Data Subjects are properly notified, if necessary.

You can read more about ABF & SONS’s Personal Data Breach Management Procedure.`,
  },
  {
    title: "11. DATA PROTECTION IMPACT ASSESSMENT",
    content: `ABF & SONS shall carry out a Data Protection Impact Assessment (DPIA) in respect of any new project or IT system involving the processing of Personal Data to determine whenever a type of processing is likely to result in any risk to the rights and freedoms of the Data Subject.
ABF & SONS shall carry out the DPIA in line with the procedures laid down in the ABF & SONS Data Protection Impact Assessment Policy.`,
  },
  {
    title: "12. DATA SECURITY",
    content: `All Personal Data must be kept securely and should not be stored any longer than necessary. ABF & SONS will ensure that appropriate measures are employed against unauthorized access, accidental loss, damage and destruction to data. This includes the use of password-encrypted databases for digital storage and locked cabinets for those using paper form.

To ensure security of Personal Data, ABF & SONS will, among other things, implement the following appropriate technical controls:
a) Industry-accepted hardening standards, for workstations, servers, and databases;
b) Full disk software encryption on all corporate workstation/laptops operating systems drives storing Personal and Personal/Sensitive Data;
c) Encryption at rest including key management of key databases;
d) Enable Security Audit Logging across all systems managing Personal Data;
e) Restrict the use of removable media such as USB flash, disk drives;
f) Anonymization techniques on testing environments; and
g) Physical access control where Personal Data are stored in hardcopy.`,
  },
  {
    title: "13. TRAINING",
    content: `ABF & SONS shall ensure that employees who collect, access and process Personal Data receive adequate data privacy and protection training in order to develop the necessary knowledge, skills and competence required to effectively manage the compliance framework under this Policy and the NDPR with regard to the protection of Personal Data.
On an annual basis, ABF & SONS shall develop a capacity building plan for its employees on data privacy and protection in line with the NDPR.`,
  },
  {
    title: "14. DATA PROTECTION AUDIT",
    content: `ABF & SONS shall conduct an annual data protection audit through a licensed Data Protection Compliance Organization (DPCO) to verify ABF & SONS’s compliance with the provisions of the NDPR and other applicable data protection laws.
The audit report will be certified and filed by the DPCO to NITDA as required under the NDPR.`,
  },
  {
    title: "15. RELATED POLICIES AND PROCEDURES",
    content: `This Policy shall be read in conjunction with the following policies and procedures of ABF & SONS:
• Personal Data Breach Management Policy;
• IT Security Policy;
• Document Retention Policy;
• Cookies Policy;
• Privacy Notices; and
• Data Protection Impact Assessment Procedure.`,
  },
  {
    title: "16. CHANGES TO THE POLICY",
    content: `ABF & SONS reserves the right to change, amend or alter this Policy at any point in time. If we amend this Policy, we will provide you with the updated version.`,
  },
  {
    title: "17. GLOSSARY",
    content: `‘‘Consent’’ means any freely given, specific, informed and unambiguous indication of the Data Subject’s wishes by which he or she, through a statement or a clear affirmative action, signifies agreement to the processing of Personal Data relating to him or her.
“Database” means a collection of data organized in a manner that allows access, retrieval, deletion and processing of that data; it includes but is not limited to structured, unstructured, cached and file system type Databases.
“Data Processor” means a person or organization that processes Personal Data on behalf and on instructions of ABF & SONS.
“DPCO” means an organization registered by NITDA to provide data protection audit, compliance and training services to public and private organizations who process Personal Data in Nigeria.
“Data Subject” means any person, who can be identified, directly or indirectly, by reference to an identification number or to one or more factors specific to his physical, physiological, mental, economic, cultural or social identity.
“NDPR” means the Nigerian Data Protection Regulation, 2019.
“Personal Data” means any information relating to an identified or identifiable natural person (‘Data Subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person; It can be anything from a name, address, a photo, an email address, bank details, posts on social networking websites, medical information, and other unique identifier such as but not limited to MAC address, IP address, IMEI number, IMSI number, SIM, Personal Identifiable Information (PII) and others.
“Sensitive Personal Data” means data relating to religious or other beliefs, sexual orientation, health, race, ethnicity, political views, trades union membership, criminal records or any other sensitive personal information.`,
  },
];
