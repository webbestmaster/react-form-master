// @flow

import type {Node} from 'react';
import React from 'react';

import type {InputComponentPropsType} from '../../type';

type PropsType = InputComponentPropsType;

export function InputText(props: PropsType): Node {
    function handleOnChange(evt: SyntheticEvent<HTMLInputElement>) {
        props.onChange(evt.currentTarget.value);
    }

    return <input onChange={handleOnChange} type="text"/>;
}
