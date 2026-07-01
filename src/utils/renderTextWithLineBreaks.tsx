import { Fragment, type ReactNode } from "react";

const LINE_BREAK_MARKER = "[br]";

export function renderTextWithLineBreaks(
  text: string,
  renderLine: (line: string) => ReactNode = (line) => line
) {
  const lines = text
    .split(LINE_BREAK_MARKER)
    .flatMap((line) => line.split("\n"));

  return lines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {renderLine(line)}
      {index < lines.length - 1 && <br />}
    </Fragment>
  ));
}
