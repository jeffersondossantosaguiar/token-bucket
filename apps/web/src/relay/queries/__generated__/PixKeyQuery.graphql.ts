/**
 * @generated SignedSource<<6e321c915f190cb81f73cda4210486cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PixKeyQuery$variables = {
  key: string;
};
export type PixKeyQuery$data = {
  readonly keyCheck: {
    readonly account: {
      readonly accountNumber: string | null | undefined;
      readonly accountType: string | null | undefined;
      readonly branch: string | null | undefined;
      readonly openingDate: string | null | undefined;
      readonly participant: string | null | undefined;
    } | null | undefined;
    readonly creationDate: string | null | undefined;
    readonly key: string | null | undefined;
    readonly keyOwnershipDate: string | null | undefined;
    readonly keyType: string | null | undefined;
    readonly owner: {
      readonly name: string | null | undefined;
      readonly taxIdNumber: string | null | undefined;
      readonly type: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type PixKeyQuery = {
  response: PixKeyQuery$data;
  variables: PixKeyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "key"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "key",
        "variableName": "key"
      }
    ],
    "concreteType": "Pix",
    "kind": "LinkedField",
    "name": "keyCheck",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "key",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "keyType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "participant",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "branch",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accountNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accountType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "openingDate",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Owner",
        "kind": "LinkedField",
        "name": "owner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "taxIdNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "creationDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "keyOwnershipDate",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PixKeyQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PixKeyQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "828e0309a9fe4e3d5301001f78cb0f1b",
    "id": null,
    "metadata": {},
    "name": "PixKeyQuery",
    "operationKind": "query",
    "text": "query PixKeyQuery(\n  $key: String!\n) {\n  keyCheck(key: $key) {\n    key\n    keyType\n    account {\n      participant\n      branch\n      accountNumber\n      accountType\n      openingDate\n    }\n    owner {\n      type\n      taxIdNumber\n      name\n    }\n    creationDate\n    keyOwnershipDate\n  }\n}\n"
  }
};
})();

(node as any).hash = "9bb674ac9f9e43d402b2a16383f3bd78";

export default node;
