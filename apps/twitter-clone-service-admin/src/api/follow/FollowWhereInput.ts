import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  follower?: StringNullableFilter;
  followerLookup?: StringNullableFilter;
  following?: StringNullableFilter;
  followingLookup?: StringNullableFilter;
  id?: StringFilter;
};
