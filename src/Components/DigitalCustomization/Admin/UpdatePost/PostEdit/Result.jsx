import { useState, useEffect, useContext, useRef } from "react";
import html2canvas from "html2canvas";
import { DataContext } from "./context/DataProvider";

import { Box, styled } from "@mui/material";

//display the output
const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const outputRef = useRef(null);

  useEffect(() => {
    const srcCode = `
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
      </html>
    `;
    setSrc(srcCode);
  }, [html, css, js]);

  const handlePrint = () => {
    if (!outputRef.current) return;

    html2canvas(outputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "poster.png";
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <div>
      <br></br>
      <Container style={html || css || js ? null : { background: "#444857" }}>
        <div ref={outputRef} dangerouslySetInnerHTML={{ __html: src }} />
      </Container>
      <button className="btn_dash_admin_cen" onClick={handlePrint}>
        Download
      </button>
    </div>
  );
};

export default Result;
