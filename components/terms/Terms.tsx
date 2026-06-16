"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Top Heading Section */}
      <div className="relative w-full h-[282px] bg-[#F2F3F6] flex flex-col justify-end items-center pb-10">
        <Header variant="transparent" logo="solid" />

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center px-4 z-20"
        >
          <h1 className="text-3xl md:text-[42px] font-bold leading-tight">
            Terms and Conditions
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-12 md:gap-16">
        {/* Section 1: Our commitment to data privacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            Our commitment to data privacy
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              At Ctrl Room, maintaining the privacy and security of your personal data is one of our key priorities. We understand the great responsibility that comes with looking after your data and we have implemented stringent privacy and security measures to ensure that your data is safely stored and securely managed. If you are curious to know more, please read through these helpful FAQs to stay informed about why your data is secure with Ctrl Room.
            </p>
          </div>
        </motion.div>

        {/* Section 2: FAQs Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 w-full max-w-[900px] mx-auto mt-6"
        >
          <h2 className="text-3xl md:text-[40px] font-semibold text-center text-[#0A0A0A] leading-tight">
            FAQs
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="faq-1"
              className="border border-[#E5E7EB] rounded-lg bg-white px-6 py-2 transition-all duration-200"
            >
              <AccordionTrigger className="text-base md:text-[18px] font-semibold text-[#0A0A0A] data-[state=open]:text-[#03353B] hover:no-underline py-4">
                Are there laws that protect the privacy of Ctrl Room's customer data?
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#3C3C3C] font-normal leading-[1.8] pt-2 pb-6 text-justify md:text-left">
                Yes! There are several of them and a detailed discussion of each regulation is beyond the scope of this article. Some of the big ones you may have heard of are the General Data Protection Regulation (GDPR) which applies to the European Union and European Economic Area; the California Consumer Privacy Act (CCPA) which applies to customers and users in California; and the Privacy Act of 1988 which applies to Australian customers and users. These laws have lots of similarities and some differences. For purposes of this FAQ, we will focus on the GDPR.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="border border-[#E5E7EB] rounded-lg bg-white px-6 py-2 transition-all duration-200"
            >
              <AccordionTrigger className="text-base md:text-[18px] font-semibold text-[#0A0A0A] data-[state=open]:text-[#03353B] hover:no-underline py-4">
                What is the GDPR?
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#3C3C3C] font-normal leading-[1.8] pt-2 pb-6 text-justify md:text-left">
                The General Data Protection Regulation (GDPR) is a comprehensive data privacy law enacted by the European Union (EU) that regulates how organizations collect, store, manage, and protect the personal data of individuals within the EU and EEA. It grants individuals significant control over their personal information and imposes strict obligations on businesses that handle such data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="border border-[#E5E7EB] rounded-lg bg-white px-6 py-2 transition-all duration-200"
            >
              <AccordionTrigger className="text-base md:text-[18px] font-semibold text-[#0A0A0A] data-[state=open]:text-[#03353B] hover:no-underline py-4">
                What is personal data?
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#3C3C3C] font-normal leading-[1.8] pt-2 pb-6 text-justify md:text-left">
                Personal data refers to any information relating to an identified or identifiable natural person. This includes obvious identifiers like names, email addresses, phone numbers, and physical addresses, as well as digital markers such as IP addresses, location data (like GPS coordinates used for on-duty security tracking), and device identification details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-4"
              className="border border-[#E5E7EB] rounded-lg bg-white px-6 py-2 transition-all duration-200"
            >
              <AccordionTrigger className="text-base md:text-[18px] font-semibold text-[#0A0A0A] data-[state=open]:text-[#03353B] hover:no-underline py-4">
                What are my rights with respect to my personal data?
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#3C3C3C] font-normal leading-[1.8] pt-2 pb-6 text-justify md:text-left">
                Under data protection regulations like the GDPR, you have several key rights. These include the right to access the personal data we hold about you, the right to request rectification of inaccurate data, the right to request erasure of your data ("the right to be forgotten"), the right to restrict or object to certain processing activities, and the right to data portability. You can exercise these rights by contacting your organization's administrator or our support team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Section 3: The Right Of Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            The Right Of Access To Personal Information We Hold About You.
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              The right to know what personal information we collect about you, and how it is used and shared.
            </p>
            <p>
              The right of rectification to update your personal information if it is inaccurate or incomplete.
            </p>
            <p>
              The right to erasure/deletion (‘right to be forgotten’) of your personal information.
            </p>
            <p>
              The right to object to our use and handling of your personal information.
            </p>
            <p>
              The right to restrict our handling of your personal information.
            </p>
            <p>
              The right of data portability for transfer of your personal information to another party.
            </p>
            <p>
              The right to withdraw consent you have previously provided.
            </p>
            <p>
              Please note that in order to verify your request or the applicability of any of these rights to your circumstances, we may ask you for further information and to verify your identity before responding.
            </p>
          </div>
        </motion.div>

        {/* Section 4: What Kind Of Personal Data Does Ctrl Room Collect? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            What Kind Of Personal Data Does Ctrl Room Collect?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Ctrl Room collects several types of personal data in order to provide best in class workforce management software to our customers, including but not limited to:
            </p>
          </div>
        </motion.div>

        {/* Section 5: Information Type */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            Information Type
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <div>
              <span className="text-[14px] font-medium text-zinc-500 block mb-1">
                Examples
              </span>
              <p>
                Profile information - This information is provided by you at signup and may include name, contact details, date of birth, gender, and photo Financial information - This is information you provide that allows us to charge you for services and may include bank information, credit card details, transaction history, and other billing information
              </p>
            </div>
            <p>
              Employment information - This may include your employees' rosters, timesheets, pay information, positions or job functions, and other information about their employment
            </p>
            <p>
              Sensitive information - This may include biometric information you or your employees' provide to Ctrl Room if your instance of the service has a "kiosk" (iPad) device and facial or voice recognition features enables
            </p>
          </div>
        </motion.div>

        {/* Section 6: As An Employer, How Do I Delete An Employee Account? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            As An Employer, How Do I Delete An Employee Account?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              You can only delete an employee if the employee has been archived first. To archive an employee, you must ensure that they do not have any outstanding timesheets to be approved, or shifts that need to be worked. For more information about archiving and unarchiving employees, check out our help guide{" "}
              <a href="#" className="hover:underline text-[#03353B] font-semibold">
                here
              </a>
              . For specific instructions on how to delete an employee's account please see our{" "}
              <a href="#" className="hover:underline text-[#03353B] font-semibold">
                Help Docs
              </a>
              .
            </p>
          </div>
        </motion.div>

        {/* Section 7: Who Can Delete An Employee's Ctrl Room Account? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            Who Can Delete An Employee's Ctrl Room Account?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Only System Administrators can delete accounts.
            </p>
          </div>
        </motion.div>

        {/* Section 8: When I Delete An Account, How Much Data Is Deleted? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            When I Delete An Account, How Much Data Is Deleted?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              All data associated with that account is deleted including contact details, previous timesheets, shifts, tasks, journals, employment terms.
            </p>
          </div>
        </motion.div>

        {/* Section 9: Can I Recover A Deleted Account? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            Can I Recover A Deleted Account?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              No, once an account is deleted it cannot be recovered.
            </p>
          </div>
        </motion.div>

        {/* Section 10: How Does Ctrl Room Keep My Personal Data Secure? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            How Does Ctrl Room Keep My Personal Data Secure?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Ctrl Room uses industry leading technical and organizational measures to secure the physical and electronic information we store. For more information about Ctrl Room's security measures, visit our{" "}
              <a href="#" className="hover:underline text-[#03353B] font-semibold">
                Security page
              </a>
              . Please note no security system is impenetrable and due to the inherent nature of the Internet, we cannot guarantee that information, during transmission through the Internet or while stored on our systems or otherwise in our care, is absolutely safe.
            </p>
          </div>
        </motion.div>

        {/* Section 11: How Long Does Ctrl Room Retain My Personal Data? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            How Long Does Ctrl Room Retain My Personal Data?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Your personal data will be retained for only the period that is necessary according to the purpose it was originally collected for, to fulfill the purpose outlined in our{" "}
              <a href="/privacy" className="hover:underline text-[#03353B] font-semibold">
                Privacy Policy
              </a>
              , or to meet legislative or regulatory obligations, such as financial reporting requirements. After it is determined that your personal data reaches the end of its retention period, we will either delete or anonymize your information or, if this is not possible then we will securely store your information and isolate it from any further use until deletion is possible.
            </p>
          </div>
        </motion.div>

        {/* Section 12: Where Does Ctrl Room Process Or Transfer My Personal Data? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A]">
            Where Does Ctrl Room Process Or Transfer My Personal Data?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              If you are based within the UK/EU we will only process and/or transfer data outside of the European Economic Area or EEA (i.e. the Member States of the European Union, together with Norway, Iceland and Liechtenstein) where it is compliant with the GDPR and the means of transfer provides adequate safeguards in relation to your personal information, including for example:
            </p>
            <p>
              By way of a data transfer agreement with your employer organization, incorporating the current standard contractual clauses adopted by the European Commission for the transfer of personal information by controllers in the EEA to controllers and processors in jurisdictions without adequate data protection laws; or By way of a data transfer agreement with a third party, incorporating the current standard contractual clauses adopted by the European Commission for the transfer of personal information by controllers in the EEA to controllers and processors in jurisdictions without adequate data protection laws; or By transferring your personal information to a country where there has been a finding of adequacy by the European Commission in respect of that country's levels of data protection via its legislation; or Where it is necessary for the conclusion or performance of a contract between Ctrl Room and a third party and the transfer is in your interests for the purposes of that contract (for example, if we need to transfer your personal information to a benefits provider based outside the EEA); or Where you have consented to the data transfer.
            </p>
          </div>
        </motion.div>

        {/* Section 13: SERVICE AGREEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A] uppercase">
            SERVICE AGREEMENT
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              <strong>Software.</strong> Ctrl Room grants to the Clients, subject to the terms and conditions set forth, a non-exclusive, worldwide, non-transferable, license to use the Software in its operations.
            </p>
            <p>
              <strong>Non-Ownership.</strong> Except as expressly provided, nothing is construed to confer any ownership interest, license or other rights upon Client by implication, estoppel or otherwise as to any technology, intellectual property rights, products of Ctrl Room or any other entity.
            </p>
            <p>
              <strong>Term.</strong> The grant of the License is for Initial License Term beginning from the Effective Date, and then automatically continuing on the same mutually aligned basis, unless either party elects against the continuance.
            </p>
            <p>
              <strong>Termination.</strong> Both Parties (Ctrl Room or the Client) may terminate the service agreement, the communications by either party shall be sent by way of overnight mail or electronic mail (unless otherwise specified herein) at least thirty (30) days prior to the next billing date.
            </p>
            <p>
              <strong>Training.</strong> Ctrl Room provides one (1) full-day training session to Client’s employees on the use of the Software, on a mutually-agreed-upon day and time between the Parties.
            </p>
            <p>
              <strong>Full Agreement.</strong> The written provisions of the Service Agreement shall constitute the full extent of the understanding between the Parties that supersedes and fully replaces any and all oral agreements or understandings which may presently or thereafter exist between the Parties.
            </p>
            <p>
              <strong>Binding.</strong> The Settlement Agreement shall be binding upon and shall inure to the benefit of the Parties and their respective successors and assigns.
            </p>
            <p>
              <strong>Severability.</strong> If any part of the Agreement is declared unenforceable or invalid, the remainder will continue to be valid and enforceable.
            </p>
            <p>
              <strong>Laws.</strong> The Agreement shall be governed by and construed in accordance with the internal laws of the Province of British Columbia without reference to any conflicts of law provisions.
            </p>
            <p>
              <strong>Force Majeure.</strong> Either Party shall be excused from performance and shall not be in default in respect of any obligation hereunder to the extent that the failure to perform such obligation is due to a Force Majeure Event.
            </p>
            <p>
              <strong>Modification.</strong> The Agreement represents the complete understanding between the Parties relating to the subject matter hereof, and may not be terminated, modified, amended or revoked in whole or in part, except by an instrument in writing duly executed by the Parties.
            </p>
            <p>
              <strong>Counterparts.</strong> The Agreement may be executed in counterparts, each of which shall be deemed to be an original but all of which together shall constitute one and the same instrument. Facsimile, photocopy, scanned copy and/or PDF signatures shall be valid as originals.
            </p>
            <p>
              <strong>Acts of God.</strong> Neither of the Parties will be responsible for delays or failures in performance resulting from causes beyond the reasonable control of such Party and without the fault or negligence of the Party claiming excusable delay or failure, provided that such Party uses reasonable efforts to correct such delay or failure. This Section will not apply to excuse a delay or failure to make any payment when due.
            </p>
            <p>
              <strong>Interpretation.</strong> The language of all parts of the Agreement shall in all cases be construed as a whole, according to its fair meaning, and not for or against any of the Parties.
            </p>
            <p>
              <strong>Time.</strong> The Parties agree that time is of the essence.
            </p>
            <p>
              <strong>Waiver.</strong> Any delay or omission in the enforcement of any right or remedy arising under this Agreement shall not be deemed a waiver of such right or remedy.
            </p>
            <p>
              <strong>Authority.</strong> Each person executing this Settlement Agreement on behalf of any Party represents and warrants that he/she has the authority to execute this Settlement Agreement, that he/she has been fully empowered to execute this Settlement Agreement, and that all necessary action for the execution of this Settlement Agreement has been taken.
            </p>
            <p>
              <strong>Notice.</strong> All notices, requests or other communications to any party hereunder shall be sent by way of overnight mail or electronic mail (unless otherwise specified herein).
            </p>
            <p>
              <strong>No Assignment.</strong> Neither Party will assign or transfer any rights or obligations under this Agreement without the prior written consent of the other Party, which consent shall not be unreasonably withheld. However, Client may assign this Agreement in the case of a merger, acquisition, consolidation or reorganization only with the prior written authorization of Ctrl Room.
            </p>
          </div>
        </motion.div>

        {/* Section 14: TERMS & CONDITIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A] uppercase">
            TERMS & CONDITIONS
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              <strong>No Liability.</strong> Ctrl Room is not liable with respect to any subject matter under any contract, negligence, strict liability or other legal or equitable theory for (a) any indirect, incidental, consequential or punitive damages or lost profits or (b) cost of procurement of substitute goods, technology or services.
            </p>
            <p>
              <strong>Indemnification.</strong> Client shall indemnify, defend and hold harmless Ctrl Room and its current and former directors, governing board members, trustees, officers, faculty, medical and professional staff, employees, students and agents and their respective successors, heirs and assigns (the “Indemnitees”) from and against any claim, liability, cost, expense, damage, deficiency, loss or obligation of any kind or nature (including reasonable attorneys’ fees and other costs and expenses of litigation) based upon, arising out of or otherwise relating to this Agreement, including any cause of action relating to product liability concerning any product, process or service made, used, sold or performed pursuant to any right or license granted under this Agreement (collectively “Claims”). Neither Client nor Ctrl Room shall settle any Claim without the prior written consent of the other, which consent shall not be unreasonably withheld.
            </p>
            <p>
              <strong>Attorney Fees.</strong> Client shall, at its own expense, provide attorneys reasonably acceptable to Ctrl Room to defend against any actions brought or filed against any Indemnitee hereunder with respect to the subject of indemnity contained herein, whether or not such actions are rightfully brought.
            </p>
            <p>
              <strong>Confidential Information.</strong> "Confidential Information" is information provided by one party (“Discloser”) to the other party (“Recipient”) that is either (a) disclosed orally, visually or in writing and is clearly marked or identified as proprietary or confidential at the time of disclosure; (b) disclosed under conditions or is of such a nature that would reasonably be deemed confidential or proprietary by the Discloser; or (c) acquired while accessing a Party’s site or facility. Confidential Information includes, without limitation, all information relating to existing and potential customers, suppliers, markets, contracts, prices, products, personnel, strategies, policies, systems, procedures, technologies, know-how, data, processes, inventions, research, developments, formulations, applications, methods of manufacture and any other proprietary information of either Party or any of its affiliates.
            </p>
            <p>
              <strong>Confidentiality and Non-Use.</strong> The Parties may use the Confidential Information solely for the Purpose. Recipients will take commercially reasonable precautions to prevent the unauthorized disclosure or use of the Confidential Information. Except as authorized in this Agreement, Recipient will not disclose such Confidential Information to any third party and will not use such Confidential Information to compete with or adversely affect the business or operations of the other Party hereto or its affiliates or those doing business with them. Either Party may disclose Confidential Information to such of its directors, officers and agents and its affiliates (“Representative(s)”) who need to know the Confidential Information in connection with the Purpose, so long as such Representatives agree to be bound by terms no less restrictive than those set forth herein and notifies such Representative of the existence of the confidentiality obligations under this Agreement. Each Party will be responsible for any breach of this Agreement by any Representative. If Recipient has knowledge of the use or disclosure of Confidential Information received from Discloser in a manner that is not permitted under this Agreement, Recipient will give Discloser prompt written notice of the non-complying use or disclosure and will reasonably cooperate with Discloser to regain possession of any Confidential Information improperly delivered and prevent the further unauthorized disclosure or use of that Confidential Information. In the event Recipient receives materials as part of a disclosure, Recipient will not reverse engineer the materials.
            </p>
            <p>
              <strong>Exclusions.</strong> The obligations of confidentiality and non-use set forth herein will not apply when and to the extent that Confidential Information provided to Recipient is (a) in the public domain through no act or failure to act of Recipient; (b) shown by Recipient to have been in its possession at the time of disclosure and was not acquired directly or indirectly from Discloser; (c) obtained by the Recipient from a third party, provided that such third party had no obligation of confidentiality to the Discloser; (d) independently derived by Recipient without use of or access to the Confidential Information provided by Discloser; or (e) ordered by a court of competent jurisdiction to be disclosed, but only after Discloser has been given prior notice of such order in a timely fashion to allow for an objection to be made or protection obtained.
            </p>
          </div>
        </motion.div>

        {/* Section 15: COMMERCIALS & REFUND POLICY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A] uppercase">
            COMMERCIALS & REFUND POLICY
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              <strong>Consideration.</strong> Client agrees to pay a fixed monthly license fee Monthly Subscription Amount, plus applicable taxes, for the use of the Software ("Monthly License Fee").
            </p>
            <p>
              <strong>Variable Active Guard Fee.</strong> In case the Client needs to schedule more workforce than the aligned Daily Active Users (DAUs), then the Variable Active Guard Fee is charged at the rate of $2/Guard/Day. The Client can alternatively choose to increase the number of aligned Daily Active Users (DAUs).
            </p>
            <p>
              <strong>Due Date.</strong> The Monthly License Fee is due and payable by or on the Effective Date day of each month, for the each upcoming month the Software is licensed under this Agreement. First month fee is due on the Effective Date.
            </p>
            <p>
              <strong>Late Fee.</strong> A 7% late fee will be applied, compounding every 30 days, to any amounts of the Monthly License Fee that is late in payment.
            </p>
            <p>
              <strong>Currency.</strong> All payments due under this Agreement will be paid in USD until unless specified.
            </p>
            <p>
              <strong>Refund.</strong> The fee shall not be adjusted at termination of the agreement, towards the Pre-Closing Refund, and as of the closing the Pre-Closing Refund Amount shall be zero.
            </p>
          </div>
        </motion.div>

        {/* Section 16: SHIPPING POLICY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#0A0A0A] uppercase">
            SHIPPING POLICY
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              <strong>Products.</strong> This includes but is not limited to items such as NFC tags. The products are non returnable or non refundable.
            </p>
            <p>
              <strong>Shipping.</strong> The products are shipped to the clients upon receipt of the order. The aligned cost of the product and delivery is charged before the products are shipped. The shipment is sent via normal post unless otherwise aligned separately.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
