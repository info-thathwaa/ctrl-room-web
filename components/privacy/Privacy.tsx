"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";

const Privacy = () => {
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
          <h1 className="text-3xl md:text-[42px] font-bold text-[#03353B] leading-tight">
            Privacy Policy
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-12 md:gap-16">
        {/* Section 1: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-[20px] font-medium text-[#03353B] leading-[1.8] text-justify md:text-left">
            Aegis.Inc. (referred as “us”, “we” or “AEGIS” in document below)
            assures its customers and users with the security in handling their
            personal information. This Privacy policy will describe on how we
            collect data and how this private information is secured with us.
            This privacy policy will refer its Android, iOS & Webapp product as
            “AEGIS ManagerApp” , “AEGIS StaffApp” , “AEGIS webManagerApp” ,
            “AEGIS webAdminApp” as individual product whenever necessary. This
            Privacy Policy does not extend to third party websites or services.
            AEGIS is therefore not liable for their privacy policies, procedures
            and practices regarding the protection of personal information.
            Visiting us at{" "}
            <a
              href="https://www.aegis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#03353B] font-semibold"
            >
              www.Aegis.com
            </a>{" "}
            website and using its Android, iOS & Webapp or when you contact us
            by mail, you accept the terms and conditions of this Privacy Policy.
            AEGIS ManagerApp & AEGIS StaffApp is not accessible to general
            public unless we authorize a security company to do so. Please
            Request for a demo if you wish to check the app along a minor
            training.
          </p>
        </motion.div>

        {/* Section 2: Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold text-[#03353B] leading-tight">
            Our Business Model With Your Organisation?
          </h2>
          
          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8]">
            <p>
              AEGIS has an agreement with your company where in your information is directly held by the employer and your employer grants managers and guard access to AEGIS products.
            </p>
            <p>
              The User information sent to our servers is then used to “schedule” a “guard” over a “site” and its GPS co-ordinates are used to determine the location of guard on duty at that site. Below is small diagram to elaborate the user model. User model specifically depicts that Security Company/your employer will be able to add any individual designated as “managers” in our system whose information is not directly accessible to us unless required for debugging. All Managers will then have direct control over information of any site or guards which will be used for scheduling. Your employer entered an agreement with us before “they” entered any information in our system.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Collected Info & Use */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-semibold text-[#03353B] leading-tight">
            The Information We Collect & How We Use It
          </h2>

          <div className="flex flex-col gap-6 text-[16px] font-normal text-[#3C3C3C] leading-[1.8]">
            <p>
              Information you provide & information provided by your employer into our system A Security company when enters into an agreement with us provides there information (namely Company name, Address, Logo, phone no. & email) which is entered into the system to start a contract with us
            </p>
            <p>
              A Manager is hence entered into our system via Company admin/your employer and information includes concerned managers name, address, profile photo, phone no. & Email .We can access its information to debug or help the user to enhance the experience when a ticket is generated with us. A Manager also adds a site along with geofencing, address, site supervisor and client’s mail and contact info. Also manager can add a security guard using his personal and contact details in AEGIS ManagerApp using guard name, photo, address, and their security licence details. A Security Guard can request to update his information via the AEGIS StaffApp which is entered into our system by their concerned manager using AEGIS ManagerApp or webManagerApp.
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              Information Collected by AEGIS products (both fed by user or automatically collected)
            </p>
            <p>
              <strong>Phone:</strong> AEGIS ManagerApp & StaffApp will direct the call functionality to your default phone dialer app to make outbound calls when user will click on phone call action of concerned person. We do not provide VOIP service and hence this functionality was directed to handset’s dialer.There is no call recording made during this functionality and hence user is liable for any call charges on their own.
            </p>
            <p>
              <strong>Location:</strong> AEGIS StaffApp will take your current coordinates repeatedly when you start a duty which will be updated in our system (till the end of duty or user logout of app) to ensure tracking status to your concerned manager (which managers can view in AEGIS ManagerApp or webManagerApp) .This service uses Google location services to ensure your safety to your employer. AEGIS ManagerApp however do not send any coordinate to our server but it uses web socket to fetch the track history maintained in our system related to status of the guard.
            </p>
            <p>
              <strong>Camera:</strong> All AEGIS product need access to camera for taking pictures of person, incidents or any kind of reports to be submitted to client or company. Managers and guards require it for specific purposes while using different features of the AEGIS system.
            </p>
            <p>
              <strong>Storage:</strong> All AEGIS product needs access to storage to upload any photo or file attachment in our system from the storage as an extra option. This enables users to easily access the images in memory to be attached where ever necessary. We always crop and compress the pics in storage to keep the system fast for users
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              How We Use this information
            </p>
            <p>
              AEGIS webAdminApp creates the manager who will in turn create guards . Manager and guards can access respective info from mobile phones via respective native Android or iOS app. AEGIS StaffApp uses GPS location constantly while on-duty and this information is recorded in our system to show the tracks to concerned managers. All the information provided by the company or user is kept under concerned managers and admins of the company using encryption AEGIS may use your personal information to provide support and communicate with user regarding any app crash or any kind of assistance to the user. Most of information produced is used to maintain internal records of the company.
            </p>
            <p>
              Your information is stored and processed in countries where we have facilities or where we provide services. By using this app, your consent to transfer information in that country which may be different from your country is given to us. AEGIS will maintain all user records in system as long as they are required by laws , regulations , or government orders
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              Payment methods:
            </p>
            <p>
              No payment method is included in AEGIS ManagerApp or AEGIS StaffApp but there is billing section in AEGIS webAdminApp which depicts the usage over the time-period to the company. The refund policy and payment methods are written and accepted by the concerned company at time of signing of contract.
            </p>
            <p>
              AEGIS and its products are not liable for real world mishappening on site or to the users.
            </p>
            <p>
              GPS is not most efficient in all the Android & iOS devices but we keep on improving the methods as available to us. We do not ensure the coordinates of guard as this is dependent on the user device.
            </p>
            <p>
              <strong>Right to close account without cause:</strong> AEGIS holds every right to close the user account (company account, manager account , guard account) at any given point without notice if circumstance occurs or any violation to the contract is observed between both parties
            </p>
            <p>
              Terms remain valid even after close of agreement with your company.
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              Right to Update/Change agreement:
            </p>
            <p>
              AEGIS holds full right to update this privacy policy from time to time to introduce changes in technologies we use, legal requirements or any other factors. The updation date will be mentioned next to the title of this page. To revoke your access from the App, users require to connect with concerned manager in hierarchy to stop the services. If there is any major update in privacy policy, then we are obliged to intimate the user by mail as per law.
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              Third party information exchange:
            </p>
            <p>
              No information is shared with any third party except within the AEGIS trust and development modules. No third party will have access to the application without the credentials. Data is not visible from one company in contract with us to another company.
            </p>
            
            <p className="font-semibold text-[#03353B] mt-2">
              User Rights:
            </p>
            <p>
              Users of all our products are always kept in mind in making our software to use as easy as possible. A similar training session enhances users to use the product. At times, we use online tutorials to impart the knowledge of our product to other. Any queries are always welcome for all users.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
