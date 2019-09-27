// @flow

import type {Node} from 'react';
import React from 'react';

type PropsType = {
    +children: Node,
};

export type FieldSetPropsType = PropsType;

export function FieldSet(props: PropsType): Node {
    const {children} = props;

    return <fieldset>{children}</fieldset>;
}
