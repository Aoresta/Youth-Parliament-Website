import { galleryEditable } from "./gallery-edit-here";
import {
  mediaMembersEditable,
  oppositionMembersEditable,
  rulingMembersEditable,
  tableOfficerMembersEditable
} from "./members-edit-here";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const placeholderImage = `${basePath}/member-placeholder.svg`;

export const parties = {
  ruling: {
    name: "Ruling Party",
    shortName: "Government",
    href: "/ruling-party",
    color: "#c9972b",
    dark: "#5b4216",
    intro:
      "The ruling party leads the mock government, introduces bills, answers questions, and carries responsibility for policy decisions.",
    quote: "Serve the House, serve the people."
  },
  opposition: {
    name: "Opposition Party",
    shortName: "Opposition",
    href: "/opposition",
    color: "#1f6f55",
    dark: "#143e35",
    intro:
      "The opposition examines every decision, asks hard questions, and offers alternative policy ideas with discipline and respect.",
    quote: "Strong opposition - strengthens democracy."
  },
  media: {
    name: "Media",
    shortName: "Press Gallery",
    href: "/media",
    color: "#8d1f2d",
    dark: "#3d1018",
    intro:
      "The media desk documents the event, prepares briefings, interviews members, and presents the public record of the session.",
    quote: "Record truthfully, report responsibly."
  },
  speaker: {
    name: "Speaker",
    shortName: "Presiding Chair",
    href: "/speaker",
    color: "#6d3fb2",
    dark: "#2f1b58",
    intro:
      "The Speaker presides over the House, maintains discipline, recognizes members, and protects the dignity of debate.",
    quote: "Order gives debate its power."
  },
  table: {
    name: "Table Officers",
    shortName: "Secretariat",
    href: "/table-officer",
    color: "#315b96",
    dark: "#172c52",
    intro:
      "The table officers keep procedure fair, record decisions, track time, manage motions, and support the working of the House.",
    quote: "Procedure gives debate its power."
  }
};

export const speakerMembers = prepareMembers(tableOfficerMembersEditable.slice(0, 1), "speaker");
export const rulingMembers = prepareMembers(rulingMembersEditable, "ruling");
export const oppositionMembers = prepareMembers(oppositionMembersEditable, "opposition");
export const mediaMembers = prepareMembers(mediaMembersEditable, "media");
export const tableOfficerMembers = prepareMembers(tableOfficerMembersEditable.slice(1), "table");

export const gallery = galleryEditable.map((item) => {
  const raw = typeof item.image === "string" ? item.image.trim() : "";
  return {
    title: item.title,
    text: item.text,
    image: raw ? photoPath(raw) : null,
    alt: (typeof item.alt === "string" && item.alt.trim()) || item.title
  };
});

export const counts = [
  ["Speaker", "1"],
  ["Table Officers", "6"],
  ["Ruling Party", "20"],
  ["Opposition", "20"],
  ["Media", "5"]
];

function prepareMembers(members, partyKey) {
  return members.map((member) => ({
    ...member,
    partyKey,
    image: photoPath(member.image)
  }));
}

function photoPath(fileName) {
  if (!fileName) {
    return placeholderImage;
  }

  if (fileName.startsWith("http") || fileName.startsWith("/")) {
    return `${basePath}${fileName}`;
  }

  return `${basePath}/members/${fileName}`;
}
