import type { PropsWithChildren } from "react";

export type TGraphqlErrorExtension = {
  exception: {
    data?: {
      message?: {
        messages: {
          message: string;
        }[];
      }[];
    };
  };
};

export type TPropsWithChildren = PropsWithChildren;
