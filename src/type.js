// @flow

import type {FieldSetPropsType} from './element/field-set/field-set';

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

export type FieldSetDataType = {|
    +id: string,
    +fieldList: Array<FieldDataType>,
    // eslint-disable-next-line id-match
    +fieldSetWrapper: React$ComponentType<FieldSetPropsType>,
|};

export type FormGeneratorConfigType = {|
    +fieldSetList: Array<FieldSetDataType>,
|};
