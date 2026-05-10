import Link from "next/link";
import { CountBand, Hero, PartyLinks, Shell } from "./components";

export default function HomePage() {
  return (
    <Shell>
      <Hero
        eyebrow="Annual School Youth Parliament"
        title="Young voices. Real debate. Responsible leadership."
        copy="St. Andrews Scots Sr. Sec. School"
        partyKey="ruling"
        actions={
          <>
            <Link className="primary-action" href="/ruling-party">
              Ruling Party
            </Link>
            <Link className="secondary-action" href="/opposition">
              Opposition
            </Link>
          </>
        }
      />
      <CountBand />
      <PartyLinks />
    </Shell>
  );
}
