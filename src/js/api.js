import axios from "axios";

class BookAPI {
    async fetchCategories() {
        try {
            // Виконуємо GET-запит на сервер
            const response = await axios.get(`https://books-backend.p.goit.global/books/category-list`);
            // Повертаємо дані про категорії
            return response.data;
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    }

    async fetchTopCategories() {
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            return response.data;
        } catch (error) {
            console.error("Error fetching top categories:", error);
            throw error;
        }
    }

    async fetchBooksByCategory(selectedCategory) {
        try {
            const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching books by category:", error);
            throw error;
        }
    }

    async fetchBookById(bookId) {
        try {
            const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching book by ID:", error);
            throw error;
        }
    }
}

export default BookAPI; 
