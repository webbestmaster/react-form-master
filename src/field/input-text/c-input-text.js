// @flow

import type {Node} from 'react';
import React from 'react';

import type {InputComponentPropsType} from '../../type';

type PropsType = InputComponentPropsType;

export function InputText(props: PropsType): Node {
    const {name, onChange, errorList} = props;

    function handleOnChange(evt: SyntheticEvent<HTMLInputElement>) {
        console.log(name, '-', evt.currentTarget.value);
        onChange(evt.currentTarget.value);
    }

    return (
        <label>
            <input name={name} onChange={handleOnChange} type="text"/>
            <br/>
            errorList: {errorList.map((error: Error): string => error.message)}
        </label>
    );
}
