// @flow

import type {Node} from 'react';
import React from 'react';

import {FormGenerator} from '../../../../src/form-generator';
import type {FormGeneratorConfigType} from '../../../../src/type';
import {InputText} from '../../../../src/field/input-text/c-input-text';
import {FieldSet} from '../../../../src/field/field-set/field-set';

const formGeneratorConfig: FormGeneratorConfigType = {
    fieldSetList: [
        {
            name: 'aboutUser',
            fieldList: [
                {
                    name: 'name',
                    validate: (name: string, value: mixed, formData: {}): Array<Error> => {
                        const errorList = [];

                        if (!value || String(value).length <= 3) {
                            errorList.push(new Error(`Can not validate -> ${name} : ${String(value)}, too short`));
                        }

                        return errorList;
                    },
                    fieldComponent: InputText,
                },
                {
                    name: 'last name',
                    validate: (name: string, value: mixed, formData: {}): Array<Error> => [],
                    fieldComponent: InputText,
                },
            ],
            fieldSetWrapper: {
                component: FieldSet,
                legend: <legend>about user</legend>,
            },
        },
    ],
    otherProps: null,
};

export function App(): Node {
    function handleFormSubmit(formData: {}) {
        console.log('form data is here', formData);
    }

    return <FormGenerator config={formGeneratorConfig} onSubmit={handleFormSubmit}/>;
}
