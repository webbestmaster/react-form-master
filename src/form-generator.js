// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {FieldDataType, FieldSetDataType, FormGeneratorConfigType, InputComponentOnChangeType} from './type';

type PropsType = {|
    +config: FormGeneratorConfigType,
|};

type StateType = {|
    +formData: {
        +[key: string]: mixed,
    },
|};

export class FormGenerator extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            formData: {},
        };
    }

    createOnChangeFieldHandler(): InputComponentOnChangeType {
        const view = this;

        return (name: string, value: mixed) => {
            const {state} = view;
            const {formData} = state;

            view.setState({formData: {...formData, [name]: value}});
        };
    }

    renderField = (fieldData: FieldDataType): Node => {
        const view = this;
        const {name, validate, fieldComponent: FieldComponent} = fieldData;

        const onChangeFieldHandler = view.createOnChangeFieldHandler();

        return <FieldComponent errorList={[]} key={name} name={name} onChange={onChangeFieldHandler}/>;
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

    handleFormSubmit = () => {
        console.log('handleFormSubmit');
    };

    render(): Node {
        const view = this;
        const {props} = view;
        const {config} = props;
        const {fieldSetList} = config;

        return (
            <form action="/" method="post" onChange={view.handleFormSubmit} onSubmit={view.handleFormSubmit}>
                {view.renderFieldSetList(fieldSetList)}
                <input type="submit" value="submit button"/>
            </form>
        );
    }
}
