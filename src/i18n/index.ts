import en_US from './en_US';

let locale = navigator.language;

const langs = {
    'en-US': en_US,
    // 'zh-CN': 
}

export default langs[locale as 'en-US'] || en_US;