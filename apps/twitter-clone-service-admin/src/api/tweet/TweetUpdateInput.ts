import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";

export type TweetUpdateInput = {
  author?: string | null;
  authorLookup?: string | null;
  content?: string | null;
  likeCount?: number | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  media?: InputJsonValue;
  retweetCount?: number | null;
};
