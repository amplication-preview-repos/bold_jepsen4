import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type Tweet = {
  author: string | null;
  authorLookup: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likeCount: number | null;
  likes?: Array<Like>;
  media: JsonValue;
  retweetCount: number | null;
  updatedAt: Date;
};
