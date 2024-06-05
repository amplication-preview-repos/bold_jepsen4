import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  follower?: SortOrder;
  followerLookup?: SortOrder;
  following?: SortOrder;
  followingLookup?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
