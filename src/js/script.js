// Nav Fix 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset> fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};


// ham
const ham = document.querySelector('#ham');
const navmenu = document.querySelector('#navmenu');

ham.addEventListener('click', function() {
    ham.classList.toggle('hamact');
    navmenu.classList.toggle('hidden');
});


// ham out click
window.addEventListener('click', function(e) {
    if(e.target != ham && e.target != navmenu) {
        ham.classList.remove('hamact');
        navmenu.classList.add('hidden');
    }
});

//catergory
const categoryItems = document.querySelectorAll('#kat');
const productItems = document.querySelectorAll('#produk');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hapus kelas 'active' dari semua item kategori
        categoryItems.forEach(category => {
            category.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke item kategori yang dipilih
        item.classList.add('active');

        const selectedCategory = item.getAttribute('data-category');

        // Tampilkan atau sembunyikan produk berdasarkan kategori yang dipilih
        productItems.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (selectedCategory === 'all' || selectedCategory === productCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
