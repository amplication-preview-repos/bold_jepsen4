import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  authorLookup?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likeCount?: IntNullableFilter;
  likes?: LikeListRelationFilter;
  media?: JsonFilter;
  retweetCount?: IntNullableFilter;
};
