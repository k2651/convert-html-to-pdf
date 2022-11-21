// import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import jsPDF from "jspdf";
import Template from "./Template";

function App() {
  const TemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(TemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };
  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div ref={TemplateRef}>
        <Template />
      </div>
    </div>
  );

}

export default App;
