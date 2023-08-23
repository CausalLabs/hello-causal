import { format, parseISO } from "date-fns";

export default function HCDate({ dateString }: { dateString: string }) {
  const date: Date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
