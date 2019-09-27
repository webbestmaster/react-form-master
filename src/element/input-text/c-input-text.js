// @flow

import type {Node} from 'react';
import React from 'react';

import type {InputComponentPropsType} from '../../type';

type PropsType = InputComponentPropsType;

export function InputText(props: PropsType): Node {
    return <input type="text"/>;
}
