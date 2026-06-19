import type { ParamMatcher } from "@sveltejs/kit";
export const match: ParamMatcher = (param) =>{
    return param === 'eng' || param === 'pt'
}