function xlang(key) {
    let s = key || '';
    const v = s.indexOf('$xlang.') == 0 || s.indexOf('_lang.') == 0;
    if (v) return ` xlang="${s}" `;
    return '';
}
export { xlang }