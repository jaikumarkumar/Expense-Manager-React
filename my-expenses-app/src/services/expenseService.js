import { API_BASE_URL } from "../constants/constants";
import axiosInstance from "../axios/axiosInstance";

export const fetchExpenses = async () => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/api/expenses`);
      return response.data; // Return the data directly
    } catch (error) {
      console.error("Error fetching expenses:", error.message);
      throw new Error("Failed to fetch expenses. Please try again."); // Propagate the error
    }
  };
export const addExpense = async (expense) => {
    try {
      const response = await axiosInstance.post(`${API_BASE_URL}/api/expenses`, expense);
      return response.data; // Return the data directly
    } catch (error) {
      console.error("Error adding expense:", error.message);
      throw new Error("Failed to add expense. Please try again.",error.message); // Propagate the error
    }
  };
export const updateExpense = async (id, expense) => {
    try {
      const response = await axiosInstance.put(`${API_BASE_URL}/api/expenses/${id}`, expense);
      return response.data; // Return the data directly
    } catch (error) {
      console.error("Error updating expense:", error.message);
      throw new Error("Failed to update expense. Please try again."); // Propagate the error
    }
  };
export const deleteExpense = async (id) => {
    try {
      const response = await axiosInstance.delete(`${API_BASE_URL}/api/expenses/${id}`);
      return response.data; // Return the data if needed for confirmation
    } catch (error) {
      console.error("Error deleting expense:", error.message);
      throw new Error("Failed to delete expense. Please try again."); // Propagate the error
    }
  };