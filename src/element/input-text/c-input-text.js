// @flow

import type {Node} from 'react';
import React from 'react';

import type {InputComponentPropsType} from '../../type';

type PropsType = InputComponentPropsType;

export function InputText(props: PropsType): Node {
    const {name, onChange} = props;

    function handleOnChange(evt: SyntheticEvent<HTMLInputElement>) {
        onChange(evt.currentTarget.value);
    }

    return <input name={name} onChange={handleOnChange} type="text"/>;
}
