import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  authorLookup?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likeCount?: SortOrder;
  media?: SortOrder;
  retweetCount?: SortOrder;
  updatedAt?: SortOrder;
};
