import { Button } from "@chakra-ui/react";

export default function Pagination({ current, onChange, total }) {

    const prev = <Button disabled={current === 1} onClick={() => onChange(current - 1)}>Prev</Button>;
  
    const next = <Button disabled={current===total} onClick={() => onChange(current + 1)}>Next</Button>;
  
    const page = new Array(total).fill(0).map((a, i) => <Button onClick={() => onChange(i + 1)} disabled={current === i + 1}>
        {i + 1}
      </Button>
    );
  
    return (
      <>
        {prev}
        {page}
        {next}
      </>
    );
  }