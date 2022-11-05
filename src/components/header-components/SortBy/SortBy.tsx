import React, { useCallback } from "react";

interface SortByProps {
  sortBy: any;
}

export function SortBy(props: SortByProps) {
  const { sortBy } = props;
  const callback = useCallback(
    (e: any) => {
      sortBy(e?.currentTarget?.value);
    },
    [sortBy]
  );
  return (
    <ul className="header--sorting">
      <li>Sort by </li>
      <li>
        <select className="header--sorting-selector" onChange={callback}>
          <option>Alphabet</option>
          <option>Rating</option>
        </select>
      </li>
    </ul>
  );
}
