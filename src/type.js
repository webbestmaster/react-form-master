// @flow

import type {Node} from 'react';

export type InputComponentOnChangeType = (name: string, value: mixed) => mixed;

export type InputComponentPropsType = {
    +name: string,
    +onChange: InputComponentOnChangeType,
    +errorList: Array<Error>,
};

export type FieldDataType = {|
    +name: string,
    +validate: (value: mixed, formData: {}) => Array<Error>,
    // eslint-disable-next-line id-match
    +fieldComponent: React$ComponentType<InputComponentPropsType>,
|};

export type FieldSetWrapperDataType = {
    +children: Node,
    +legend: Node,
};

export type FieldSetDataType = {|
    +name: string,
    +fieldList: Array<FieldDataType>,
    +fieldSetWrapper: {|
        // eslint-disable-next-line id-match
        +component: React$ComponentType<FieldSetWrapperDataType>,
        +legend: Node,
    |},
|};

export type FormGeneratorConfigType = {|
    +fieldSetList: Array<FieldSetDataType>,
    +otherProps: mixed,
|};
