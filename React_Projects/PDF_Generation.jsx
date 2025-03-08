import { useState } from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  return (
    <div className="p-4 text-center">
      <input className="border p-2" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 ml-2" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)} />
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              <Text>Name: {name}</Text>
              <Text>Job Title: {jobTitle}</Text>
            </Page>
          </Document>
        }
        fileName="resume.pdf"
      >
        {({ loading }) => (loading ? "Loading PDF..." : "Download Resume")}
      </PDFDownloadLink>
    </div>
  );
}
