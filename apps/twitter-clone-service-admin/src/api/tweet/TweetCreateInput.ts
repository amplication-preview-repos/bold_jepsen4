import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";

export type TweetCreateInput = {
  author?: string | null;
  authorLookup?: string | null;
  content?: string | null;
  likeCount?: number | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  media?: InputJsonValue;
  retweetCount?: number | null;
};
