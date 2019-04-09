import en_US from './en_US';
import zh_CN from './zh_CN';

let locale = navigator.language;

const langs = {
    'en-US': zh_CN,
    'zh-CN': zh_CN
}

export default langs[locale as 'en-US'] || en_US;