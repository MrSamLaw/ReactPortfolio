import { useState } from "react";
import "./resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import SamLawResume from "../../assets/SamLaw-Resume.pdf";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume">
      <PageTitle heading="Resume" />
      <div className="resume-dl">
        <a href={SamLawResume} download="SamLaw-Resume">
          <Button buttonText="Download my Resume" />
        </a>
      </div>

      <Document file={SamLawResume} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
