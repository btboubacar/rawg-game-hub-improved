import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Game from "../entities/Game";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItems = ({ children, term }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItems;
