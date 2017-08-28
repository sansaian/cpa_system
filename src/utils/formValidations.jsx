//@flow
export function isEmpty(value: string): boolean
{
    //Checks if string is null, undefined, false, 0 or ""
    return Boolean(value);
}

export function isEmptyOrNull(value: string): boolean
{
    //Checks if string is undefined, false, 0 or ""
    return !(value === undefined || value === false || value === '' || value === 0);
}