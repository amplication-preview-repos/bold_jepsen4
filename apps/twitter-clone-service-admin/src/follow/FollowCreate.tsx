import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="follower" source="follower" />
        <TextInput label="followerLookup" source="followerLookup" />
        <TextInput label="following" source="following" />
        <TextInput label="followingLookup" source="followingLookup" />
      </SimpleForm>
    </Create>
  );
};
