// @flow

import type {Node} from 'react';
import React from 'react';

import {FormGenerator} from '../../../../src/form-generator';
import type {FormGeneratorConfigType} from '../../../../src/type';
import {InputText} from '../../../../src/element/input-text/c-input-text';
import {FieldSet} from '../../../../src/element/field-set/field-set';

const formGeneratorConfig: FormGeneratorConfigType = {
    fieldSetList: [
        {
            name: 'aboutUser',
            fieldList: [
                {
                    name: 'name',
                    validate: (value: mixed, formData: {}): Array<Error> => [],
                    fieldComponent: InputText,
                },
                {
                    name: 'last name',
                    validate: (value: mixed, formData: {}): Array<Error> => [],
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
    return (
        <div>
            <FormGenerator config={formGeneratorConfig}/>
        </div>
    );
}
