type Validator<T = string> = (value?: T) => boolean;

export const isEmail: Validator = (v = '') => new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(v);
export const isRquired: Validator = (v = '') => !!v;
export const isEnglish: Validator = (v = '') => new RegExp(/[^a-z]/g).test(v);
export const isKorea: Validator = (v = '') => new RegExp(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/).test(v);
