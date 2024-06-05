import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="authorLookup" source="authorLookup" />
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="likeCount" source="likeCount" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <div />
        <NumberInput step={1} label="retweetCount" source="retweetCount" />
      </SimpleForm>
    </Create>
  );
};
