const MAIL_SERVER_URI = "http://localhost:8000/mail-sender";

const sendSelectionEmail = async () => {
  const email = "webtechradar@gmail.com";
  const applicantName = "Demo";
  const formNumber = "GGV125355";
  const totalMarks = "120";

  if (!email || !email.includes("@")) {
    console.error(`Invalid email for entry : ${email}`);
    return;
  }
  try {
    const response = await fetch(MAIL_SERVER_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: `${email}`,
        subject: "Admission Confirmation and Counseling Details",
        html: `
            <h3>Dear ${applicantName}</h3>,

            Congratulations! We are delighted to inform you that you have been selected for admission to the MCA program at Guru Ghasidas Vishwavidyalaya (GGV).

            To complete the admission process, please attend the counseling session scheduled for 12-02-2025 at 10:00 AM, held at the CSIT department. Kindly bring all the required documents for verification as mentioned in the admission guidelines. Please also ensure you have your form number (${formNumber}) and CUET Makrks (${totalMarks}) ready for reference.
            <br/>
            <br/>
            <b>Warm regards</b>,  
            CSIT Department  <br/>
            Guru Ghasidas Vishwavidyalaya `,
      }),
    });
    const result = await response.json();
    console.log("Email sent successfully!", result);
  } catch (error) {
    console.log("Failed to send email.", error);
  }
};

export default sendSelectionEmail;
