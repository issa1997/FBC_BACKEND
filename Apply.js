import nodemailer from "nodemailer";

const ApplyEmail = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

const ApplyEmailSender = ({
  firstName,
  lastName,
  middleName,
  address,
  address2,
  city,
  state,
  zip,
  country,
  phone,
  email,
  skype,
  nextOfKinName,
  nextOfKinRelationship,
  nextOfKinContactDetails,
  familyBackground,
  fullTime,
  workShift,
  currentlyEmployed,
  bpoExperience,
  marketsServed,
  inboundOrOutbound,
  channels,
  language,
  fluentLanguage,
  currentSalary,
  expectedSalary,
  ooklaSpeedTest,
  internetServiceProviderName,
  internetServiceProviderUploadSpeed,
  internetServiceProviderDownloadSpeed,
  workSpace,
  brandModelMake,
  processor,
  memory,
  refereeName,
  refereeRole,
  refereeContactNumber,
  refereeEmail,
  referredBy,
  referredById,
  resume,
  consent,
}) => {
  const options = {
    from: `FBC ASIA<${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Email from FBC ASIA",
    html: `
            <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
            <div style="max-width: 700px; background-color: white; margin: 0 auto">
            <div style="width: 100%; background-color: #FF731D; padding: 20px 0">
            <a href="${process.env.CLIENT_URL}" style=" text-decoration: none;">
            <p style="color:white; font-size:2rem; text-align:center; font-weight: 800;">FBC ASIA</p>
            </a> 
            
            </div>
            <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                <p style="font-weight: 800; font-size: 16px; padding: 0 30px">
                 ${firstName} ${middleName} ${lastName} has been applied for a job. 
                </p>
                <div style="font-size: .8rem; margin: 0 30px">
                <p>First Name: <b>${firstName}</b></p>
                <p>Middle Name: <b>${middleName}</b></p>
                <p>Last Name: <b>${lastName}</b></p>
                <p>Address: <b>${address}</b></p>
                <p>Address 2: <b>${address2}</b></p>
                <p>City: <b>${city}</b></p>
                <p>State: <b>${state}</b></p>
                <p>Zip: <b>${zip}</b></p>
                <p>Country: <b>${country}</b></p>
                <p>Phone: <b>${phone}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Skype: <b>${skype}</b></p>
                <p>Next of Kin - Name: <b>${nextOfKinName}</b></p>
                <p>Next of Kin - Relationship: <b>${nextOfKinRelationship}</b></p>
                <p>Next of Kin - Contact Details: <b>${nextOfKinContactDetails}</b></p>
                <p>Family Background: <b>${familyBackground}</b></p>
                <p>Full Time: <b>${fullTime}</b></p>
                <p>Work Shift: <b>${workShift}</b></p>
                <p>Currently Employed: <b>${currentlyEmployed}</b></p>
                <p>BPO Experience: <b>${bpoExperience}</b></p>
                <p>Markets Served: <b>${marketsServed}</b></p>
                <p>Inbound or Outbound: <b>${inboundOrOutbound}</b></p>
                <p>Channels: <b>${channels}</b></p>
                <p>Language: <b>${language}</b></p>
                <p>Fluent Language: <b>${fluentLanguage}</b></p>
                <p>Current Salary: <b>${currentSalary}</b></p>
                <p>Expected Salary: <b>${expectedSalary}</b></p>
                <p>Ookla Speed Test: <b>${ooklaSpeedTest}</b></p>
                <p>Internet Service Provider Name: <b>${internetServiceProviderName}</b></p>
                <p>Internet Service Provider Upload Speed: <b>${internetServiceProviderUploadSpeed}</b></p>
                <p>Internet Service Provider Download Speed: <b>${internetServiceProviderDownloadSpeed}</b></p>
                <p>Work Space: <b>${workSpace}</b></p>
                <p>Brand Model Make: <b>${brandModelMake}</b></p>
                <p>Processor: <b>${processor}</b></p>
                <p>Memory: <b>${memory}</b></p>
                <p>Referee Name: <b>${refereeName}</b></p>
                <p>Referee Role: <b>${refereeRole}</b></p>
                <p>Referee Contact Number: <b>${refereeContactNumber}</b></p>
                <p>Referee Email: <b>${refereeEmail}</b></p>
                <p>Referred By: <b>${referredBy}</b></p>
                <p>Referred By Id: <b>${referredById}</b></p>
                <p>Resume: <b>${resume}</b></p>
                <p>Consent: <b>${consent}</b></p>
                </div>
            </div>
            </div>
        </div>
            `,
  };
  ApplyEmail(options);
};

export default ApplyEmailSender;
