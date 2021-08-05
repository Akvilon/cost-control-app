import axios from "axios";
import CONST from '../constants';
import {ExpenseItemType} from "../types/ExpenseItemType";
import moment from "moment";


export class ApiService {

    public static getExpenseList = async () => {
        try {
            const response = await axios.get(`${CONST.mainFirebaseUrl}/expenses.json`);
            return await response.data;
        } catch (e) {
            throw e;
        }
    }

    public static addExpenseItem = async (item: ExpenseItemType) => {
        try {
            const requestOptions = {
                title: item.title,
                value: item.value,
                date: {
                    day: moment().format('DD.MM.YYYY'),
                    month: moment().format('MMM'),
                    year: moment().format('YYYY')
                }
            }
            const response = await axios.post(`${CONST.mainFirebaseUrl}/expenses.json`, requestOptions);

            const newItem = {
                ...requestOptions,
                id: response.data.name
            }
            return newItem;
        }
        catch (e) {
            throw e;
        }
    }


    public static patchExpenseList = async (field: string, value: string | number, id: string | undefined) => {

        try {
            const patchItem = {
                [field]: value
            }
            const response = await axios.patch(`${CONST.mainFirebaseUrl}/expenses/${id}.json`, patchItem);
            return await response.data;
        } catch (e) {
            throw e;
        }
    }
}
