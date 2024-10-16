import {API_BASE_URL} from '../constants/constants';
import axiosInstance from '../axios/axiosInstance';

export const fetchExpenses = () => axiosInstance.get(API_BASE_URL +"/api/expenses");
export const addExpense = (expense) => axiosInstance.post(API_BASE_URL +"/api/expenses", expense);
export const updateExpense = (id, expense) => axiosInstance.put(`${API_BASE_URL}/api/expenses/${id}`, expense);
export const deleteExpense = (id) => axiosInstance.delete(`${API_BASE_URL}/api/expenses/${id}`);