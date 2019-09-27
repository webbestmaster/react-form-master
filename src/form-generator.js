// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {FieldDataType, FieldSetDataType, FormGeneratorConfigType} from './type';

type PropsType = {|
    +config: FormGeneratorConfigType,
|};

function noop(value: mixed): null {
    console.log(value);
    return null;
}

export class FormGenerator extends Component<PropsType, null> {
    renderField = (fieldData: FieldDataType): Node => {
        const view = this;
        const {name, validate, fieldComponent: FieldComponent} = fieldData;

        return <FieldComponent errorList={[]} key={name} name={name} onChange={noop}/>;
    };

    renderFieldSet = (fieldSetData: FieldSetDataType): Node => {
        const view = this;

        const {name, fieldList, fieldSetWrapper} = fieldSetData;

        const {component: FieldSetWrapper, legend} = fieldSetWrapper;

        return (
            <FieldSetWrapper key={name} legend={legend}>
                {fieldList.map(view.renderField)}
            </FieldSetWrapper>
        );
    };

    renderFieldSetList = (fieldSetDataList: Array<FieldSetDataType>): Array<Node> => {
        const view = this;

        return fieldSetDataList.map(view.renderFieldSet);
    };

    render(): Node {
        const view = this;
        const {props} = view;
        const {config} = props;
        const {fieldSetList} = config;

        return (
            <form action="/" method="post">
                {view.renderFieldSetList(fieldSetList)}
                <input type="submit" value="sumbit button"/>
            </form>
        );
    }
}
