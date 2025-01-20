// utils/auth.js
export const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("authToken"); // Ambil token dari localStorage
    return Boolean(token); // Mengembalikan true jika token ada, false jika tidak
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return false; // Jika terjadi error (misalnya, localStorage tidak tersedia), kembalikan false
  }
};
