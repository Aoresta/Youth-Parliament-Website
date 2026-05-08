import { MemberGrid, PageHero, Shell } from "../components";
import { parties, speakerMembers } from "../data";

export default function SpeakerPage() {
  return (
    <Shell>
      <PageHero
        partyKey="speaker"
        eyebrow="Presiding Chair"
        title={parties.speaker.name}
        copy={parties.speaker.intro}
      />
      <MemberGrid members={speakerMembers} title="Speaker of the House" />
    </Shell>
  );
}
