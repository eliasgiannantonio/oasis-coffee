function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".barraNav");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}