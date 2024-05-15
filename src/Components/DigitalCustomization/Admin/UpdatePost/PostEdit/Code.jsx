import { useContext } from "react";

//components
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

import { DataContext } from "./context/DataProvider";

const Container = styled(Box)`
  background-color: #060606;

  width: 100%;
  position: relative;
  display: inline-flex;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="*"
        color="#0EBEFF"
      />
    </Container>
  );
};

export default Code;
