import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpendable, setIsExpandable] = useState(true);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpendable
    ? children.substring(0, limit) + "..."
    : children;

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        size={"xs"}
        onClick={() => setIsExpandable(!isExpendable)}
        marginLeft={2}
      >
        {isExpendable ? " Show More" : " Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
