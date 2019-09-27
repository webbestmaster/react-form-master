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
            id: 'about user',
            fieldList: [
                {
                    id: 'name',
                    validate: (value: mixed, formData: mixed): Array<Error> => [],
                    fieldComponent: InputText,
                },
            ],
            fieldSetWrapper: FieldSet,
        },
    ],
};

export function App(): Node {
    return (
        <div>
            <FormGenerator config={formGeneratorConfig}/>
        </div>
    );
}
