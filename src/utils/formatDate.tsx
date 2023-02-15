export const getDate = (): string => {

    const date = new Date();

    let dd: string | number = date.getDate();
    if (dd < 10) dd = `0${dd}`

    let mm: string | number = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`

    let yy: number = date.getFullYear();

    return `${dd}/${mm}/${yy}`;
}