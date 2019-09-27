// @flow

import type {Node} from 'react';

export type InputComponentPropsType = {
    +onChange: (value: mixed) => mixed,
    +errorList: Array<Error>,
};

export type FieldDataType = {|
    +id: string,
    +validate: (value: mixed, formData: mixed) => Array<Error>,
    // eslint-disable-next-line id-match
    +fieldComponent: React$ComponentType<InputComponentPropsType>,
|};

export type FieldSetWrapperDataType = {
    +children: Node,
    +legend: Node,
};

export type FieldSetDataType = {|
    +id: string,
    +fieldList: Array<FieldDataType>,
    +fieldSetWrapper: {|
        // eslint-disable-next-line id-match
        +component: React$ComponentType<FieldSetWrapperDataType>,
        +legend: Node,
    |},
|};

export type FormGeneratorConfigType = {|
    +fieldSetList: Array<FieldSetDataType>,
|};
