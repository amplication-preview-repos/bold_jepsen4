export type Follow = {
  createdAt: Date;
  follower: string | null;
  followerLookup: string | null;
  following: string | null;
  followingLookup: string | null;
  id: string;
  updatedAt: Date;
};
