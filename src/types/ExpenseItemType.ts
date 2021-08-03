import {DateType} from "./DateType";

export type ExpenseItemType = {
    title: string | null
    value: number | null
    id?: string
    date?: DateType
}