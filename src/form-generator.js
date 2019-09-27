// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {hasProperty} from '../www/js/lib/is';

import type {FieldDataType, FieldSetDataType, FormGeneratorConfigType, InputComponentOnChangeType} from './type';

type PropsType = {|
    +config: FormGeneratorConfigType,
|};

type StateType = {|
    +formData: {
        +[key: string]: mixed,
    },
    +formValidation: {
        +[key: string]: Array<Error>,
    },
|};

export class FormGenerator extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            formData: {},
            formValidation: {},
        };
    }

    createOnChangeFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        const view = this;
        const {name, validate, fieldComponent: FieldComponent} = fieldData;

        return (value: mixed) => {
            const {state} = view;
            const formData = {...state.formData, [name]: value};
            // const formValidation = {...state.formValidation, [name]: validate(name, value, formData)};

            // view.setState({formData, formValidation});
            view.setState({formData});
        };
    }

    renderField = (fieldData: FieldDataType): Node => {
        const view = this;
        const {state} = view;
        const {formValidation} = state;
        const {name, validate, fieldComponent: FieldComponent} = fieldData;

        const onChangeFieldHandler = view.createOnChangeFieldHandler(fieldData);
        const errorList = hasProperty(formValidation, name) ? formValidation[name] : [];

        return <FieldComponent errorList={errorList} key={name} name={name} onChange={onChangeFieldHandler}/>;
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

    handleFormSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
        evt.preventDefault();
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
